import styles from "../CartIcon/styles.module.css";

type Props = {
  name: string;
  number: number;
  imageUrl: string;
  price : number
};

const CartIcon = ({ name, number, imageUrl,price }: Props) => {
  return (
    <div className={styles.container}>
      <img height={50} src={imageUrl} alt={name} />
      <div className={styles.col_2}>
        <span>{name}</span>
        <span>Đơn vị tính lẻ</span>
      </div>
      <div className={styles.col_3}>
        <span>{number} x </span>
        <span>{price.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}</span>
      </div>
    </div>
  );
};

export default CartIcon;