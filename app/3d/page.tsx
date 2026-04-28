"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Box } from "@react-three/drei";
import { useState, Suspense, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";

function Scene({ selectedProducts }) {
  const getModelComponent = (productId, index) => {
    const xOffset = (index - (selectedProducts.length - 1) / 2) * 3.5;
    
    if (productId.includes("sofa") || productId.includes("bubble") || productId.includes("altea") || productId.includes("allusion")) {
      return (
        <group position={[xOffset, 0, 0]} key={productId}>
          {/* Main seat */}
          <Box args={[3, 1.2, 1.5]} position={[0, 0.6, 0]}>
            <meshStandardMaterial color="#8B6F47" roughness={0.7} metalness={0.1} />
          </Box>
          {/* Backrest */}
          <Box args={[3, 1.3, 0.4]} position={[0, 1.9, -0.6]}>
            <meshStandardMaterial color="#9B7F57" roughness={0.7} metalness={0.1} />
          </Box>
          {/* Left armrest */}
          <Box args={[0.5, 1.2, 1.5]} position={[-1.6, 1.1, 0]}>
            <meshStandardMaterial color="#8B6F47" roughness={0.7} metalness={0.1} />
          </Box>
          {/* Right armrest */}
          <Box args={[0.5, 1.2, 1.5]} position={[1.6, 1.1, 0]}>
            <meshStandardMaterial color="#8B6F47" roughness={0.7} metalness={0.1} />
          </Box>
          {/* Legs */}
          {[-1.3, 1.3].map((x) => (
            <Box key={`${productId}-leg-${x}`} args={[0.15, 0.3, 0.15]} position={[x, 0.15, 0]}>
              <meshStandardMaterial color="#5C4033" roughness={0.8} />
            </Box>
          ))}
        </group>
      );
    }
    
    if (productId.includes("chair") || productId.includes("pétale") || productId.includes("dining")) {
      return (
        <group position={[xOffset, 0, 0]} key={productId}>
          {/* Seat */}
          <Box args={[0.7, 0.12, 0.7]} position={[0, 0.5, 0]}>
            <meshStandardMaterial color="#4A90E2" roughness={0.6} metalness={0.2} />
          </Box>
          {/* Backrest */}
          <Box args={[0.7, 0.95, 0.15]} position={[0, 1.4, -0.3]}>
            <meshStandardMaterial color="#357ABD" roughness={0.6} metalness={0.2} />
          </Box>
          {/* Armrests */}
          {[-0.35, 0.35].map((x) => (
            <Box key={`${productId}-arm-${x}`} args={[0.08, 0.6, 0.15]} position={[x, 1, 0]}>
              <meshStandardMaterial color="#357ABD" roughness={0.6} />
            </Box>
          ))}
          {/* Legs */}
          {[-0.25, 0.25].map((x) =>
            [-0.25, 0.25].map((z) => (
              <Box
                key={`${productId}-${x}-${z}`}
                args={[0.08, 0.5, 0.08]}
                position={[x, 0.25, z]}
              >
                <meshStandardMaterial color="#2C3E50" roughness={0.8} />
              </Box>
            ))
          )}
        </group>
      );
    }
    
    if (productId.includes("table") || productId.includes("niwa") || productId.includes("dining")) {
      return (
        <group position={[xOffset, 0, 0]} key={productId}>
          {/* Top */}
          <Box args={[2.2, 0.12, 1.2]} position={[0, 0.8, 0]}>
            <meshStandardMaterial color="#D2B48C" roughness={0.5} metalness={0.3} />
          </Box>
          {/* Center pedestal */}
          <Box args={[0.3, 0.6, 0.3]} position={[0, 0.4, 0]}>
            <meshStandardMaterial color="#8B7355" roughness={0.7} />
          </Box>
          {/* Legs */}
          {[-0.8, 0.8].map((x) =>
            [-0.4, 0.4].map((z) => (
              <Box
                key={`${productId}-${x}-${z}`}
                args={[0.12, 0.4, 0.12]}
                position={[x, 0.2, z]}
              >
                <meshStandardMaterial color="#8B7355" roughness={0.8} />
              </Box>
            ))
          )}
        </group>
      );
    }
    
    if (productId.includes("desk")) {
      return (
        <group position={[xOffset, 0, 0]} key={productId}>
          {/* Desktop */}
          <Box args={[2.2, 0.1, 1.1]} position={[0, 0.8, 0]}>
            <meshStandardMaterial color="#D4A574" roughness={0.4} metalness={0.2} />
          </Box>
          {/* Left pedestal with drawers */}
          <Box args={[0.6, 0.7, 0.5]} position={[-0.8, 0.35, 0]}>
            <meshStandardMaterial color="#654321" roughness={0.7} />
          </Box>
          {/* Right pedestal with drawers */}
          <Box args={[0.6, 0.7, 0.5]} position={[0.8, 0.35, 0]}>
            <meshStandardMaterial color="#654321" roughness={0.7} />
          </Box>
          {/* Drawer dividers */}
          {[0.1, -0.1].map((y) => (
            <Box key={`${productId}-drawer-${y}`} args={[1.5, 0.02, 0.4]} position={[0, 0.5 + y, 0]}>
              <meshStandardMaterial color="#3E2723" roughness={0.8} />
            </Box>
          ))}
        </group>
      );
    }
    
    if (productId.includes("bed") || productId.includes("bubble")) {
      return (
        <group position={[xOffset, 0, 0]} key={productId}>
          {/* Mattress */}
          <Box args={[2.6, 0.25, 2]} position={[0, 0.3, 0]}>
            <meshStandardMaterial color="#F5DEB3" roughness={0.5} metalness={0.1} />
          </Box>
          {/* Pillows */}
          {[-0.8, 0.8].map((x) => (
            <Box key={`${productId}-pillow-${x}`} args={[0.6, 0.4, 0.4]} position={[x, 0.8, -0.7]}>
              <meshStandardMaterial color="#FFFFFF" roughness={0.6} />
            </Box>
          ))}
          {/* Headboard */}
          <Box args={[2.8, 1.2, 0.25]} position={[0, 1.3, -1.1]}>
            <meshStandardMaterial color="#D4A574" roughness={0.6} metalness={0.1} />
          </Box>
          {/* Bed frame legs */}
          {[-1.2, 1.2].map((x) =>
            [-0.8, 0.8].map((z) => (
              <Box
                key={`${productId}-${x}-${z}`}
                args={[0.2, 0.25, 0.2]}
                position={[x, 0.1, z]}
              >
                <meshStandardMaterial color="#5C4033" roughness={0.8} />
              </Box>
            ))
          )}
        </group>
      );
    }
    
    if (productId.includes("cabinet") || productId.includes("console") || productId.includes("tv")) {
      return (
        <group position={[xOffset, 0, 0]} key={productId}>
          {/* Main cabinet */}
          <Box args={[1.8, 1.8, 0.5]} position={[0, 0.9, 0]}>
            <meshStandardMaterial color="#654321" roughness={0.6} metalness={0.15} />
          </Box>
          {/* Left door */}
          <Box args={[0.85, 1.6, 0.05]} position={[-0.5, 0.95, 0.28]}>
            <meshStandardMaterial color="#8B6914" roughness={0.7} />
          </Box>
          {/* Right door */}
          <Box args={[0.85, 1.6, 0.05]} position={[0.5, 0.95, 0.28]}>
            <meshStandardMaterial color="#8B6914" roughness={0.7} />
          </Box>
          {/* Legs */}
          {[-0.7, 0.7].map((x) => (
            <Box key={`${productId}-leg-${x}`} args={[0.15, 0.35, 0.15]} position={[x, 0.175, 0]}>
              <meshStandardMaterial color="#3E2723" roughness={0.8} />
            </Box>
          ))}
        </group>
      );
    }
    
    // Default - office chair
    return (
      <Box args={[0.8, 1.2, 0.8]} position={[xOffset, 0.6, 0]} key={productId}>
        <meshStandardMaterial color="#4A4A4A" roughness={0.7} metalness={0.2} />
      </Box>
    );
  };

  return (
    <>
      <ambientLight intensity={0.9} />
      <pointLight position={[12, 12, 12]} intensity={1.2} />
      <pointLight position={[-12, 8, -8]} intensity={0.6} color="#87CEEB" />
      {selectedProducts.map((productId, index) => getModelComponent(productId, index))}
      <OrbitControls
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        autoRotate
        autoRotateSpeed={3}
      />
      <gridHelper args={[15, 15]} />
    </>
  );
}

const groups = [
  { id: "living-room", label: "Living Room", icon: "🏠" },
  { id: "dining-room", label: "Dining Room", icon: "🍽️" },
  { id: "office-room", label: "Office", icon: "💼" },
  { id: "bed-room", label: "Bedroom", icon: "🛏️" },
];

export default function ThreeDPage() {
  const [selectedGroup, setSelectedGroup] = useState("living-room");
  const [selectedProducts, setSelectedProducts] = useState([]);

  const groupProducts = useMemo(() => {
    return products.filter((p) => p.group === selectedGroup);
  }, [selectedGroup]);

  // Chỉ đổi group, không reset danh sách sản phẩm đã chọn
  const handleGroupChange = (groupId) => {
    setSelectedGroup(groupId);
  };

  // Thêm hoặc bỏ sản phẩm khỏi danh sách 3D
  const toggleProduct = (productId) => {
    setSelectedProducts((prev) => {
      if (prev.includes(productId)) {
        return prev.filter((id) => id !== productId);
      } else {
        return [...prev, productId];
      }
    });
  };

  // Bỏ sản phẩm khỏi danh sách
  const removeProduct = (productId) => {
    setSelectedProducts((prev) => prev.filter((id) => id !== productId));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="container mx-auto px-6 py-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">3D Collections</h1>
          
          {/* Group Tabs */}
          <div className="flex gap-4 overflow-x-auto pb-4">
            {groups.map((group) => (
              <button
                key={group.id}
                onClick={() => handleGroupChange(group.id)}
                className={`px-6 py-2 rounded-lg font-semibold transition-all whitespace-nowrap ${
                  selectedGroup === group.id
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {group.icon} {group.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* 3D Canvas - Span 3 columns */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-[600px] w-full bg-gradient-to-br from-gray-900 to-gray-800">
                {selectedProducts.length > 0 ? (
                  <Suspense
                    fallback={
                      <div className="flex items-center justify-center h-full">
                        <p className="text-white">Loading 3D Model...</p>
                      </div>
                    }
                  >
                    <Canvas camera={{ position: [6, 3, 6], fov: 75 }}>
                      <Scene selectedProducts={selectedProducts} />
                    </Canvas>
                  </Suspense>
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <p className="text-gray-400 text-lg">
                      Select products to view in 3D
                    </p>
                  </div>
                )}
              </div>

              {/* Selected Items Bar */}
              {selectedProducts.length > 0 && (
                <div className="bg-blue-50 border-t border-blue-200 p-4">
                  <p className="text-sm font-semibold text-blue-900 mb-3">
                    Selected Items ({selectedProducts.length})
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {selectedProducts.map((productId) => {
                      const product = products.find(
                        (p) => p.id === productId
                      );
                      return product ? (
                        <button
                          key={productId}
                          onClick={() => removeProduct(productId)}
                          className="flex items-center gap-2 bg-white px-3 py-1 rounded-lg shadow text-sm text-gray-700 hover:bg-red-50 transition-colors"
                          title={`${product.name} (${product.group})`}
                        >
                          <span>{product.name}</span>
                          <span className="text-red-500 hover:text-red-700">✕</span>
                        </button>
                      ) : null;
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar - Product List */}
          <div className="lg:col-span-1 space-y-4">
            {/* Product List */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                <h2 className="font-bold text-lg">Products</h2>
                <p className="text-sm text-blue-100">
                  {groupProducts.length} items
                </p>
              </div>
              
              <div className="max-h-[800px] overflow-y-auto">
                {groupProducts.length > 0 ? (
                  <div className="divide-y divide-gray-200">
                    {groupProducts.map((product) => (
                      <div
                        key={product.id}
                        className={`p-3 transition-all border-l-4 ${
                          selectedProducts.includes(product.id)
                            ? "bg-blue-100 border-l-blue-600"
                            : "border-l-transparent hover:bg-gray-50"
                        }`}
                      >
                        {/* Product Image */}
                        <div className="relative h-32 w-full mb-2 rounded overflow-hidden bg-gray-200">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover"
                            sizes="100px"
                          />
                        </div>

                        {/* Product Info */}
                        <div className="mb-2">
                          <p className="font-semibold text-sm text-gray-900">
                            {product.name}
                          </p>
                          <p className="text-xs text-gray-600 capitalize mb-1">
                            {product.category}
                          </p>
                          <p className="text-xs text-gray-700 line-clamp-2 mb-2">
                            {product.description?.substring(0, 80)}...
                          </p>
                          <p className="text-sm font-bold text-blue-600">
                            ₫{(product.price / 1000000).toFixed(1)}M
                          </p>
                        </div>

                        {/* Add/Remove Button */}
                        <button
                          onClick={() => toggleProduct(product.id)}
                          className={`w-full py-2 rounded text-sm font-semibold transition-all ${
                            selectedProducts.includes(product.id)
                              ? "bg-red-500 text-white hover:bg-red-600"
                              : "bg-blue-500 text-white hover:bg-blue-600"
                          }`}
                        >
                          {selectedProducts.includes(product.id)
                            ? "Remove"
                            : "Add to 3D"}
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-6 text-center text-gray-500">
                    No products in this category
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}