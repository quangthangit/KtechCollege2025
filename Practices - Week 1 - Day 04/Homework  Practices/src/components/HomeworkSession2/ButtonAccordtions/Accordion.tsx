import { useState } from "react";

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
    <div style={{width : "400px"}}>
      {items.map((item, idx) => (
        <div key={idx} style={{ border: "1px solid #eee", marginBottom: 8, borderRadius: 8 }}>
          <div
            style={{
              padding: "12px 20px",
              background: "#f5f5f5",
              cursor: "pointer",
              fontWeight: 600,
              borderRadius: "8px 8px 0 0",
            }}
            onClick={() => handleClick(idx)}
          >
            {item.title}
          </div>
          {openIndexes.includes(idx) && (
            <div style={{ padding: "16px 20px", background: "#fff" }}>
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;