import styles from "../device/Device.module.css";

type Props = {
  cost: string;
  name: string;
  discountPercent?: string;
  imageUrl: string;
};

const Device = ({ cost, name, imageUrl, discountPercent = "0" }: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={imageUrl} className={styles.image} />
        {
            discountPercent !== "0" ? (
                <div className={styles.discount}>{discountPercent}%</div>
            ) : (
                <div></div>
            )
        }
      </div>
      <span className={styles.name}>{name}</span>
      <span className={styles.cost}>
        {cost}
        {discountPercent && (
          <span className={styles.discountPercent}>
            {((parseFloat(discountPercent) * 100) / parseFloat(cost)).toFixed(2)} đồng
          </span>
        )}
      </span>
    </div>
  );
};

export default Device;
// rafce
