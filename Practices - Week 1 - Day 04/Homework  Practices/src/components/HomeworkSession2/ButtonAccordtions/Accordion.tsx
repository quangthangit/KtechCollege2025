import { useState } from "react";
import styles from "../ButtonAccordtions/styles.module.css"
type Item = {
  title: string;
  content: string;
};

type AccordionProps = {
  items: Item[];
  multiple?: boolean; 
};

const Accordion = ({ items, multiple = false }: AccordionProps) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const handleClick = (idx: number) => {
    if (multiple) {
      setOpenIndexes((prev) =>
        prev.includes(idx)
          ? prev.filter((i) => i !== idx)
          : [...prev, idx]
      );
    } else {
      setOpenIndexes((prev) => (prev[0] === idx ? [] : [idx]));
    }
  };

  return (
    <div className={styles.card}>
      {items.map((item, idx) => (
        <div key={idx} className={styles.item}>
          <div
          className={styles.item2}
            onClick={() => handleClick(idx)}
          >
            {item.title}
          </div>
          {openIndexes.includes(idx) && (
            <div className={styles.content}>
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;