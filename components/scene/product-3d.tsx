"use client";

import { useMemo, useRef, useState } from "react";
import { Html, RoundedBox, useCursor, useTexture } from "@react-three/drei";
import { ThreeEvent, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import type { Product } from "@/types/shop";
import { formatVnd } from "@/lib/format";

type Product3DProps = {
  product: Product;
  active: boolean;
  selected: boolean;
  placement?: {
    position: [number, number, number];
    rotation: [number, number, number];
    scale: [number, number, number];
  };
  onSelect: (product: Product) => void;
  onRemove?: (productId: string) => void;
};

function ProductDetails({ product }: { product: Product }) {
  const [width, height, depth] = product.dimensions;
  const legY = -height / 2 - 0.22;
  const legHeight = Math.max(0.28, height * 0.48);
  const x = width * 0.38;
  const z = depth * 0.36;

  if (product.kind === "table" || product.kind === "desk") {
    return (
      <>
        <RoundedBox args={[width * 0.9, height * 0.14, depth * 0.74]} radius={0.04} smoothness={5} position={[0, -height * 0.16, -depth * 0.08]} castShadow>
          <meshStandardMaterial color={product.color} roughness={0.42} metalness={0.08} />
        </RoundedBox>
        {[[-x, z], [x, z], [-x, -z], [x, -z]].map(([legX, legZ]) => (
          <mesh key={`${legX}-${legZ}`} position={[legX, legY + legHeight / 2, legZ]} castShadow>
            <boxGeometry args={[0.06, legHeight, 0.06]} />
            <meshStandardMaterial color={product.kind === "desk" ? "#202020" : product.color} roughness={0.46} />
          </mesh>
        ))}
      </>
    );
  }

  if (product.kind === "sofa" || product.kind === "bed") {
    const cushionCount = product.kind === "bed" ? 2 : 3;
    return (
      <>
        <RoundedBox args={[width, height * 0.72, depth * 0.12]} radius={0.04} smoothness={5} position={[0, height * 0.32, -depth * 0.47]} castShadow>
          <meshStandardMaterial color={product.color} roughness={0.62} />
        </RoundedBox>
        <RoundedBox args={[width * 0.12, height * 0.62, depth * 0.74]} radius={0.05} smoothness={5} position={[-width * 0.52, -height * 0.04, -depth * 0.08]} castShadow>
          <meshStandardMaterial color={product.color} roughness={0.58} />
        </RoundedBox>
        <RoundedBox args={[width * 0.12, height * 0.62, depth * 0.74]} radius={0.05} smoothness={5} position={[width * 0.52, -height * 0.04, -depth * 0.08]} castShadow>
          <meshStandardMaterial color={product.color} roughness={0.58} />
        </RoundedBox>
        {Array.from({ length: cushionCount }).map((_, index) => {
          const offset = (index - (cushionCount - 1) / 2) * (width / cushionCount) * 0.72;
          return (
            <RoundedBox key={index} args={[width / cushionCount * 0.62, height * 0.16, depth * 0.34]} radius={0.05} smoothness={5} position={[offset, height * 0.18, depth * 0.18]} castShadow>
              <meshStandardMaterial color={product.kind === "bed" ? "#f8f6f1" : product.color} roughness={0.72} />
            </RoundedBox>
          );
        })}
      </>
    );
  }

  if (product.kind === "chair") {
    return (
      <>
        <RoundedBox args={[width * 0.7, height * 0.58, depth * 0.12]} radius={0.04} smoothness={5} position={[0, height * 0.18, -depth * 0.36]} castShadow>
          <meshStandardMaterial color={product.color} roughness={0.52} />
        </RoundedBox>
        <mesh position={[0, -height * 0.48, 0]} castShadow>
          <cylinderGeometry args={[0.035, 0.035, height * 0.55, 20]} />
          <meshStandardMaterial color="#222" roughness={0.38} />
        </mesh>
        {[[-0.22, 0.2], [0.22, 0.2], [-0.22, -0.2], [0.22, -0.2]].map(([legX, legZ]) => (
          <mesh key={`${legX}-${legZ}`} position={[legX, -height * 0.76, legZ]} castShadow>
            <cylinderGeometry args={[0.018, 0.018, height * 0.42, 12]} />
            <meshStandardMaterial color="#222" roughness={0.38} />
          </mesh>
        ))}
      </>
    );
  }

  if (product.kind === "storage") {
    return (
      <>
        <RoundedBox args={[width * 0.92, height * 0.9, Math.max(0.18, depth * 0.66)]} radius={0.035} smoothness={4} position={[0.04, -0.02, -depth * 0.14]} castShadow receiveShadow>
          <meshStandardMaterial color={product.color} roughness={0.55} metalness={0.04} />
        </RoundedBox>
        {[0.25, -0.1, -0.45].map((y) => (
          <mesh key={y} position={[0, height * y, depth * 0.23]} castShadow>
            <boxGeometry args={[width * 0.82, 0.025, 0.05]} />
            <meshStandardMaterial color="#6b625a" roughness={0.45} />
          </mesh>
        ))}
      </>
    );
  }

  if (product.kind === "bath") {
    return (
      <RoundedBox args={[width * 0.88, height * 0.42, depth * 0.78]} radius={0.18} smoothness={8} position={[0, -height * 0.18, 0]} castShadow receiveShadow>
        <meshStandardMaterial color={product.color} roughness={0.46} />
      </RoundedBox>
    );
  }

  if (product.kind === "mirror") {
    return (
      <RoundedBox args={[width * 0.9, height * 0.95, 0.08]} radius={0.04} smoothness={5} position={[0, 0, 0.02]} castShadow>
        <meshStandardMaterial color="#f7f4ec" roughness={0.18} metalness={0.42} transparent opacity={0.56} />
      </RoundedBox>
    );
  }

  return null;
}

export function Product3D({ product, active, selected, placement, onSelect, onRemove }: Product3DProps) {
  const groupRef = useRef<THREE.Group>(null);
  const texture = useTexture(product.image);
  const [hovered, setHovered] = useState(false);
  useCursor(hovered);

  const [width, height, depth] = product.dimensions;
  const [scaleX, scaleY, scaleZ] = placement?.scale ?? [1, 1, 1];
  const scenePosition = placement?.position ?? product.position;
  const sceneRotation = placement?.rotation ?? [0, 0, 0];

  const imageMaterial = useMemo(() => {
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.wrapS = THREE.ClampToEdgeWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;

    return new THREE.MeshStandardMaterial({
      map: texture,
      color: "#ffffff",
      roughness: 0.36,
      metalness: 0.02,
      transparent: true,
      side: THREE.DoubleSide
    });
  }, [texture]);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    const targetPosition = scenePosition;
    const targetScale = active ? 1.15 : 1;
    groupRef.current.position.x = THREE.MathUtils.damp(groupRef.current.position.x, targetPosition[0], 8, delta);
    groupRef.current.position.y = THREE.MathUtils.damp(groupRef.current.position.y, targetPosition[1], 8, delta);
    groupRef.current.position.z = THREE.MathUtils.damp(groupRef.current.position.z, targetPosition[2], 8, delta);
    groupRef.current.rotation.x = THREE.MathUtils.damp(groupRef.current.rotation.x, sceneRotation[0], 8, delta);
    groupRef.current.rotation.y = THREE.MathUtils.damp(groupRef.current.rotation.y, sceneRotation[1] + (active ? 0.08 : 0), 8, delta);
    groupRef.current.rotation.z = THREE.MathUtils.damp(groupRef.current.rotation.z, sceneRotation[2], 8, delta);
    groupRef.current.scale.x = THREE.MathUtils.damp(groupRef.current.scale.x, scaleX * targetScale, 8, delta);
    groupRef.current.scale.y = THREE.MathUtils.damp(groupRef.current.scale.y, scaleY * targetScale, 8, delta);
    groupRef.current.scale.z = THREE.MathUtils.damp(groupRef.current.scale.z, scaleZ * targetScale, 8, delta);
  });

  const handlePointer = (event: ThreeEvent<PointerEvent>) => {
    event.stopPropagation();
    onSelect(product);
  };

  return (
    <group
      ref={groupRef}
      position={scenePosition}
      rotation={sceneRotation}
      scale={[scaleX * 0.85, scaleY * 0.85, scaleZ * 0.85]}
      onClick={handlePointer}
      onPointerOver={(event) => {
        event.stopPropagation();
        setHovered(true);
      }}
      onPointerOut={() => setHovered(false)}
    >
      <group rotation={[-0.08, 0, 0]}>
        <mesh position={[0.08, -0.08, -depth * 0.09]} castShadow receiveShadow>
          <boxGeometry args={[width * 0.96, height * 0.88, Math.max(0.06, depth * 0.16)]} />
          <meshStandardMaterial color={product.color} roughness={0.62} metalness={0.02} transparent opacity={0.72} />
        </mesh>
        <RoundedBox args={[width, height, 0.06]} radius={0.05} smoothness={5} position={[0, 0, 0.04]} castShadow receiveShadow>
          {imageMaterial ? <primitive object={imageMaterial} attach="material" /> : null}
        </RoundedBox>
        <ProductDetails product={product} />
      </group>

      {(active || hovered || selected) && (
        <mesh position={[0, -height / 2 - 0.045, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[Math.max(width, depth) * 0.52, Math.max(width, depth) * 0.58, 80]} />
          <meshBasicMaterial color={selected ? "#111111" : "#d6a45f"} transparent opacity={0.78} />
        </mesh>
      )}

      {active ? (
        <Html center position={[0, height / 2 + 0.44, 0]} distanceFactor={5.4}>
          <div className="w-[220px] rounded-[14px] bg-white/95 p-3 text-center shadow-[0_16px_40px_rgba(0,0,0,0.18)] backdrop-blur">
            <p className="text-[14px] font-medium leading-5 text-[#111]">{product.name}</p>
            <p className="text-[13px] leading-5 text-[#777]">{formatVnd(product.price)}</p>
          </div>
        </Html>
      ) : null}

      {onRemove ? (
        <Html center position={[width / 2 + 0.28, height / 2 + 0.38, depth / 2 + 0.18]} distanceFactor={5.2}>
          <button
            aria-label={`Remove ${product.name}`}
            onClick={(event) => {
              event.stopPropagation();
              onRemove(product.id);
            }}
            className="grid h-8 w-8 place-items-center rounded-full border border-[#111] bg-white text-[17px] font-semibold leading-none text-[#111] shadow-[0_8px_18px_rgba(0,0,0,0.2)] transition hover:bg-[#111] hover:text-white"
          >
            X
          </button>
        </Html>
      ) : null}
    </group>
  );
}
