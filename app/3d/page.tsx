"use client";

import * as THREE from "three";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Box, Plane } from "@react-three/drei";
import { useState, Suspense, useMemo, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Search, ShoppingCart, User } from "lucide-react";
import { CartBadgeLink } from "@/components/CartBadgeLink";
import { products } from "@/data/products";

function Room() {
  return (
    <group>
      <Plane args={[12, 12]} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#e8e0d4" roughness={0.8} />
      </Plane>
      <Plane args={[12, 7]} position={[0, 3.5, -6]}>
        <meshStandardMaterial color="#f0eee9" roughness={0.9} />
      </Plane>
      <Plane args={[12, 7]} rotation={[0, Math.PI / 2, 0]} position={[-6, 3.5, 0]}>
        <meshStandardMaterial color="#e8e6e1" roughness={0.9} />
      </Plane>
    </group>
  );
}

const BOOK_COLORS = ["#c0392b", "#2980b9", "#27ae60", "#f39c12", "#8e44ad"] as const;

function FurnitureShape({ productId }: { productId: string }) {
  if (productId.startsWith("sofa-")) {
    return (
      <group>
        <Box args={[2.8, 1, 1.4]} position={[0, 0.5, 0]}>
          <meshStandardMaterial color="#c4a882" roughness={0.7} />
        </Box>
        <Box args={[2.8, 1.2, 0.35]} position={[0, 1.6, -0.55]}>
          <meshStandardMaterial color="#b8987a" roughness={0.7} />
        </Box>
        {[-1.3, 1.3].map((x) => (
          <Box key={x} args={[0.4, 1, 1.4]} position={[x, 0.9, 0]}>
            <meshStandardMaterial color="#c4a882" roughness={0.7} />
          </Box>
        ))}
      </group>
    );
  }

  if (productId.startsWith("bed-")) {
    return (
      <group>
        <Box args={[2.2, 0.3, 3]} position={[0, 0.15, 0]}>
          <meshStandardMaterial color="#9a7d5c" roughness={0.8} />
        </Box>
        <Box args={[2, 0.3, 2.6]} position={[0, 0.45, 0.1]}>
          <meshStandardMaterial color="#f0ebe3" roughness={0.5} />
        </Box>
        <Box args={[2.2, 1.2, 0.2]} position={[0, 1, -1.4]}>
          <meshStandardMaterial color="#7a6048" roughness={0.7} />
        </Box>
        {[-0.55, 0.55].map((x) => (
          <Box key={x} args={[0.7, 0.25, 0.5]} position={[x, 0.73, -0.9]}>
            <meshStandardMaterial color="#ffffff" roughness={0.5} />
          </Box>
        ))}
      </group>
    );
  }

  if (productId.startsWith("wardrobe-")) {
    return (
      <group>
        <Box args={[2, 2.4, 0.6]} position={[0, 1.2, 0]}>
          <meshStandardMaterial color="#8c7055" roughness={0.6} />
        </Box>
        <Box args={[0.03, 2.2, 0.55]} position={[0.01, 1.2, 0.02]}>
          <meshStandardMaterial color="#6a5240" roughness={0.7} />
        </Box>
        {[-0.6, 0.6].map((x) => (
          <Box key={x} args={[0.08, 0.08, 0.12]} position={[x, 1.2, 0.34]}>
            <meshStandardMaterial color="#c9a96e" metalness={0.6} roughness={0.3} />
          </Box>
        ))}
      </group>
    );
  }

  if (productId.startsWith("desk-")) {
    return (
      <group>
        <Box args={[1.8, 0.08, 0.85]} position={[0, 0.78, 0]}>
          <meshStandardMaterial color="#b8956a" roughness={0.4} />
        </Box>
        {[-0.7, 0.7].map((x) =>
          [-0.3, 0.3].map((z) => (
            <Box key={`${x}${z}`} args={[0.07, 0.72, 0.07]} position={[x, 0.36, z]}>
              <meshStandardMaterial color="#8a6a44" roughness={0.7} />
            </Box>
          ))
        )}
      </group>
    );
  }

  if (productId.startsWith("office-chairs-")) {
    return (
      <group>
        <Box args={[0.6, 0.08, 0.6]} position={[0, 0.52, 0]}>
          <meshStandardMaterial color="#2a2a2a" roughness={0.5} />
        </Box>
        <Box args={[0.58, 0.8, 0.08]} position={[0, 1.1, -0.26]}>
          <meshStandardMaterial color="#1a1a1a" roughness={0.5} />
        </Box>
        <Box args={[0.08, 0.4, 0.08]} position={[0, 0.24, 0]}>
          <meshStandardMaterial color="#555555" metalness={0.7} roughness={0.3} />
        </Box>
        <Box args={[0.6, 0.05, 0.07]} position={[0, 0.04, 0]}>
          <meshStandardMaterial color="#444444" metalness={0.5} roughness={0.4} />
        </Box>
        <Box args={[0.07, 0.05, 0.6]} position={[0, 0.04, 0]}>
          <meshStandardMaterial color="#444444" metalness={0.5} roughness={0.4} />
        </Box>
      </group>
    );
  }

  if (productId.startsWith("bookshelf-")) {
    return (
      <group>
        <Box args={[1.5, 2.2, 0.4]} position={[0, 1.1, 0]}>
          <meshStandardMaterial color="#9a7d5c" roughness={0.6} />
        </Box>
        {[0.5, 1.1, 1.7].map((y) => (
          <Box key={y} args={[1.4, 0.04, 0.38]} position={[0, y, 0]}>
            <meshStandardMaterial color="#7a6040" roughness={0.7} />
          </Box>
        ))}
        {[-0.4, -0.2, 0.0, 0.2, 0.4].map((x, i) => (
          <Box key={x} args={[0.12, 0.35, 0.25]} position={[x, 0.72, 0]}>
            <meshStandardMaterial color={BOOK_COLORS[i]} roughness={0.8} />
          </Box>
        ))}
      </group>
    );
  }

  if (productId.startsWith("dining_tables_chairs-")) {
    return (
      <group>
        <Box args={[2.2, 0.1, 1]} position={[0, 0.78, 0]}>
          <meshStandardMaterial color="#a0835c" roughness={0.5} />
        </Box>
        {[-0.8, 0.8].map((x) =>
          [-0.35, 0.35].map((z) => (
            <Box key={`${x}${z}`} args={[0.09, 0.7, 0.09]} position={[x, 0.35, z]}>
              <meshStandardMaterial color="#7a6040" roughness={0.8} />
            </Box>
          ))
        )}
        {[-1.4, 1.4].map((cx) => (
          <group key={cx} position={[cx, 0, 0]}>
            <Box args={[0.55, 0.08, 0.55]} position={[0, 0.46, 0]}>
              <meshStandardMaterial color="#8a7560" roughness={0.6} />
            </Box>
            <Box args={[0.55, 0.75, 0.1]} position={[0, 1.05, -0.24]}>
              <meshStandardMaterial color="#7a6550" roughness={0.6} />
            </Box>
            {[-0.2, 0.2].map((lx) =>
              [-0.2, 0.2].map((lz) => (
                <Box key={`${lx}${lz}`} args={[0.06, 0.44, 0.06]} position={[lx, 0.22, lz]}>
                  <meshStandardMaterial color="#5c4a35" roughness={0.8} />
                </Box>
              ))
            )}
          </group>
        ))}
      </group>
    );
  }

  if (productId.startsWith("tables_chairs-")) {
    return (
      <group>
        <Box args={[1.4, 0.08, 0.8]} position={[0, 0.46, 0]}>
          <meshStandardMaterial color="#c8a87a" roughness={0.4} metalness={0.05} />
        </Box>
        {[-0.5, 0.5].map((x) =>
          [-0.28, 0.28].map((z) => (
            <Box key={`${x}${z}`} args={[0.07, 0.42, 0.07]} position={[x, 0.21, z]}>
              <meshStandardMaterial color="#9a7a50" roughness={0.8} />
            </Box>
          ))
        )}
      </group>
    );
  }

  if (productId.startsWith("tv_cabinets_consoles-")) {
    return (
      <group>
        <Box args={[2, 0.5, 0.5]} position={[0, 0.25, 0]}>
          <meshStandardMaterial color="#3a3028" roughness={0.6} />
        </Box>
        {[-0.6, 0, 0.6].map((x) => (
          <Box key={x} args={[0.55, 0.38, 0.44]} position={[x, 0.26, 0]}>
            <meshStandardMaterial color="#2a2218" roughness={0.7} />
          </Box>
        ))}
        {[-0.6, 0, 0.6].map((x) => (
          <Box key={`h${x}`} args={[0.08, 0.08, 0.06]} position={[x, 0.26, 0.27]}>
            <meshStandardMaterial color="#c9a96e" metalness={0.6} roughness={0.3} />
          </Box>
        ))}
      </group>
    );
  }

  if (productId.startsWith("bathtub-")) {
    return (
      <group>
        <Box args={[1.8, 0.6, 0.85]} position={[0, 0.3, 0]}>
          <meshStandardMaterial color="#f5f5f0" roughness={0.2} metalness={0.1} />
        </Box>
        <Box args={[1.6, 0.45, 0.65]} position={[0, 0.52, 0]}>
          <meshStandardMaterial color="#c8dde8" roughness={0.1} metalness={0.05} transparent opacity={0.7} />
        </Box>
        <Box args={[0.06, 0.25, 0.06]} position={[0.8, 0.85, 0]}>
          <meshStandardMaterial color="#aaaaaa" metalness={0.8} roughness={0.2} />
        </Box>
      </group>
    );
  }

  if (productId.startsWith("Mirror-")) {
    return (
      <group>
        <Box args={[0.08, 1.8, 0.8]} position={[0, 0.9, 0]}>
          <meshStandardMaterial color="#c9a96e" metalness={0.4} roughness={0.5} />
        </Box>
        <Box args={[0.04, 1.6, 0.62]} position={[0.04, 0.9, 0]}>
          <meshStandardMaterial color="#d4eaf7" metalness={0.9} roughness={0.05} />
        </Box>
      </group>
    );
  }

  return (
    <Box args={[0.8, 1.2, 0.8]} position={[0, 0.6, 0]}>
      <meshStandardMaterial color="#9a8a7a" roughness={0.7} />
    </Box>
  );
}

