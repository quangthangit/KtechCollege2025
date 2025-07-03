import { useState } from "react";

const State02 = () => {
  const [number, setNumber] = useState(0);
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
      <span>Chọn đánh giá của bạn</span>
      <div>
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            onClick={() => setNumber(i)}
            style={{ color: i <= number ? "red" : "black" }}
            height={30}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
            />
          </svg>
        ))}
      </div>
      <div
        style={{
          backgroundColor: number >= 4 ? "green" : "red",
          color: "white",
          padding : "20px",
          borderRadius : "10px"
        }}
      >
        {number >= 4 ? "Tốt" : "Bình thường"}
      </div>
    </div>
  );
};

export default State02;
