import styles from "./component5.module.css";

type Props = {
  month: string;
  date: number;
  day: string;
  timeRange: string;
};

const Component5 = ({ month, date, day, timeRange }: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.left}>
        <span className={styles.month}>{month}</span>
        <span className={styles.date}>{date}</span>
      </div>
      <div className={styles.divider} />
      <div className={styles.right}>
        <span className={styles.day}>{day}</span>
        <span className={styles.time}>{timeRange}</span>
      </div>
    </div>
  );
};

export default Component5;
