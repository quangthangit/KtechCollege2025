import { useState } from "react";
import styles from "../State04/State04.module.css";

const State04 = () => {
  const [click, setClick] = useState(false);
  return (
    <div className={styles.card}>
      <button onClick={() => setClick(!click)} className={styles.button}>
        Xắp xếp
      </button>
      <div style={{ display: click ? "flex" : "none" }} className={styles.menu}>
        <span className={styles.item}>Sản phẩm nổ bật</span>
        <span className={styles.item}>Giá từ thấp đến cao</span>
        <span className={styles.item}>Giá từ cao đến thấp</span>
        <span onClick={() => setClick(!click)} className={styles.item}>
          Đóng
        </span>
      </div>
    </div>
  );
};

export default State04;
