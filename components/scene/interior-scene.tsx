"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, SoftShadows } from "@react-three/drei";
import * as THREE from "three";
import type { Product } from "@/types/shop";
import { CameraController } from "@/components/scene/camera-controller";
import { Product3D } from "@/components/scene/product-3d";

type InteriorSceneProps = {
  product?: Product;
  products?: Product[];
  activeProductId?: string;
  animationKey?: number;
  focused: boolean;
  selected: boolean;
  onProductSelect: (product: Product) => void;
  onProductRemove?: (productId: string) => void;
};

type ScenePlacement = {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: [number, number, number];
};

const productPlacementByRoom: Partial<Record<Product["roomId"], Record<string, ScenePlacement>>> = {
  living: {
    sofa: { position: [-1.85, 0, -1.02], rotation: [0, 0.2, 0], scale: [0.95, 0.95, 0.95] },
    table: { position: [0.8, 0, 0.75], rotation: [0, -0.32, 0], scale: [0.78, 0.78, 0.78] },
    storage: { position: [2.15, 0, -1.85], rotation: [0, -0.2, 0], scale: [0.78, 0.88, 0.72] }
  },
  bedroom: {
    bed: { position: [-1.35, 0, -0.95], rotation: [0, 0.18, 0], scale: [1, 1, 0.95] },
    wardrobe: { position: [2.18, 0, -1.88], rotation: [0, -0.2, 0], scale: [0.86, 0.98, 0.78] }
  },
  kitchen: {
    table: { position: [-0.15, 0, 0.45], rotation: [0, -0.18, 0], scale: [0.86, 0.86, 0.86] }
  },
  workspace: {
    desk: { position: [-1.8, 0, -1.18], rotation: [0, 0.22, 0], scale: [0.78, 0.78, 0.76] },
    chair: { position: [-0.28, 0, 0.58], rotation: [0, -0.18, 0], scale: [0.68, 0.74, 0.68] },
    bookcase: { position: [2.25, 0, -1.86], rotation: [0, -0.18, 0], scale: [0.78, 0.9, 0.72] }
  },
  bathroom: {
    bath: { position: [-1.2, 0, -0.75], rotation: [0, 0.26, 0], scale: [0.98, 0.98, 0.98] },
    mirror: { position: [1.75, 0, -2.05], rotation: [0, -0.2, 0], scale: [0.78, 0.9, 0.68] }
  }
};

function RoomShell() {
  const width = 6.2;
  const depth = 5.1;
  const height = 3.1;

  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[width, depth]} />
        <meshStandardMaterial color="#ede9df" roughness={0.78} />
      </mesh>
      <mesh position={[0, height / 2, -depth / 2]} receiveShadow>
        <planeGeometry args={[width, height]} />
        <meshStandardMaterial color="#f8f8f6" roughness={0.94} side={THREE.DoubleSide} />
      </mesh>
      <mesh position={[-width / 2, height / 2, 0]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
        <planeGeometry args={[depth, height]} />
        <meshStandardMaterial color="#e7e7e4" roughness={0.94} side={THREE.DoubleSide} />
      </mesh>
      <mesh position={[width / 2, height / 2, 0]} rotation={[0, -Math.PI / 2, 0]} receiveShadow>
        <planeGeometry args={[depth, height]} />
        <meshStandardMaterial color="#ffffff" roughness={0.94} side={THREE.DoubleSide} />
      </mesh>
      <lineSegments position={[0, height / 2, 0]}>
        <edgesGeometry args={[new THREE.BoxGeometry(width, height, depth)]} />
        <lineBasicMaterial color="#111111" transparent opacity={0.18} />
      </lineSegments>
    </group>
  );
}

function SceneContent(props: InteriorSceneProps) {
  const sceneProducts = props.products ?? (props.product ? [props.product] : []);
  const activeProduct = props.activeProductId
    ? sceneProducts.find((product) => product.id === props.activeProductId)
    : props.product;
  const activePosition = activeProduct ? getScenePlacement(activeProduct, sceneProducts.findIndex((product) => product.id === activeProduct.id)).position : undefined;

  return (
    <>
      <CameraController product={activeProduct} targetPosition={activePosition} focused={props.focused} />
      <SoftShadows size={24} samples={12} focus={0.7} />
      <hemisphereLight args={["#ffffff", "#d8d0c4", 1.35]} />
      <ambientLight intensity={0.95} />
      <directionalLight castShadow position={[3.6, 5.6, 4.8]} intensity={1.65} shadow-mapSize={[2048, 2048]} shadow-bias={-0.0001} />
      <pointLight position={[-2.6, 2.4, 1.8]} intensity={0.55} color="#fff7e8" />
      <RoomShell />
      {sceneProducts.map((product, index) => {
        const active = product.id === activeProduct?.id;
        return (
          <Product3D
            key={product.id}
            product={product}
            placement={getScenePlacement(product, index)}
            active={false}
            selected={active}
            onSelect={props.onProductSelect}
            onRemove={props.onProductRemove}
          />
        );
      })}
      <ContactShadows position={[0, 0.012, 0]} opacity={0.24} blur={3.2} scale={7.2} />
      <Environment preset="apartment" environmentIntensity={0.35} />
    </>
  );
}

function getScenePlacement(product: Product, index: number): ScenePlacement {
  const key = product.placementKey ?? product.kind;
  const base = productPlacementByRoom[product.roomId]?.[key] ?? {
    position: product.position,
    rotation: [0, 0, 0],
    scale: [1, 1, 1]
  };
  return {
    position: [base.position[0], getGroundedY(product, base.scale), base.position[2]],
    rotation: base.rotation,
    scale: base.scale
  };
}

function getGroundedY(product: Product, scale: [number, number, number]) {
  const height = product.dimensions[1] * scale[1];
  if (product.kind === "table" || product.kind === "desk") return height / 2 + 0.22 * scale[1];
  if (product.kind === "chair") return height * 0.76;
  if (product.kind === "storage") return height * 0.45;
  if (product.kind === "bath") return height * 0.39;
  if (product.kind === "mirror") return height * 0.55;
  return height / 2;
}

export function InteriorScene(props: InteriorSceneProps) {
  return (
    <Canvas shadows className="h-full w-full" dpr={[1, 1.8]} gl={{ antialias: true }}>
      <Suspense fallback={null}>
        <SceneContent {...props} />
      </Suspense>
    </Canvas>
  );
}

export const ThreeScene = InteriorScene;
