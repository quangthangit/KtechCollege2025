import styles from "../PhoneDesc/phonedesc.module.css";

type Props = {
  imageUrl: string;
  desc: string;
  view: string;
};

const PhoneDesc = ({ imageUrl, desc, view }: Props) => {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={imageUrl} />
      <span className={styles.desc}>{desc}</span>
      <span className={styles.view}>{view} lượt xem</span>
    </div>
  );
};

export default PhoneDesc;
