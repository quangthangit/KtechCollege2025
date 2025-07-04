import { useState } from "react";

const Slider2 = () => {
  const listImageUrl = [
    { imageUrl: "https://nhannn87dn.github.io/react-app/photos/cover1.jpg" },
    { imageUrl: "https://nhannn87dn.github.io/react-app/photos/cover5.jpg" },
    { imageUrl: "https://nhannn87dn.github.io/react-app/photos/cover6.jpg" },
    { imageUrl: "https://nhannn87dn.github.io/react-app/photos/cover7.jpg" },
  ];

  const [current, setCurrent] = useState(0);

  // const handlePrev = () => {
  //   setCurrent((prev) => (prev === 0 ? listImageUrl.length - 1 : prev - 1));
  // };
  // const handleNext = () => {
  //   setCurrent((prev) => (prev === listImageUrl.length - 1 ? 0 : prev + 1));
  // };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={listImageUrl[current].imageUrl}
          alt="lightbox"
          style={{
            maxWidth: "800px",
            maxHeight: "800px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
            background: "#fff",
          }}
          onClick={(e) => e.stopPropagation()}
        />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop : "10px"
        }}
      >
        {listImageUrl.map((prev, index) => (
          <img
            key={index}
            src={prev.imageUrl}
            alt={`cover${index + 1}`}
            style={{
              width: "200px",
              aspectRatio: "1/1",
              height: "auto",
              objectFit: "cover",
              cursor: "pointer",
            }}
            onClick={() => {
              setCurrent(index);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider2;
