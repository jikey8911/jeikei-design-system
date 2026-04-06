import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { useSystem } from '../system/SystemContext';
// @ts-ignore
import vertexShader from './shaders/vertex.glsl?raw';
// @ts-ignore
import fragmentShader from './shaders/fragment.glsl?raw';

export const NeuralBackground: React.FC = () => {
  const { engine, theme } = useSystem();
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const [fps, setFps] = useState(0);

  useEffect(() => {
    if (!containerRef.current || !engine) return;

    // Renderer Setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // THREE Scene
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(
      -window.innerWidth / 2, 
      window.innerWidth / 2, 
      window.innerHeight / 2, 
      -window.innerHeight / 2, 
      0.1, 1000
    );
    camera.position.z = 10;

    // Nodes Material
    const pointsGeo = new THREE.BufferGeometry();
    const pointsMat = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      uniforms: {
        uTime: { value: 0 },
        uAccent: { value: new THREE.Color(theme === 'mission' ? 0xf2b93b : 0x34d8ff) },
        uGlowIntensity: { value: 1.0 },
        uSize: { value: 6.0 }
      }
    });

    const points = new THREE.Points(pointsGeo, pointsMat);
    scene.add(points);

    // Performance tracking
    let frameCount = 0;
    let lastFpsUpdate = performance.now();

    // Subscribe to Engine
    const unsubscribe = engine.subscribe((state) => {
      const { nodes } = state;
      
      const posArr = new Float32Array(nodes.length * 3);
      const enArr = new Float32Array(nodes.length);
      
      nodes.forEach((n: any, i: number) => {
        posArr[i * 3] = n.position[0] - window.innerWidth / 2;
        posArr[i * 3 + 1] = n.position[1] - window.innerHeight / 2;
        posArr[i * 3 + 2] = n.position[2];
        enArr[i] = n.energy;
      });

      pointsGeo.setAttribute('position', new THREE.BufferAttribute(posArr, 3));
      pointsGeo.setAttribute('aEnergy', new THREE.BufferAttribute(enArr, 1));
      
      pointsMat.uniforms.uTime.value = performance.now() * 0.001;
      renderer.render(scene, camera);
      
      frameCount++;
      const now = performance.now();
      if (now - lastFpsUpdate > 1000) {
        setFps(frameCount);
        frameCount = 0;
        lastFpsUpdate = now;
      }
    });

    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.left = -window.innerWidth / 2;
      camera.right = window.innerWidth / 2;
      camera.top = window.innerHeight / 2;
      camera.bottom = -window.innerHeight / 2;
      camera.updateProjectionMatrix();
    };

    const handleClick = (e: MouseEvent) => {
      engine.emitPulse(e.clientX, e.clientY, 1.2);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('click', handleClick);

    return () => {
      unsubscribe();
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('click', handleClick);
      renderer.dispose();
      if (containerRef.current?.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, [engine, theme]);

  return (
    <div ref={containerRef} className="fixed inset-0 -z-10 bg-black pointer-events-none">
       <div className="absolute top-4 right-6 font-mono text-[9px] tracking-widest text-neo-accent opacity-30 select-none">
          SYSTEM_LOAD: {fps} FPS // {theme.toUpperCase()}_MODE
       </div>
    </div>
  );
};
