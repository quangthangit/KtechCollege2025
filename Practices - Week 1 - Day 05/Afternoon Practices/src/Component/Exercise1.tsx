import { useState } from "react";

const Exercise1 = () => {
  const [count, setCount] = useState(0);

  const handlleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button
        style={{
          backgroundColor: "green",
          color: "white",
          padding: "10px 20px",
        }}
        onClick={() => handlleClick()}
      >
        Click me
      </button>
      <span
        style={{
          padding: "10px 20px",
          fontWeight: "700",
        }}
      >
        Số lần nhấp : {count} lần{" "}
      </span>
    </div>
  );
};

export default Exercise1;
