import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Environment, Sparkles } from "@react-three/drei";
import type { Mesh } from "three";

function GoldOrb() {
  const ref = useRef<Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.15;
    ref.current.rotation.y = state.clock.elapsedTime * 0.2;
    const { x, y } = state.pointer;
    ref.current.position.x += (x * 0.5 - ref.current.position.x) * 0.05;
    ref.current.position.y += (y * 0.5 - ref.current.position.y) * 0.05;
  });
  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh ref={ref} scale={1.8}>
        <icosahedronGeometry args={[1, 8]} />
        <MeshDistortMaterial
          color="#D4AF37"
          roughness={0.15}
          metalness={0.95}
          distort={0.35}
          speed={1.6}
          emissive="#8a6a1f"
          emissiveIntensity={0.35}
        />
      </mesh>
    </Float>
  );
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
      <meshStandardMaterial color="#D4AF37" metalness={1} roughness={0.2} emissive="#D4AF37" emissiveIntensity={0.15} />
    </mesh>
  );
}

export function HeroScene() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 5], fov: 50 }}
      gl={{ antialias: true, alpha: true }}
    >
      <color attach="background" args={["#050505"]} />
      <ambientLight intensity={0.35} />
      <directionalLight position={[5, 5, 5]} intensity={1.4} color="#fff5d6" />
      <pointLight position={[-5, -3, -5]} intensity={2} color="#D4AF37" />
      <pointLight position={[3, -2, 3]} intensity={1} color="#8a6a1f" />
      <Suspense fallback={null}>
        <GoldOrb />
        <TorusRing radius={2.6} tube={0.008} speed={0.15} tilt={0.4} />
        <TorusRing radius={3.1} tube={0.005} speed={-0.1} tilt={-0.6} />
        <TorusRing radius={3.6} tube={0.004} speed={0.08} tilt={1.1} />
        <Sparkles count={80} scale={8} size={2} speed={0.4} color="#D4AF37" opacity={0.7} />
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  );
}
