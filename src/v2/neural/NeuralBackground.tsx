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

    // 1. Renderer Setup (Glass-friendly alpha)
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: "high-performance"
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(
      -window.innerWidth / 2, 
      window.innerWidth / 2, 
      window.innerHeight / 2, 
      -window.innerHeight / 2, 
      0.1, 1000
    );
    camera.position.z = 10;

    // 2. Nodes Material (Custom Shader)
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
        uGlowIntensity: { value: 1.2 },
        uSize: { value: 5.5 }
      }
    });

    const points = new THREE.Points(pointsGeo, pointsMat);
    scene.add(points);

    // 3. Edges Material (Base Line)
    const edgesGeo = new THREE.BufferGeometry();
    const edgesMat = new THREE.LineBasicMaterial({
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      color: theme === 'mission' ? 0xf2b93b : 0x34d8ff,
      opacity: 0.12
    });

    const edgesMesh = new THREE.LineSegments(edgesGeo, edgesMat);
    scene.add(edgesMesh);

    // 4. Update Loop Synchronization
    let frameCount = 0;
    let lastFpsUpdate = performance.now();

    const unsubscribe = engine.subscribe((state) => {
      const { nodes, edges } = state;
      
      // Update Node Attributes
      const posArr = new Float32Array(nodes.length * 3);
      const enArr = new Float32Array(nodes.length);
      
      nodes.forEach((n, i) => {
        // Center the grid
        posArr[i * 3] = n.position[0] - window.innerWidth / 2;
        posArr[i * 3 + 1] = n.position[1] - window.innerHeight / 2;
        posArr[i * 3 + 2] = n.position[2];
        enArr[i] = n.energy;
      });

      pointsGeo.setAttribute('position', new THREE.BufferAttribute(posArr, 3));
      pointsGeo.setAttribute('aEnergy', new THREE.BufferAttribute(enArr, 1));
      
      // Update Edge Attributes
      const edgePosArr = new Float32Array(edges.length * 6);
      edges.forEach((edge, i) => {
        const nodeA = nodes[edge.from];
        const nodeB = nodes[edge.to];
        if (nodeA && nodeB) {
          const idx = i * 6;
          edgePosArr[idx] = nodeA.position[0] - window.innerWidth / 2;
          edgePosArr[idx + 1] = nodeA.position[1] - window.innerHeight / 2;
          edgePosArr[idx + 2] = nodeA.position[2];
          edgePosArr[idx + 3] = nodeB.position[0] - window.innerWidth / 2;
          edgePosArr[idx + 4] = nodeB.position[1] - window.innerHeight / 2;
          edgePosArr[idx + 5] = nodeB.position[2];
        }
      });
      edgesGeo.setAttribute('position', new THREE.BufferAttribute(edgePosArr, 3));
      
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

    window.addEventListener('resize', handleResize);

    return () => {
      unsubscribe();
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      if (containerRef.current?.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, [engine, theme]);

  return (
    <div ref={containerRef} className="fixed inset-0 -z-10 bg-[#020202] pointer-events-none">
       {/* Background Noise/Texture */}
       <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
       
       <div className="absolute top-4 right-6 font-mono text-[9px] tracking-widest text-neo-accent opacity-30 select-none">
          SYSTEM_LOAD: {fps} FPS // {theme.toUpperCase()}_MODE
       </div>
    </div>
  );
};