function FurnitureModel({
  productId, position, isDragging, onDragStart,
}: {
  productId: string;
  position: [number, number, number];
  isDragging: boolean;
  onDragStart: () => void;
}) {
  return (
    <group
      position={position}
      onPointerDown={(e) => { e.stopPropagation(); onDragStart(); }}
    >
      <FurnitureShape productId={productId} />
      {isDragging && (
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.02, 0]}>
          <ringGeometry args={[1.4, 1.6, 32]} />
          <meshBasicMaterial color="#c9a96e" />
        </mesh>
      )}
    </group>
  );
}

function DragHandler({ draggingId, onMove, onDragEnd }: {
  draggingId: string | null;
  onMove: (id: string, pos: [number, number, number]) => void;
  onDragEnd: () => void;
}) {
  const { camera, gl } = useThree();
  const raycaster = useMemo(() => new THREE.Raycaster(), []);
  const floorPlane = useMemo(() => new THREE.Plane(new THREE.Vector3(0, 1, 0), 0), []);
  const onMoveRef = useRef(onMove);
  const onDragEndRef = useRef(onDragEnd);
  onMoveRef.current = onMove;
  onDragEndRef.current = onDragEnd;

  useEffect(() => {
    if (!draggingId) return;
    const target = new THREE.Vector3();
    const handleMove = (e: PointerEvent) => {
      const rect = gl.domElement.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(new THREE.Vector2(x, y), camera);
      if (raycaster.ray.intersectPlane(floorPlane, target)) {
        onMoveRef.current(draggingId, [target.x, 0, target.z]);
      }
    };
    const handleUp = () => onDragEndRef.current();
    gl.domElement.addEventListener("pointermove", handleMove);
    gl.domElement.addEventListener("pointerup", handleUp);
    return () => {
      gl.domElement.removeEventListener("pointermove", handleMove);
      gl.domElement.removeEventListener("pointerup", handleUp);
    };
  }, [draggingId, camera, gl, raycaster, floorPlane]);

  return null;
}

