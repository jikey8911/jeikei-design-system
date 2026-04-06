import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
// @ts-ignore
import vertexShader from './shaders/vertex.glsl?raw';
// @ts-ignore
import fragmentShader from './shaders/fragment.glsl?raw';
import { NeuralEngine3D } from './neural-engine';
import { getPreset } from './presets';

interface NeuralGridProps {
  preset?: string;
  followMouse?: boolean;
  reactToTyping?: boolean;
  reactToClick?: boolean;
  className?: string;
}

export const NeuralGrid: React.FC<NeuralGridProps> = ({
  preset = 'nebula',
  followMouse = true,
  reactToTyping = true,
  reactToClick = true,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const engineRef = useRef<NeuralEngine3D>();
  const pointsRef = useRef<THREE.Points>();
  const linesRef = useRef<THREE.LineSegments>();
  const needsResizeRef = useRef(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const presetConfig = getPreset(preset);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.className = 'jk-neural-bg';
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
    camera.position.z = 1;

    const resize = () => {
      const { clientWidth: w, clientHeight: h } = container;
      renderer.setSize(w, h);
      camera.left = -w / 2;
      camera.right = w / 2;
      camera.top = h / 2;
      camera.bottom = -h / 2;
      camera.updateProjectionMatrix();
      needsResizeRef.current = true;
    };
    resize();
    window.addEventListener('resize', resize);

    // Engine
    const engine = new NeuralEngine3D({ width: renderer.domElement.width, height: renderer.domElement.height, preset });
    engineRef.current = engine;

    // Geometry for nodes
    const positions = new Float32Array(engine.nodes.length * 3);
    const energies = new Float32Array(engine.nodes.length);
    const positionAttr = new THREE.BufferAttribute(positions, 3);
    const energyAttr = new THREE.BufferAttribute(energies, 1);
    const pointsGeo = new THREE.BufferGeometry();
    pointsGeo.setAttribute('position', positionAttr);
    pointsGeo.setAttribute('aEnergy', energyAttr);

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      uniforms: {
        uTime: { value: 0 },
        uSize: { value: 6 * presetConfig.glowIntensity },
      },
    });

    const points = new THREE.Points(pointsGeo, material);
    pointsRef.current = points;
    scene.add(points);

    // Lines
    const linePositions = new Float32Array(engine.edges.length * 2 * 3);
    const lineAlpha = new Float32Array(engine.edges.length);
    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    lineGeo.setAttribute('alpha', new THREE.BufferAttribute(lineAlpha, 1));
    const lineMat = new THREE.LineBasicMaterial({
      color: new THREE.Color(0x00f6c0),
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending,
    });
    const lines = new THREE.LineSegments(lineGeo, lineMat);
    linesRef.current = lines;
    scene.add(lines);

    const updateGeometry = () => {
      engine.nodes.forEach((n, i) => {
        positions[i * 3] = n[0] - engine.size.width / 2;
        positions[i * 3 + 1] = n[1] - engine.size.height / 2;
        positions[i * 3 + 2] = n[2];
        energies[i] = engine.energies[i];
      });
      positionAttr.needsUpdate = true;
      energyAttr.needsUpdate = true;

      engine.edges.forEach(([a, b], idx) => {
        const aPos = engine.nodes[a];
        const bPos = engine.nodes[b];
        const i3 = idx * 6;
        linePositions[i3] = aPos[0] - engine.size.width / 2;
        linePositions[i3 + 1] = aPos[1] - engine.size.height / 2;
        linePositions[i3 + 3] = bPos[0] - engine.size.width / 2;
        linePositions[i3 + 4] = bPos[1] - engine.size.height / 2;
        lineAlpha[idx] = engine.lineEnergy[idx];
      });
      (lineGeo.getAttribute('position') as THREE.BufferAttribute).needsUpdate = true;
      (lineGeo.getAttribute('alpha') as THREE.BufferAttribute).needsUpdate = true;
      lineMat.opacity = 0.2 + 0.5 * presetConfig.glowIntensity;
    };

    let last = performance.now();
    let raf: number;
    const loop = () => {
      const now = performance.now();
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;

      if (needsResizeRef.current) {
        engine.resize(renderer.domElement.width, renderer.domElement.height);
        needsResizeRef.current = false;
      }

      engine.update(dt);
      material.uniforms.uTime.value = now * 0.001;
      updateGeometry();
      renderer.render(scene, camera);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const pointer = (e: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      engine.attract({ x, y });
      if (followMouse) engine.microPulse({ x, y });
    };
    const click = (e: MouseEvent) => {
      if (!reactToClick) return;
      const rect = renderer.domElement.getBoundingClientRect();
      engine.triggerPulse({ x: e.clientX - rect.left, y: e.clientY - rect.top }, 1.2);
    };
    const key = () => {
      if (!reactToTyping) return;
      const rect = renderer.domElement.getBoundingClientRect();
      engine.triggerPulse(
        { x: Math.random() * rect.width, y: Math.random() * rect.height },
        0.8
      );
    };

    window.addEventListener('mousemove', pointer);
    window.addEventListener('click', click);
    window.addEventListener('keydown', key);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', pointer);
      window.removeEventListener('click', click);
      window.removeEventListener('keydown', key);
      scene.clear();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [preset, followMouse, reactToTyping, reactToClick]);

  return <div ref={containerRef} className={className} style={{ position: 'absolute', inset: 0 }} />;
};

