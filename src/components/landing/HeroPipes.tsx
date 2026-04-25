import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';
import { useMemo, useRef } from 'react';

function CopperPipe({ position, rotation, scale = 1 }: { position: [number,number,number], rotation: [number,number,number], scale?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (meshRef.current) meshRef.current.rotation.z += delta * 0.05;
  });
  return (
    <mesh ref={meshRef} position={position} rotation={rotation} scale={scale} castShadow>
      <cylinderGeometry args={[0.08, 0.08, 3, 16]} />
      <meshStandardMaterial color="#b87333" metalness={0.9} roughness={0.2} />
    </mesh>
  );
}

function WaterDrop({ position }: { position: [number,number,number] }) {
  const ref = useRef<THREE.Mesh>(null);
  const speed = useMemo(() => 0.3 + Math.random() * 0.4, []);
  const initY = useMemo(() => position[1], [position]);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.position.y = initY - ((state.clock.elapsedTime * speed) % 3);
    ref.current.scale.setScalar(0.5 + Math.sin(state.clock.elapsedTime * 2) * 0.1);
  });
  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[0.04, 8, 8]} />
      <meshStandardMaterial color="#38bdf8" transparent opacity={0.8} metalness={0.3} roughness={0.1} />
    </mesh>
  );
}

function Particles() {
  const count = 80;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i*3]   = (Math.random() - 0.5) * 12;
      pos[i*3+1] = (Math.random() - 0.5) * 8;
      pos[i*3+2] = (Math.random() - 0.5) * 6;
    }
    return pos;
  }, []);
  const ref = useRef<THREE.Points>(null);
  useFrame((state) => {
    if (ref.current) ref.current.rotation.y = state.clock.elapsedTime * 0.02;
  });
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#38bdf8" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

function PipeNetwork() {
  return (
    <group>
      <CopperPipe position={[-2, 0, -1]} rotation={[0, 0, Math.PI/2]} scale={1.2} />
      <CopperPipe position={[0, 1.5, -1]} rotation={[0, 0, 0]} scale={0.8} />
      <CopperPipe position={[2, 0, -1]} rotation={[0, 0, Math.PI/2]} scale={1.2} />
      <CopperPipe position={[-1, -1.5, 0]} rotation={[0.3, 0.3, Math.PI/4]} scale={0.6} />
      <CopperPipe position={[1, -1.5, 0]} rotation={[-0.3, 0.3, -Math.PI/4]} scale={0.6} />

      {/* Elbow joints */}
      {([[-2.1,1.5,-1],[2.1,1.5,-1],[-2.1,-1.5,-1],[2.1,-1.5,-1]] as [number,number,number][]).map((p,i) => (
        <mesh key={i} position={p}>
          <torusGeometry args={[0.08, 0.04, 8, 16, Math.PI/2]} />
          <meshStandardMaterial color="#b87333" metalness={0.9} roughness={0.2} />
        </mesh>
      ))}

      {/* Leak drops */}
      {([[-2.1, 0.5, -1],[-2.1, -0.3, -1],[2.1, 0.8, -1]] as [number,number,number][]).map((p, i) => (
        <WaterDrop key={i} position={p} />
      ))}
    </group>
  );
}

export function HeroPipes() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 6], fov: 55 }} shadows gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} color="#38bdf8" castShadow />
        <pointLight position={[-3, 3, 3]} intensity={0.8} color="#0ea5e9" />
        <pointLight position={[3, -3, 2]} intensity={0.4} color="#b87333" />
        <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.5}>
          <PipeNetwork />
        </Float>
        <Particles />
        <fog attach="fog" args={['#020817', 8, 20]} />
      </Canvas>
    </div>
  );
}
