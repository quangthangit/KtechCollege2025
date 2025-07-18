"use client";
import React, { useEffect, useState } from "react";
import { ProductItem } from "./ProductItem";
import { Product } from "../types/ItemType";
import Link from "next/link";
import next from "next";
const ProductGrid = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://api.escuelajs.co/api/v1/products?offset=0&limit=10",
        {
          next: { revalidate: 3600 },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      setProducts(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) return <div className="text-center py-4">Loading...</div>;
  if (error)
    return <div className="text-center py-4 text-red-500">{error}</div>;
  return (
    <div className="bg-yellow-50 p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-2">
          <span className="bg-red-500 text-white text-sm font-bold px-2 py-1 rounded">
            FLASH SALE
          </span>
          <span className="bg-red-500 text-white text-sm font-bold px-2 py-1 rounded">
            ONLINE ONLY
          </span>
          <span className="bg-green-500 text-white text-sm font-bold px-2 py-1 rounded">
            GIÁ SỐC
          </span>
        </div>
        <div className="text-sm text-gray-600">
          Điện Thoại | Apple | Laptop | Phụ Kiện | Đồ Nhà | PC, Máy in
        </div>
      </div>
      <img
        src={
          "https://cdnv2.tgdd.vn/mwg-static/common/Campaign/9d/bd/9dbd33690ceee67cf301f0591c8de17c.png"
        }
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-2 mt-[10px]">
        {products.map((product, index) => (
          <Link key={index} href={`/product/${product.id}`}>
            <ProductItem product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
