import { useState } from "react";
const colorMap: Record<string, string> = {
  Vàng: "gold",
  Đỏ: "red",
  Cam: "orange",
};
const State01 = () => {
  const listButton = [{ name: "Vàng" }, { name: "Đỏ" }, { name: "Cam" }];
  const [selected, setSelected] = useState<string>("");

  return (
    <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
      <span>Màu</span>
      {listButton.map((data) => (
        <div
          key={data.name}
          onClick={() => setSelected(data.name)}
          style={{
            color: selected === data.name ? "#fff" : "#222",
            background: selected === data.name ? colorMap[data.name] : "#f3f3f3",
            cursor: "pointer",
            padding: "6px 16px",
            borderRadius: "8px",
            border: "1px solid #ddd",
            fontWeight: 500,
            transition: "all 0.2s"
          }}
        >
          {data.name}
        </div>
      ))}
    </div>
  );
};

export default State01;