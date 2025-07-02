import styles from "./component3.module.css";

type Props = {
  title: string;
  icon: React.ReactNode;
  subtitle: string;
  degreeC: string;
};

const Component3 = ({ title, icon, subtitle, degreeC }: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.col}>
        <span className={styles.title}>{title}</span>
        <span className={styles.subtitle}>{subtitle}</span>
      </div>
      <span className={styles.degreeC}>{degreeC}</span>
      {icon}
    </div>
  );
};

export default Component3;
