import styles from "./component1.module.css";

type Props = {
  time: string;
  nation1: string;
  nation2: string;
  goal: string;
  nationIcon1: React.ReactNode;
  nationIcon2: React.ReactNode;
};

const Component1 = ({
  time,
  nation1,
  nation2,
  goal,
  nationIcon1,
  nationIcon2,
}: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.row1}>
        <span className={styles.time}>{time}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={styles.icon}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </svg>
      </div>
      <div className={styles.row2}>
        <div className={styles.col}>
          <span>{nation1}</span>
          {nationIcon1}
        </div>
        <div className={styles.col}>
          <span className={styles.goal}>{goal}</span>
        </div>
        <div className={styles.col}>
          {nationIcon2}
          <span>{nation2}</span>
        </div>
      </div>
    </div>
  );
};

export default Component1;
