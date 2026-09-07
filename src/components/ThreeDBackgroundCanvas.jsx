import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeDBackgroundCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 25;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. 3D Floating Geometry Nodes (Icosahedron & Octahedron Wireframes)
    const group = new THREE.Group();

    // Node 1: Glowing Cyan Icosahedron
    const geo1 = new THREE.IcosahedronGeometry(4, 1);
    const mat1 = new THREE.MeshBasicMaterial({
      color: 0x0284c7,
      wireframe: true,
      transparent: true,
      opacity: 0.25
    });
    const mesh1 = new THREE.Mesh(geo1, mat1);
    mesh1.position.set(-12, 4, -5);
    group.add(mesh1);

    // Node 2: Tech Azure Octahedron
    const geo2 = new THREE.OctahedronGeometry(5, 2);
    const mat2 = new THREE.MeshBasicMaterial({
      color: 0x00a3ff,
      wireframe: true,
      transparent: true,
      opacity: 0.2
    });
    const mesh2 = new THREE.Mesh(geo2, mat2);
    mesh2.position.set(14, -6, -8);
    group.add(mesh2);

    // 3. 3D Floating Particle Field
    const particlesCount = 120;
    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 60;
    }
    const particlesGeo = new THREE.BufferGeometry();
    particlesGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particlesMat = new THREE.PointsMaterial({
      size: 0.25,
      color: 0x0284c7,
      transparent: true,
      opacity: 0.4
    });
    const particlesMesh = new THREE.Points(particlesGeo, particlesMat);
    group.add(particlesMesh);

    scene.add(group);

    // 4. Mouse Move Parallax Effect
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // 5. Animation Loop
    let animationFrameId;
    const animate = () => {
      mesh1.rotation.x += 0.003;
      mesh1.rotation.y += 0.004;

      mesh2.rotation.x -= 0.004;
      mesh2.rotation.y -= 0.003;

      particlesMesh.rotation.y += 0.001;

      // Smooth Mouse Parallax
      camera.position.x += (mouseX * 2 - camera.position.x) * 0.05;
      camera.position.y += (-mouseY * 2 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    // Handle Window Resize
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-60"
    />
  );
}
