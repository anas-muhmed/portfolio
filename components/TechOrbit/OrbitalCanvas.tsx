"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import TechGrid from "./TechGrid";

interface OrbOrb {
  mesh: THREE.Mesh;
  label: string;
  orbitRadius: number;
  orbitSpeed: number;
  orbitAngle: number;
  orbitTilt: number;
  orbitTiltAxis: number;
}

const ORBITS = [
  {
    techs: ["Node.js", "React", "MongoDB", "Express"],
    radius: 18,
    speed: 0.008,
    color: 0x00d4ff,
    size: 1.3,
  },
  {
    techs: ["Docker", "AWS", "GitHub Actions", "Nginx"],
    radius: 30,
    speed: 0.005,
    color: 0x7c3aed,
    size: 1.5,
  },
  {
    techs: ["TypeScript", "Next.js", "Linux", "OpenAI API"],
    radius: 44,
    speed: 0.003,
    color: 0x00d4ff,
    size: 1.7,
  },
];

export default function OrbitalCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [tooltip, setTooltip] = useState<{ label: string; x: number; y: number } | null>(null);
  const [webglFailed, setWebglFailed] = useState(false);

  useEffect(() => {
    if (!mountRef.current) return;

    // Check WebGL support before attempting to create renderer
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    if (!gl) {
      setWebglFailed(true);
      return;
    }

    const mount = mountRef.current;
    const width = mount.clientWidth;
    const height = mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 1000);
    camera.position.set(0, 20, 90);
    camera.lookAt(0, 0, 0);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    } catch {
      setWebglFailed(true);
      return;
    }

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // Stars background
    const starGeo = new THREE.BufferGeometry();
    const starCount = 300;
    const starPos = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i++) {
      starPos[i] = (Math.random() - 0.5) * 300;
    }
    starGeo.setAttribute("position", new THREE.BufferAttribute(starPos, 3));
    const starMat = new THREE.PointsMaterial({ color: 0xffffff, size: 0.3, transparent: true, opacity: 0.4 });
    scene.add(new THREE.Points(starGeo, starMat));

    // Central sphere
    const centerGeo = new THREE.SphereGeometry(5, 32, 32);
    const centerMat = new THREE.MeshBasicMaterial({ color: 0x00d4ff });
    const centerSphere = new THREE.Mesh(centerGeo, centerMat);
    scene.add(centerSphere);

    // Center glow
    const glowGeo = new THREE.SphereGeometry(6.5, 32, 32);
    const glowMat = new THREE.MeshBasicMaterial({
      color: 0x00d4ff,
      transparent: true,
      opacity: 0.08,
      side: THREE.BackSide,
    });
    scene.add(new THREE.Mesh(glowGeo, glowMat));

    // Orbit rings + orbs
    const orbs: OrbOrb[] = [];
    const tiltAngles = [0.4, -0.6, 0.25];
    const tiltAxes = [0, 1, 0.5];

    ORBITS.forEach((orbit, oi) => {
      const ringGeo = new THREE.TorusGeometry(orbit.radius, 0.08, 8, 128);
      const ringMat = new THREE.MeshBasicMaterial({
        color: orbit.color,
        transparent: true,
        opacity: 0.15,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = tiltAngles[oi];
      ring.rotation.z = tiltAxes[oi] * 0.3;
      scene.add(ring);

      orbit.techs.forEach((tech, ti) => {
        const angle = (ti / orbit.techs.length) * Math.PI * 2;
        const orbGeo = new THREE.SphereGeometry(orbit.size, 16, 16);
        const orbMat = new THREE.MeshBasicMaterial({ color: orbit.color });
        const orb = new THREE.Mesh(orbGeo, orbMat);

        const orbGlowGeo = new THREE.SphereGeometry(orbit.size * 2, 16, 16);
        const orbGlowMat = new THREE.MeshBasicMaterial({
          color: orbit.color,
          transparent: true,
          opacity: 0.06,
          side: THREE.BackSide,
        });
        orb.add(new THREE.Mesh(orbGlowGeo, orbGlowMat));

        scene.add(orb);
        orbs.push({
          mesh: orb,
          label: tech,
          orbitRadius: orbit.radius,
          orbitSpeed: orbit.speed,
          orbitAngle: angle,
          orbitTilt: tiltAngles[oi],
          orbitTiltAxis: tiltAxes[oi],
        });
      });
    });

    // Mouse parallax
    const mouse = { x: 0, y: 0 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Raycaster for hover tooltips
    const raycaster = new THREE.Raycaster();
    const mouseNDC = new THREE.Vector2();
    const orbMeshes = orbs.map((o) => o.mesh);

    const handleMouseMoveCanvas = (e: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouseNDC.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseNDC.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(mouseNDC, camera);
      const hits = raycaster.intersectObjects(orbMeshes);
      if (hits.length > 0) {
        const hitOrb = orbs.find((o) => o.mesh === hits[0].object);
        if (hitOrb) {
          setTooltip({ label: hitOrb.label, x: e.clientX, y: e.clientY });
        }
      } else {
        setTooltip(null);
      }
    };
    mount.addEventListener("mousemove", handleMouseMoveCanvas);

    let animFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animFrameId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      centerSphere.rotation.y = t * 0.4;

      orbs.forEach((orb) => {
        orb.orbitAngle += orb.orbitSpeed;
        const x = Math.cos(orb.orbitAngle) * orb.orbitRadius;
        const z = Math.sin(orb.orbitAngle) * orb.orbitRadius;
        const cosT = Math.cos(orb.orbitTilt);
        orb.mesh.position.set(x, z * Math.sin(orb.orbitTilt), z * cosT);
      });

      camera.position.x += (mouse.x * 8 - camera.position.x) * 0.03;
      camera.position.y += (mouse.y * 5 + 20 - camera.position.y) * 0.03;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };
    animate();

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
      mount.removeEventListener("mousemove", handleMouseMoveCanvas);
      renderer.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  if (webglFailed) {
    return <TechGrid />;
  }

  return (
    <div className="relative w-full" style={{ height: "520px" }}>
      <div ref={mountRef} className="w-full h-full" />

      {tooltip && (
        <div
          className="fixed z-50 pointer-events-none px-3 py-1.5 rounded-lg font-mono text-xs text-[#00d4ff] border border-[#00d4ff33] bg-[#0a0a0a]"
          style={{ left: tooltip.x + 12, top: tooltip.y - 10 }}
        >
          {tooltip.label}
        </div>
      )}

      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="font-mono text-xs text-[#00d4ff] opacity-60 tracking-widest mt-1">
          FULL STACK
        </div>
      </div>
    </div>
  );
}
