import { useState } from "react";
import styles from "../LightboxGallery/styles.module.css";

const LightBoxGallery = () => {
  const listImageUrl = [
    { imageUrl: "https://nhannn87dn.github.io/react-app/photos/cover1.jpg" },
    { imageUrl: "https://nhannn87dn.github.io/react-app/photos/cover5.jpg" },
    { imageUrl: "https://nhannn87dn.github.io/react-app/photos/cover6.jpg" },
    { imageUrl: "https://nhannn87dn.github.io/react-app/photos/cover7.jpg" },
    { imageUrl: "https://nhannn87dn.github.io/react-app/photos/cover8.jpg" },
    { imageUrl: "https://nhannn87dn.github.io/react-app/photos/cover5.jpg" },
    { imageUrl: "https://nhannn87dn.github.io/react-app/photos/cover6.jpg" },
    { imageUrl: "https://nhannn87dn.github.io/react-app/photos/cover7.jpg" },
  ];

  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? listImageUrl.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setCurrent((prev) => (prev === listImageUrl.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className={styles.galleryWrapper}>
      <div className={styles.grid}>
        {listImageUrl.map((prev, index) => (
          <img
            key={index}
            src={prev.imageUrl}
            alt={`cover${index + 1}`}
            className={styles.thumb}
            onClick={() => {
              setCurrent(index);
              setOpen(true);
            }}
          />
        ))}
      </div>
      {open && (
        <div className={styles.lightboxOverlay} onClick={() => setOpen(false)}>
          <img
            src={listImageUrl[current].imageUrl}
            alt="lightbox"
            className={styles.lightboxImg}
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className={styles.closeBtn}
            onClick={() => setOpen(false)}
          >
            ×
          </button>
          <button
            className={styles.prevBtn}
            onClick={e => {
              e.stopPropagation();
              handlePrev();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              width={30}
              height={30}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            className={styles.nextBtn}
            onClick={e => {
              e.stopPropagation();
              handleNext();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              width={30}
              height={30}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default LightBoxGallery;