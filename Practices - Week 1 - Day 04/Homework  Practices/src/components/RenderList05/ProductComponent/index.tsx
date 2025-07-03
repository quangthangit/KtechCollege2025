import styles from "../ProductComponent/ProductComponent.module.css";

type Props = {
  cost: string;
  name: string;
  rate: number;
  sold: number;
  discountPercent?: string;
  imageUrl: string;
  shop?: string;
  costOld?: string;
};

const ProductComponent = ({
  cost,
  name,
  imageUrl,
  discountPercent = "0",
  rate,
  sold,
  shop = "YOUNG SHOP",
  costOld,
}: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={imageUrl} className={styles.image} />
        {discountPercent !== "0" && (
          <div className={styles.discount}>{`-${discountPercent}%`}</div>
        )}
      </div>
      <div className={styles.shop}>{shop}</div>
      <div className={styles.priceRow}>
        <span className={styles.cost}>${cost}</span>
        {costOld && (
          <span className={styles.costOld}>${costOld}</span>
        )}
        {discountPercent !== "0" && (
          <span className={styles.discountPercent}>{discountPercent}% off</span>
        )}
      </div>
      <div className={styles.name}>
        <a href="#" className={styles.link}>{name}</a>
      </div>
      <div className={styles.ratingRow}>
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} style={{ color: i < rate ? "#FFD600" : "#ccc", fontSize: 18 }}>★</span>
        ))}
      </div>
      <div className={styles.progressBarWrapper}>
        <div className={styles.progressBar}>
          <div
            className={styles.progress}
            style={{ width: `${Math.min(sold, 100)}%` }}
          ></div>
        </div>
      </div>
      <div className={styles.sold}>Sold: {sold}</div>
    </div>
  );
};

export default ProductComponent;