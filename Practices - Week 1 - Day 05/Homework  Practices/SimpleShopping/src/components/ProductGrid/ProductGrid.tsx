import styles from "../ProductGrid/styles.module.css";

const ProductGrid = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container1}>
        <div className={styles.title}>Thực phẩm khô</div>
        <div className={styles.fillter}>
            <div className={styles.fillter_}>Xắp xếp theo giá</div>
            <div className={styles.fillter_}>Xắp xếp theo tên</div>
        </div>
      </div>
      <div className={styles.container2}>
        <div className={styles.col_1}>
          <div className={styles.card}>Card</div>
          <div className={styles.card}>Card</div>
          <div className={styles.card}>Card</div>
          <div className={styles.card}>Card</div>
          <div className={styles.card}>Card</div>
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
