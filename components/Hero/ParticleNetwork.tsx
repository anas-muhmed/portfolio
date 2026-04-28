"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

interface Particle {
  position: THREE.Vector3;
  velocity: THREE.Vector3;
}

export default function ParticleNetwork() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Check WebGL support
    const testCanvas = document.createElement("canvas");
    const gl = testCanvas.getContext("webgl") || testCanvas.getContext("experimental-webgl");
    if (!gl) return;

    const mount = mountRef.current;
    const width = mount.clientWidth;
    const height = mount.clientHeight;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 80;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    } catch {
      return;
    }
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // Particles
    const PARTICLE_COUNT = 120;
    const particles: Particle[] = [];
    const positions: number[] = [];
    const colors: number[] = [];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const x = (Math.random() - 0.5) * 160;
      const y = (Math.random() - 0.5) * 120;
      const z = (Math.random() - 0.5) * 60;
      particles.push({
        position: new THREE.Vector3(x, y, z),
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.06,
          (Math.random() - 0.5) * 0.06,
          (Math.random() - 0.5) * 0.02
        ),
      });
      positions.push(x, y, z);
      colors.push(0, 0.83, 1); // cyan #00d4ff
    }

    const particleGeometry = new THREE.BufferGeometry();
    const posArray = new Float32Array(positions);
    const colorArray = new Float32Array(colors);
    particleGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3));
    particleGeometry.setAttribute("color", new THREE.BufferAttribute(colorArray, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 1.2,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      sizeAttenuation: true,
    });

    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleSystem);

    // Lines geometry (dynamic)
    const MAX_LINES = PARTICLE_COUNT * 4;
    const linePositions = new Float32Array(MAX_LINES * 2 * 3);
    const lineColors = new Float32Array(MAX_LINES * 2 * 3);
    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
    lineGeometry.setAttribute("color", new THREE.BufferAttribute(lineColors, 3));

    const lineMaterial = new THREE.LineSegments(
      lineGeometry,
      new THREE.LineBasicMaterial({
        vertexColors: true,
        transparent: true,
        opacity: 0.15,
      })
    );
    scene.add(lineMaterial);

    // Mouse interaction
    const mouse = { x: 0, y: 0 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Animation
    const CONNECTION_DISTANCE = 28;
    let animFrameId: number;

    const animate = () => {
      animFrameId = requestAnimationFrame(animate);

      // Update particle positions
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const p = particles[i];
        p.position.add(p.velocity);

        // Bounce
        if (p.position.x > 80 || p.position.x < -80) p.velocity.x *= -1;
        if (p.position.y > 60 || p.position.y < -60) p.velocity.y *= -1;
        if (p.position.z > 30 || p.position.z < -30) p.velocity.z *= -1;

        const idx = i * 3;
        posArray[idx] = p.position.x;
        posArray[idx + 1] = p.position.y;
        posArray[idx + 2] = p.position.z;
      }
      particleGeometry.attributes.position.needsUpdate = true;

      // Update lines
      let lineCount = 0;
      for (let i = 0; i < PARTICLE_COUNT && lineCount < MAX_LINES; i++) {
        for (let j = i + 1; j < PARTICLE_COUNT && lineCount < MAX_LINES; j++) {
          const dist = particles[i].position.distanceTo(particles[j].position);
          if (dist < CONNECTION_DISTANCE) {
            const alpha = 1 - dist / CONNECTION_DISTANCE;
            const li = lineCount * 6;
            linePositions[li] = particles[i].position.x;
            linePositions[li + 1] = particles[i].position.y;
            linePositions[li + 2] = particles[i].position.z;
            linePositions[li + 3] = particles[j].position.x;
            linePositions[li + 4] = particles[j].position.y;
            linePositions[li + 5] = particles[j].position.z;

            lineColors[li] = 0;
            lineColors[li + 1] = 0.83 * alpha;
            lineColors[li + 2] = 1 * alpha;
            lineColors[li + 3] = 0;
            lineColors[li + 4] = 0.83 * alpha;
            lineColors[li + 5] = 1 * alpha;
            lineCount++;
          }
        }
      }

      lineGeometry.attributes.position.needsUpdate = true;
      lineGeometry.attributes.color.needsUpdate = true;
      lineGeometry.setDrawRange(0, lineCount * 2);

      // Camera slight follow mouse
      camera.position.x += (mouse.x * 6 - camera.position.x) * 0.02;
      camera.position.y += (mouse.y * 4 - camera.position.y) * 0.02;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 w-full h-full" />;
}
