import { useState } from "react";

const SlideWithThumb = () => {
  const [index, setIndex] = useState(0);

  const listImageUrl = [
    {
      imageUrl:
        "https://nhannn87dn.github.io/react-app/block-ui-7-images/1.jpg",
    },
    {
      imageUrl:
        "https://nhannn87dn.github.io/react-app/block-ui-7-images/2.jpg",
    },
    {
      imageUrl:
        "https://nhannn87dn.github.io/react-app/block-ui-7-images/1.jpg",
    },
    {
      imageUrl:
        "https://nhannn87dn.github.io/react-app/block-ui-7-images/2.jpg",
    },
  ];

  // Sửa logic nút chuyển slide
  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? listImageUrl.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setIndex((prev) => (prev === listImageUrl.length - 1 ? 0 : prev + 1));
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <button onClick={handlePrev} style={{ width: "100px", height: "30px" }}>Left</button>
        <img src={listImageUrl[index].imageUrl} width={400} alt="main" />
        <button onClick={handleNext} style={{ width: "100px", height: "30px" }}>Right</button>
      </div>
      <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
        {listImageUrl.map((prev, idx) => (
          <img
            onClick={() => setIndex(idx)}
            width={100}
            src={prev.imageUrl}
            key={idx}
            alt={`thumb-${idx}`}
            style={{
              border: idx === index ? "3px solid #ff7a00" : "2px solid #eee",
              borderRadius: 8,
              cursor: "pointer",
              opacity: idx === index ? 1 : 0.7,
              transition: "border 0.2s, opacity 0.2s"
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default SlideWithThumb;