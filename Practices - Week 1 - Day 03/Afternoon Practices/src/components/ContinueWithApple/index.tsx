import { Apple } from "lucide-react";
import styles from "./ContinueWithApple.module.css";

const ContinueWithApple = () => {
  return (
    <div className={styles.button}>
      <Apple height={25} width={25} className={styles.icon} />
      <span className={styles.text}>Continue with apple</span>
    </div>
  );
};

export default ContinueWithApple;
