'use client';

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const MatrixBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);

    // Particles representing "computational logic / neural nodes"
    const particlesCount = 1000;
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);
    const sizes = new Float32Array(particlesCount);

    for (let i = 0; i < particlesCount; i++) {
      // Position
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;

      // Color (Matrix green tones)
      colors[i * 3] = 0;
      colors[i * 3 + 1] = Math.random() * 0.5 + 0.2; // G
      colors[i * 3 + 2] = 0;

      // Sizes
      sizes[i] = Math.random() * 2;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    const material = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // Add lines between nearby points to simulate a neural network / matrix
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x00ff00,
      transparent: true,
      opacity: 0.05,
    });
    
    // For performance, we'll just animate the points
    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      
      points.rotation.y += 0.001;
      points.rotation.x += 0.0005;
      
      // Pulsing effect
      const time = Date.now() * 0.001;
      points.scale.x = 1 + Math.sin(time) * 0.05;
      points.scale.y = 1 + Math.sin(time) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 -z-10 pointer-events-none opacity-40"
      style={{ background: 'radial-gradient(circle at center, #0a0a0a 0%, #000 100%)' }}
    />
  );
};

export default MatrixBackground;
