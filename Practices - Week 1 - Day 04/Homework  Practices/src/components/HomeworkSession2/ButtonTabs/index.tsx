import { useState } from "react";
import styles from "../ButtonTabs/styles.module.css"

const TABS = [
  {
    label: "HISTORY",
    content:
      "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.",
  },
  {
    label: "APPROACH",
    content:
      "Contenido de tabNeque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
  },
  {
    label: "CULTURE",
    content:
      "Culture tab content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod, urna eu tincidunt consectetur, nisi nisl aliquam enim, eget.",
  },
  {
    label: "METHOD",
    content:
      "Method tab content. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  },
];

const ButtonTabs = () => {
  const [active, setActive] = useState(0);

  return (
    <div className={styles.wrapper}>
      <div className={styles.tabRow1}>
        {TABS.map((tab, idx) => (
          <button
            key={tab.label}
            onClick={() => setActive(idx)}
            className={`${styles.tabBtn1} ${active === idx ? styles.active1 : ""}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className={styles.tabContent1}>
        {TABS[active].content}
      </div>
      <div className={styles.tabRow2}>
        {TABS.map((tab, idx) => (
          <button
            key={tab.label}
            onClick={() => setActive(idx)}
            className={`${styles.tabBtn2} ${active === idx ? styles.active2 : ""}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className={styles.tabContent2}>
        {TABS[active].content}
      </div>
    </div>
  );
};

export default ButtonTabs;
