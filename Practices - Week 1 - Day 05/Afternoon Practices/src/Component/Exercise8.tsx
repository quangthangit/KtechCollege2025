import { useState } from "react";

const Exercise8 = () => {
  const list = ["Banana", "Apple"];
  const [open, setOpen] = useState(false);
  const [text, setText] = useState(" ");
  const selectHandle = (value: string) => {
    setText(value);
    setOpen(false)
  };
  return (
    <div>
      <button
        style={{
          padding: "10px 30px",
        }}
        onClick={() => setOpen(!open)}
      >
        {text.trim() == "" ? "Select" : text}
      </button>
      <div
        style={{
          display: open ? "flex" : "none",
          flexDirection: "column",
          paddingTop: "5px",
          gap: "5px",
        }}
      >
        {list.map((prev) => {
          return (
            <div
              onClick={(e) => selectHandle(e.currentTarget.textContent || "")}
              style={{
                padding: "10px 30px",
                width: "100px",
                backgroundColor: "green",
                color: "white",
              }}
            >
              {prev}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Exercise8;
