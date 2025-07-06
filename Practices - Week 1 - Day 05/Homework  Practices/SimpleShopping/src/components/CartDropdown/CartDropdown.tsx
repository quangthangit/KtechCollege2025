import CartIcon from "../CartIcon/CartIcon";
import styles from "../CartDropdown/styles.module.css";
import { useCart } from "../../hook/useCart";

const CartDropDown = () => {
  const { cartItems } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className={styles.container}>
      {cartItems.map((item, index) =>
        item.quantity > 0 ? (
          <CartIcon
            imageUrl={item.imageUrl}
            name={item.name}
            number={item.quantity}
            price={item.price}
            key={index}
          />
        ) : null
      )}

      {total > 0 && (
        <div className={styles.total}>
          <span className={styles.title}>Tổng tiền</span>
          <span className={styles.count}>
            {total.toLocaleString("vi-VN", {
              style: "currency",
              currency: "VND",
            })}{" "}
          </span>
        </div>
      )}
    </div>
  );
};

export default CartDropDown;
