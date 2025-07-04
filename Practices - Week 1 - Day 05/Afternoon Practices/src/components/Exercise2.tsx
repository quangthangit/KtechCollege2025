import { useState } from "react";

const Exercise2 = () => {
  const [text, setText] = useState("Không có gì");

  const changeHandle = (value : React.ChangeEvent<HTMLInputElement>) => {
    setText(value.currentTarget.value)
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <input
        style={{
          width: "200px",
          padding: "20px",
        }}
        type="text"
        onChange={(e)=>changeHandle(e)}
      />
      <span
        style={{
          paddingTop: "20px",
        }}
      >
        {text.trim() !== "" ? text : "Không có gì"}
      </span>
    </div>
  );
};

export default Exercise2;