function Scene({
  selectedProducts, showRoom, positions, onMove,
}: {
  selectedProducts: string[];
  showRoom: boolean;
  positions: Record<string, [number, number, number]>;
  onMove: (id: string, pos: [number, number, number]) => void;
}) {
  const [draggingId, setDraggingId] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.cursor = draggingId ? "grabbing" : "";
    return () => { document.body.style.cursor = ""; };
  }, [draggingId]);

  return (
    <>
      <ambientLight intensity={1.2} />
      <directionalLight position={[8, 10, 8]} intensity={0.8} castShadow />
      <pointLight position={[-6, 6, 4]} intensity={0.4} color="#fff5e0" />
      {showRoom && <Room />}
      <DragHandler
        draggingId={draggingId}
        onMove={onMove}
        onDragEnd={() => setDraggingId(null)}
      />
      {selectedProducts.map((id) => (
        <FurnitureModel
          key={id}
          productId={id}
          position={positions[id] ?? [0, 0, 0]}
          isDragging={draggingId === id}
          onDragStart={() => setDraggingId(id)}
        />
      ))}
      <OrbitControls
        enabled={!draggingId}
        enablePan
        enableZoom
        enableRotate
        autoRotate={!draggingId}
        autoRotateSpeed={1.5}
      />
    </>
  );
}

function HomeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
      <path d="M3 12L12 3l9 9" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 21V12h6v9" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 12v9h18v-9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FurnitureIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
      <rect x="3" y="10" width="18" height="3" rx="1" />
      <path d="M5 13v4M19 13v4" strokeLinecap="round" />
      <rect x="6" y="6" width="12" height="4" rx="1" />
    </svg>
  );
}

const groups = [
  { id: "living-room", label: "Living Room" },
  { id: "dining-room", label: "Dining Room" },
  { id: "office-room", label: "Office" },
  { id: "bed-room",    label: "Bedroom" },
  { id: "bath-room",   label: "Bathroom" },
];

const formatVnd = (v: number) =>
  new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(v);

export default function ThreeDPage() {
  const [selectedGroup, setSelectedGroup] = useState("living-room");
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [positions, setPositions] = useState<Record<string, [number, number, number]>>({});
  const [search, setSearch] = useState("");
  const [activeView, setActiveView] = useState<"room" | "furniture">("room");

  const groupProducts = useMemo(
    () => products.filter((p: { group: string }) => p.group === selectedGroup),
    [selectedGroup]
  );

  const filteredProducts = useMemo(
    () => groupProducts.filter((p: { name: string }) => p.name.toLowerCase().includes(search.toLowerCase())),
    [groupProducts, search]
  );

  const productById = useMemo(
    () => new Map(products.map((p: { id: string; price: number }) => [p.id, p])),
    []
  );

  const total = useMemo(
    () => selectedProducts.reduce((sum, id) => sum + ((productById.get(id) as { price: number } | undefined)?.price ?? 0), 0),
    [selectedProducts, productById]
  );

  const toggleProduct = (id: string) =>
    setSelectedProducts((prev) => {
      if (prev.includes(id)) {
        setPositions((pos) => {
          const next = { ...pos };
          delete next[id];
          return next;
        });
        return prev.filter((x) => x !== id);
      }
      const n = prev.length;
      setPositions((pos) => ({
        ...pos,
        [id]: [(n % 3 - 1) * 3.5, 0, Math.floor(n / 3) * 3] as [number, number, number],
      }));
      return [...prev, id];
    });

  const handleMove = (id: string, pos: [number, number, number]) =>
    setPositions((prev) => ({ ...prev, [id]: pos }));

  const currentGroup = groups.find((g) => g.id === selectedGroup);

  return (
    <div className="flex flex-col h-screen bg-white overflow-hidden">

      <header className="shrink-0 bg-white border-b border-black/10 z-50">
        <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between px-5 py-3 text-[11px] uppercase tracking-[0.12em] md:text-xs">
          <div className="flex items-center gap-4">
            <Link href="/menu" className="inline-flex items-center gap-1 hover:opacity-60">
              <Menu className="h-3.5 w-3.5" />
              <span className="hidden md:inline">Menu</span>
            </Link>
            <Link href="/about" className="hidden md:inline hover:opacity-60">About</Link>
            <Link href="/search" className="inline-flex items-center gap-1 hover:opacity-60">
              <Search className="h-3.5 w-3.5" />
              <span className="hidden md:inline">Search</span>
            </Link>
          </div>
          <Link href="/" className="font-serif text-[28px] tracking-[0.18em] md:text-[44px] md:leading-none">
            OWLHOME
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/products" className="hidden md:inline hover:opacity-60">Products</Link>
            <Link href="/construction" className="hidden md:inline hover:opacity-60">Construction</Link>
            <CartBadgeLink><ShoppingCart className="h-3.5 w-3.5" /></CartBadgeLink>
            <Link href="/login" className="hover:opacity-60"><User className="h-3.5 w-3.5" /></Link>
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">

        <div
          className="relative flex-1 overflow-hidden"
          style={{
            backgroundImage: "radial-gradient(circle, #c8c8c8 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            backgroundColor: "#f5f5f5",
          }}
        >
          <div className="absolute top-4 left-4 z-10 bg-black text-white text-xs font-medium px-4 py-2 rounded-full">
            Total: {formatVnd(total)}
          </div>

          <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10 flex flex-col gap-2">
            <button
              onClick={() => setActiveView("room")}
              className={`w-11 h-11 rounded-xl flex items-center justify-center shadow-md transition-colors ${
                activeView === "room" ? "bg-black text-white" : "bg-white text-black hover:bg-gray-100"
              }`}
            >
              <HomeIcon />
            </button>
            <button
              onClick={() => setActiveView("furniture")}
              className={`w-11 h-11 rounded-xl flex items-center justify-center shadow-md transition-colors ${
                activeView === "furniture" ? "bg-black text-white" : "bg-white text-black hover:bg-gray-100"
              }`}
            >
              <FurnitureIcon />
            </button>
          </div>

          <div className="w-full h-full">
            <Suspense fallback={
              <div className="flex items-center justify-center h-full text-gray-400 text-sm">
                Loading 3D...
              </div>
            }>
              <Canvas camera={{ position: [7, 5, 7], fov: 60 }}>
                <Scene
                  selectedProducts={selectedProducts}
                  showRoom={activeView === "room"}
                  positions={positions}
                  onMove={handleMove}
                />
              </Canvas>
            </Suspense>
          </div>

          {selectedProducts.length > 0 && (
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-10 text-[11px] text-black/40 pointer-events-none">
              Click &amp; drag furniture to reposition
            </div>
          )}

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
            <button className="bg-black text-white text-sm font-medium px-8 py-3 rounded-full hover:bg-black/80 transition-colors shadow-lg">
              Customize room
            </button>
          </div>
        </div>

        <div className="w-[300px] shrink-0 bg-white border-l border-black/10 flex flex-col overflow-hidden">

          <div className="px-4 pt-5 pb-2 shrink-0">
            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
              {groups.map((g) => (
                <button
                  key={g.id}
                  onClick={() => { setSelectedGroup(g.id); setSearch(""); }}
                  className={`shrink-0 text-[11px] font-medium px-3 py-1.5 rounded-full border transition-colors ${
                    selectedGroup === g.id
                      ? "bg-black text-white border-black"
                      : "bg-white text-black border-black/20 hover:border-black/50"
                  }`}
                >
                  {g.label}
                </button>
              ))}
            </div>
          </div>

          <div className="px-5 pb-3 shrink-0">
            <h2 className="text-xl font-semibold text-black">{currentGroup?.label}</h2>
          </div>

          <div className="px-4 pb-3 shrink-0">
            <div className="flex items-center gap-2 border border-black/15 rounded-lg px-3 py-2">
              <Search className="h-3.5 w-3.5 text-black/40 shrink-0" />
              <input
                type="text"
                placeholder="Search furniture..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex-1 text-sm outline-none bg-transparent placeholder:text-black/35"
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-4 pb-4 space-y-3">
            {filteredProducts.length === 0 ? (
              <p className="text-sm text-black/40 text-center py-8">No products found</p>
            ) : (
              filteredProducts.map((product: { id: string; name: string; description?: string; price: number; image: string }) => {
                const isSelected = selectedProducts.includes(product.id);
                return (
                  <div
                    key={product.id}
                    onClick={() => toggleProduct(product.id)}
                    className={`border rounded-xl overflow-hidden cursor-pointer transition-all ${
                      isSelected ? "border-black" : "border-black/10 hover:border-black/30"
                    }`}
                  >
                    <div className="relative h-36 bg-[#f7f5f2] flex items-center justify-center">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain p-3"
                        sizes="260px"
                      />
                      {isSelected && (
                        <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-black flex items-center justify-center">
                          <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3">
                            <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      )}
                    </div>
                    <div className="px-3 py-2.5">
                      <p className="text-sm font-medium text-black">{product.name}</p>
                      {product.description && (
                        <p className="text-[11px] text-black/50 mt-0.5 line-clamp-2">{product.description}</p>
                      )}
                      <p className="text-sm font-semibold text-black text-right mt-2">
                        {formatVnd(product.price)}
                      </p>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
