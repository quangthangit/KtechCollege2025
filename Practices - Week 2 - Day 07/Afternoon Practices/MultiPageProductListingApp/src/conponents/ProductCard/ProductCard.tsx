import type { Product } from "../../types/Product";
import { useCart } from "../hook/useCart";
import styles from "./styles.module.css";

type ProductType = {
  product : Product
};

const ProductCard = ({ product }: ProductType) => {
  const { addToCart } = useCart();
  return (
    <div className={styles.card}>
      <img src={product.images[0]} alt={product.title} className={styles.image} />
      <p className={styles.name}>{product.title}</p>
      <p className={styles.price}>${product.price}</p>
      <button onClick={() => addToCart(product)} 
        style={{
          fontSize: "12px",
        }}
      >
        Thêm vào giỏ hàng
      </button>
    </div>
  );
};

export default ProductCard;
