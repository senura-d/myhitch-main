"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, RoundedBox, Line, AdaptiveDpr } from "@react-three/drei";
import { useMemo, useRef, Suspense } from "react";
import * as THREE from "three";

/* ---------- Palette ---------- */
const BLUE = {
  light: "#8fc0ff",
  base: "#5b9bff",
  mid: "#2f6bff",
  deep: "#1e5bff",
  panel: "#a8c4ff",
};

/* ---------- A floating "product box" ---------- */
function ProductBox({
  position,
  size = 1,
  color = BLUE.mid,
  speed = 1,
}: {
  position: [number, number, number];
  size?: number;
  color?: string;
  speed?: number;
}) {
  return (
    <Float speed={1.4 * speed} rotationIntensity={0.5} floatIntensity={0.9}>
      <RoundedBox
        args={[size, size, size]}
        radius={size * 0.18}
        smoothness={5}
        position={position}
        castShadow
      >
        <meshPhysicalMaterial
          color={color}
          roughness={0.22}
          metalness={0.1}
          clearcoat={0.8}
          clearcoatRoughness={0.25}
          reflectivity={0.6}
          envMapIntensity={0.7}
        />
      </RoundedBox>
    </Float>
  );
}

/* ---------- A translucent "category panel" ---------- */
function CategoryPanel({
  position,
  rotation = [0, 0, 0],
  w = 1.6,
  h = 1.1,
}: {
  position: [number, number, number];
  rotation?: [number, number, number];
  w?: number;
  h?: number;
}) {
  return (
    <Float speed={1.1} rotationIntensity={0.35} floatIntensity={0.7}>
      <RoundedBox
        args={[w, h, 0.08]}
        radius={0.12}
        smoothness={4}
        position={position}
        rotation={rotation}
      >
        <meshPhysicalMaterial
          color={BLUE.panel}
          transparent
          opacity={0.55}
          roughness={0.1}
          metalness={0}
          transmission={0.6}
          thickness={0.5}
          ior={1.3}
          clearcoat={1}
          envMapIntensity={0.8}
        />
      </RoundedBox>
    </Float>
  );
}

/* ---------- Commerce connection line with a travelling pulse ---------- */
function ConnectionLine({
  from,
  to,
}: {
  from: [number, number, number];
  to: [number, number, number];
}) {
  const pulse = useRef<THREE.Mesh>(null);
  const a = useMemo(() => new THREE.Vector3(...from), [from]);
  const b = useMemo(() => new THREE.Vector3(...to), [to]);
  const offset = useMemo(() => Math.random(), []);

  useFrame(({ clock }) => {
    if (!pulse.current) return;
    const t = (clock.getElapsedTime() * 0.25 + offset) % 1;
    pulse.current.position.lerpVectors(a, b, t);
    const s = 0.06 + Math.sin(t * Math.PI) * 0.05;
    pulse.current.scale.setScalar(s);
  });

  return (
    <group>
      <Line
        points={[from, to]}
        color={BLUE.base}
        lineWidth={1}
        transparent
        opacity={0.5}
        dashed
        dashSize={0.18}
        gapSize={0.12}
      />
      <mesh ref={pulse}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshBasicMaterial color={BLUE.mid} toneMapped={false} />
      </mesh>
    </group>
  );
}

/* ---------- Slow parallax drift of the whole rig ---------- */
function Rig({ children }: { children: React.ReactNode }) {
  const group = useRef<THREE.Group>(null);
  useFrame(({ clock, pointer }) => {
    if (!group.current) return;
    const t = clock.getElapsedTime();
    group.current.rotation.y = Math.sin(t * 0.15) * 0.12 + pointer.x * 0.15;
    group.current.rotation.x = Math.cos(t * 0.12) * 0.06 - pointer.y * 0.1;
  });
  return <group ref={group}>{children}</group>;
}

/* ---------- Scene contents ---------- */
function Scene() {
  const boxes: {
    position: [number, number, number];
    size: number;
    color: string;
    speed: number;
  }[] = [
    { position: [-2.4, 0.9, 0], size: 1.15, color: BLUE.mid, speed: 1 },
    { position: [2.6, 1.1, -0.6], size: 0.9, color: BLUE.base, speed: 1.2 },
    { position: [1.9, -1.4, 0.4], size: 1.05, color: BLUE.deep, speed: 0.9 },
    { position: [-2.9, -1.3, -0.4], size: 0.75, color: BLUE.light, speed: 1.3 },
    { position: [0.2, 2.0, -1], size: 0.7, color: BLUE.base, speed: 1.1 },
  ];

  const panels: {
    position: [number, number, number];
    rotation: [number, number, number];
    w: number;
    h: number;
  }[] = [
    { position: [-0.4, -0.2, -1.6], rotation: [0.1, 0.5, -0.08], w: 2, h: 1.3 },
    { position: [3.2, -0.4, -1.4], rotation: [0.05, -0.4, 0.06], w: 1.5, h: 1 },
    { position: [-3.4, 1.6, -1.2], rotation: [-0.1, 0.35, 0.05], w: 1.4, h: 0.95 },
  ];

  const links: [[number, number, number], [number, number, number]][] = [
    [
      [-2.4, 0.9, 0],
      [0.2, 2.0, -1],
    ],
    [
      [0.2, 2.0, -1],
      [2.6, 1.1, -0.6],
    ],
    [
      [2.6, 1.1, -0.6],
      [1.9, -1.4, 0.4],
    ],
    [
      [-2.4, 0.9, 0],
      [-2.9, -1.3, -0.4],
    ],
    [
      [-2.9, -1.3, -0.4],
      [1.9, -1.4, 0.4],
    ],
  ];

  return (
    <Rig>
      <ambientLight intensity={1.1} />
      <directionalLight position={[5, 6, 5]} intensity={2} castShadow />
      <directionalLight position={[-6, -2, 3]} intensity={0.8} color={BLUE.light} />
      <pointLight position={[0, 0, 4]} intensity={1} color="#bcd6ff" />

      {links.map((l, i) => (
        <ConnectionLine key={i} from={l[0]} to={l[1]} />
      ))}
      {panels.map((p, i) => (
        <CategoryPanel key={i} {...p} />
      ))}
      {boxes.map((b, i) => (
        <ProductBox key={i} {...b} />
      ))}
    </Rig>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
      <AdaptiveDpr pixelated />
    </Canvas>
  );
}
