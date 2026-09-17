import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";
import type { Group, Mesh } from "three";


function CameraRig() {
  useFrame((state) => {
    state.camera.position.x += (state.pointer.x * 0.65 - state.camera.position.x) * 0.025;
    state.camera.position.y += (state.pointer.y * 0.45 - state.camera.position.y) * 0.025;
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

function TorusRing({ radius, tube, speed, tilt }: { radius: number; tube: number; speed: number; tilt: number }) {

  const ref = useRef<Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = tilt + state.clock.elapsedTime * speed * 0.3;
    ref.current.rotation.y = state.clock.elapsedTime * speed;
  });
  return (
    <mesh ref={ref}>
      <torusGeometry args={[radius, tube, 32, 128]} />
      <meshStandardMaterial color="#3B82F6" metalness={1} roughness={0.2} emissive="#3B82F6" emissiveIntensity={0.15} />
    </mesh>
  );
}

function OrbitingGem({ phase, radius, speed, scale }: { phase: number; radius: number; speed: number; scale: number }) {
  const ref = useRef<Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const time = state.clock.elapsedTime * speed + phase;
    ref.current.position.x = Math.cos(time) * radius;
    ref.current.position.y = Math.sin(time * 0.8) * 0.9;
    ref.current.position.z = Math.sin(time) * radius * 0.5;
    ref.current.rotation.x = time * 1.4;
    ref.current.rotation.y = time * 1.1;
  });

  return (
    <mesh ref={ref} scale={scale}>
      <octahedronGeometry args={[0.45, 2]} />
      <meshStandardMaterial color="#93C5FD" metalness={1} roughness={0.12} emissive="#3B82F6" emissiveIntensity={0.2} />
    </mesh>
  );
}

function WireframeCage() {
  const ref = useRef<Group>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.08;
    ref.current.rotation.y = state.clock.elapsedTime * -0.12;
    ref.current.rotation.z = state.clock.elapsedTime * 0.04;
  });

  return (
    <group ref={ref}>
      <mesh scale={4.15}>
        <dodecahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color="#3B82F6" wireframe transparent opacity={0.16} />
      </mesh>
      <mesh scale={3.35} rotation={[0.6, 0.2, 0.9]}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color="#93C5FD" wireframe transparent opacity={0.1} />
      </mesh>
    </group>
  );
}

export function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 7.5], fov: 50 }}
      gl={{ antialias: true, alpha: true }}
    >
      <fog attach="fog" args={["#0A0B0F", 7, 16]} />
      <CameraRig />
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1.1} color="#E6F0FF" />
      <pointLight position={[-5, -3, -5]} intensity={1.6} color="#3B82F6" />
      <Suspense fallback={null}>
        <WireframeCage />
        <TorusRing radius={2.6} tube={0.008} speed={0.15} tilt={0.4} />
        <TorusRing radius={3.1} tube={0.005} speed={-0.1} tilt={-0.6} />
        <TorusRing radius={3.6} tube={0.004} speed={0.08} tilt={1.1} />
        <TorusRing radius={4.15} tube={0.003} speed={-0.18} tilt={1.35} />
        <OrbitingGem phase={0} radius={2.7} speed={0.55} scale={0.3} />
        <OrbitingGem phase={2.2} radius={3.15} speed={0.42} scale={0.24} />
        <OrbitingGem phase={4.4} radius={2.25} speed={0.62} scale={0.2} />
        <Sparkles count={120} scale={11} size={2.2} speed={0.45} color="#93C5FD" opacity={0.6} />
      </Suspense>
    </Canvas>
  );
}

