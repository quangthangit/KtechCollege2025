import { useEffect, useState } from "react";
import ProductCard from "../../conponents/ProductCard/ProductCard";
import Sidebar from "../../conponents/sidebar/Sidebar";
import type { Product } from "../../types/Product";
import styles from "./styles.module.css";

export const CategoryPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const productsPerPage = 12;

  const fetchProduct = async () => {
    const offset = (page - 1) * productsPerPage;
    const limit = productsPerPage;

    const apiProductUrl = `https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${limit}`;

    try {
      const response = await fetch(apiProductUrl);
      if (response.ok) {
        const data = await response.json();
        setProducts(data);
      }
    } catch (err) {
      console.error("Lỗi khi gọi API:", err);
    }
  };

  const fetchProductById = async (idCategory: number) => {
    setPage(1)
    const offset = (page - 1) * productsPerPage;
    const limit = productsPerPage;
    const apiProductUrl = `https://api.escuelajs.co/api/v1/categories/${idCategory}/products?offset=${offset}&limit=${limit}`;
    try {
      const response = await fetch(apiProductUrl);
      if (response.ok) {
        const data = await response.json();
        setProducts(data);
        console.log(products)
      }
    } catch (err) {
      console.error("Lỗi khi gọi API:", err);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [page]);

  const handlePageClick = (newPage: number) => {
    if (newPage < 1) return;
    setPage(newPage);
  };

  return (
    <div className={styles.home_container}>
      <Sidebar
        onCategoryChange={(categoryId) =>
          fetchProductById(categoryId as number)
        }
      />
      <div className={styles.product_list}>
        <h2>Danh sách sản phẩm</h2>
        <div className={styles.grid}>
          {products.map((product) => (
            <ProductCard
              product={product}
            />
          ))}
        </div>

        <div className={styles.pagination}>
          <button
            className={styles.pagination_button}
            onClick={() => handlePageClick(page - 1)}
            disabled={page === 1}
          >
            Trước
          </button>

          {[1, 2, 3].map((p) => (
            <button
              key={p}
              onClick={() => handlePageClick(p)}
              className={`${styles.pagination_button} ${
                page === p ? styles.active : ""
              }`}
            >
              {p}
            </button>
          ))}

          <button
            className={styles.pagination_button}
            onClick={() => handlePageClick(page + 1)}
          >
            Sau
          </button>
        </div>
      </div>
    </div>
  );
};
