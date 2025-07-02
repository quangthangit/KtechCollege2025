import styles from "./component1.module.css";

type Props = {
  title: string;
  logo: React.ReactNode;
  subtitle: string;
  cost: string;
  time: string;
};

const Component1 = ({ title, logo, subtitle, cost, time }: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.leftSection}>
        <div className={styles.icon}>
          {logo}
        </div>
        <div className={styles.textGroup}>
          <span className={styles.text}>{title}</span>
          <span className={styles.text2}>{subtitle}</span>
        </div>
      </div>
      <div className={styles.textGroup}>
        <span className={styles.text}>{cost}</span>
        <span className={styles.text2}>{time}</span>
      </div>
    </div>
  );
};

export default Component1;
