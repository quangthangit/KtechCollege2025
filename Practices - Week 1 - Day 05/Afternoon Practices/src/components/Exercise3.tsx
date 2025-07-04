import { useState } from "react";

const Exercise3 = () => {
  const [turn, setTurn] = useState(false);
  return (
    <div style={{
        display : "flex",
        gap : "20px",
        alignItems : "center"
    }}>
      <button
        style={{
          backgroundColor: turn ? "red" : "green",
          padding: "10px 20px",
          fontWeight: "600",
          color: "white",
        }}
        onClick={() => setTurn(!turn)}
      >
        {turn ? "Tắt" : "Bật"}
      </button>
      <span>Công tắc đang {turn ? "Bật" : "Tắt"}</span>
    </div>
  );
};

export default Exercise3;
