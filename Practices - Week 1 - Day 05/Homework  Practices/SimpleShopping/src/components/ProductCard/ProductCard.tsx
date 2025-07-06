import { useCart } from "../../hook/useCart";
import type { Product } from "../../types/Product";
import styles from "./styles.module.css";

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  const { addToCart, cartItems , removeToCart } = useCart();
  const quantity = cartItems.find((item) => item.id === product.id)?.quantity ?? 0;

  return (
    <div className={styles.container}>
      <center>
        <img className={styles.image} src={product.imageUrl} alt={product.name} />
      </center>
      <span className={styles.name}>{product.name}</span>
      <span className={styles.value}>{product.price.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}</span>

      {quantity === 0 ? (
        <button className={styles.ajust_} onClick={() => addToCart(product)}>Thêm vào giỏ</button>
      ) : (
        <div className={styles.ajust}>
          <div onClick={() => removeToCart(product)} className={styles.ajust_}>-</div>
          <div className={styles.ajust_}>{quantity}</div>
          <div onClick={() => addToCart(product)} className={styles.ajust_}>+</div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
