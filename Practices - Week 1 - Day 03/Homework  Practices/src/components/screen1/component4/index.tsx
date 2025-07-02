import styles from "./component4.module.css";

const Component4 = () => {
  return (
    <div className={styles.card}>
      <div className={styles.row1}>
        <div className={styles.tags}>
          <span className={styles.tag}>Highlight</span>
          <span className={`${styles.tag} ${styles.feeds}`}>Feeds</span>
        </div>
        <span className={styles.dots}>•••</span>
      </div>
      <div  style={{paddingLeft : "20px"}}>
        <div className={styles.title}>Dashboard</div>
        <div className={styles.desc}>Business management service</div>
      </div>
      <div  style={{paddingLeft : "20px",paddingBottom : "20px"}} className={styles["progress-row"]}>
        <div className={styles["progress-bar-bg"]}>
          <div
            className={styles["progress-bar"]}
            style={{ width: "60%" }}
          ></div>
        </div>
        <span className={styles.percent}>80%</span>
      </div>
    </div>
  );
};

export default Component4;