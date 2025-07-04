import styles from "../HomeworkSession2/styles.module.css";
import ButtonTabs from "./ButtonTabs/index.tsx";
import Accordion from "./ButtonAccordtions/Accordion.tsx";
import LikeButton from "./LikeButton";
import Rating from "./Rating";
import SlideWithThumb from "./SlideWithThumb";
import LightBoxGallery from "./LightboxGallery/index.tsx";
import Slider2 from "./Slider2/index.tsx";

const HomeworkSession2 = () => {
  return (
    <div className={styles.card}>
      <h1 style={{ textAlign: "center" }}>Homework Session2</h1>
      <LikeButton />
      <h2>Rating</h2>
      <Rating />
      <h2>SlideWithThumb</h2>
      <SlideWithThumb />
      <h2>Button Tab</h2>
      <ButtonTabs />
      <h2>ButtonAccordtions</h2>
      <div style={{ display: "flex", gap: "20px", alignContent: "center" }}>
        <Accordion
          items={[
            { title: "History 1", content: "Nội dung 1" },
            { title: "AppRoach 2", content: "Nội dung 2" },
            { title: "Culture 3", content: "Nội dung 3" },
          ]}
          multiple={false}
        />
        <Accordion
          items={[
            { title: "History A", content: "Nội dung A" },
            { title: "AppRoach B", content: "Nội dung B" },
            { title: "Culture C", content: "Nội dung C" },
          ]}
          multiple={true}
        />
      </div>
      <h2>Slide 2</h2>
      <Slider2 />
      <h2>Lightbox Gallery</h2>
      <LightBoxGallery />
    </div>
  );
};

export default HomeworkSession2;
