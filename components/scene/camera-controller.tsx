"use client";

import { useMemo, useRef } from "react";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import type { Product } from "@/types/shop";

type CameraControllerProps = {
  product?: Product;
  targetPosition?: [number, number, number];
  focused: boolean;
};

export function CameraController({ product, targetPosition, focused }: CameraControllerProps) {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);
  const controlsRef = useRef<React.ElementRef<typeof OrbitControls>>(null);
  const productTarget = useMemo(() => {
    if (targetPosition) return new THREE.Vector3(targetPosition[0], targetPosition[1], targetPosition[2]);
    if (!product) return new THREE.Vector3(0, 0.7, -0.2);
    return new THREE.Vector3(product.position[0], product.position[1], product.position[2]);
  }, [product]);

  useFrame((_, delta) => {
    if (!cameraRef.current || !controlsRef.current) return;

    const distance = focused && product ? 4.1 : 5.85;
    const desiredPosition = new THREE.Vector3(productTarget.x + distance * 0.72, productTarget.y + 1.75, productTarget.z + distance);
    cameraRef.current.position.lerp(desiredPosition, 1 - Math.exp(-delta * 2.7));
    controlsRef.current.target.lerp(productTarget, 1 - Math.exp(-delta * 3.2));
    controlsRef.current.update();
  });

  return (
    <>
      <PerspectiveCamera ref={cameraRef} makeDefault position={[4.2, 2.8, 5.8]} fov={48} near={0.1} far={100} />
      <OrbitControls
        ref={controlsRef}
        enableDamping
        enablePan
        minDistance={3.2}
        maxDistance={8.5}
        maxPolarAngle={Math.PI / 2.04}
        target={productTarget.toArray()}
      />
    </>
  );
}
