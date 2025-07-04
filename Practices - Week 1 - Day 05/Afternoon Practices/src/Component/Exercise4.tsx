import { useState } from "react";

const Exercise4 = () => {
  const [hover, setHover] = useState(false);

  return (
    <div
      style={{
        backgroundColor: hover ? "yellow" : "white",
        color: "black",
        padding: "10px",
      }}
    >
      <p
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        Tạo một thành phần với một phần tử. Khi chuột di chuột qua nó, hãy thay
        đổi màu nền thành màu vàng. Khi chuột rời đi, trở lại màu trắng.
      </p>
    </div>
  );
};

export default Exercise4;
