"use client"

import { Product } from "@/app/types/ItemType";
import React, { useEffect, useState } from "react";

const ProductDetailPage = ({ params }: { params: { id?: string } }) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const productId = params?.id;
    if (!productId) {
      setError("Invalid product ID");
      setLoading(false);
      return;
    }
    const fetchProduct = async () => {
      try {
      setLoading(true);
      const response = await fetch(
        `https://api.escuelajs.co/api/v1/products/${productId}`,
        {
          next: { revalidate: 3600 },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      setProduct(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
    };
    fetchProduct();
  },[]); 

  if (loading) return <div className="text-center py-4">Loading...</div>;
  if (error) return <div className="text-center py-4 text-red-500">{error}</div>;
  if (!product) return <div className="text-center py-4">Product not found</div>;

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <img
            src={product.images?.[0] || "https://via.placeholder.com/300x300"}
            alt={product.title}
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
          <div className="flex gap-2 mt-2">
            {product.images?.slice(1).map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${product.title} thumbnail ${index + 2}`}
                className="w-20 h-20 object-cover rounded-md cursor-pointer hover:opacity-75"
              />
            ))}
          </div>
        </div>
        <div>
          <p className="text-gray-600 mb-2">Category: {product.category.name}</p>
          <p className="text-2xl font-semibold text-gray-900 mb-2">
            ${product.price.toFixed(2)}
          </p>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <div className="flex space-x-2 mb-4">
            <span className="text-sm text-gray-500">
              Created: {new Date(product.creationAt).toLocaleDateString()}
            </span>
            <span className="text-sm text-gray-500">
              Updated: {new Date(product.updatedAt).toLocaleDateString()}
            </span>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;