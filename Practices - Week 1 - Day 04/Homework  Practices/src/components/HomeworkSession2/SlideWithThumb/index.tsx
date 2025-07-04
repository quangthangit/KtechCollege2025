import { useState } from "react";
import styles from "../SlideWithThumb/styles.module.css";

const SlideWithThumb = () => {
  const [index, setIndex] = useState(0);

  const listImageUrl = [
    { imageUrl: "https://nhannn87dn.github.io/react-app/block-ui-7-images/1.jpg" },
    { imageUrl: "https://nhannn87dn.github.io/react-app/block-ui-7-images/2.jpg" },
    { imageUrl: "https://nhannn87dn.github.io/react-app/block-ui-7-images/1.jpg" },
    { imageUrl: "https://nhannn87dn.github.io/react-app/block-ui-7-images/2.jpg" },
  ];

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? listImageUrl.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setIndex((prev) => (prev === listImageUrl.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.mainRow}>
        <svg
          onClick={handlePrev}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          height={30}
          className={styles.arrow}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
          />
        </svg>
        <img src={listImageUrl[index].imageUrl} width={400} alt="main" className={styles.mainImg} />
        <svg
          onClick={handleNext}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          height={30}
          className={styles.arrow}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
      <div className={styles.thumbRow}>
        {listImageUrl.map((prev, idx) => (
          <img
            onClick={() => setIndex(idx)}
            width={100}
            src={prev.imageUrl}
            key={idx}
            alt={`thumb-${idx}`}
            className={`${styles.thumb} ${idx === index ? styles.active : ""}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SlideWithThumb;