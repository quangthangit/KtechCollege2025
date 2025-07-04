import styles from "../HomeworkSession2/HomeworkSession2.module.css";
import ButtonTabs from "./ButtonTabs.tsx";
import Accordion from "./ButtonAccordtions/Accordion.tsx";
import LikeButton from "./LikeButton";
import Rating from "./Rating";
import SlideWithThumb from "./SlideWithThumb";

const HomeworkSession2 = () => {
  return (
    <div className={styles.card}>
      <h1>HomeworkSession2</h1>
      <LikeButton />
      <h1>Rating</h1>
      <Rating />
      <h1>SlideWithThumb</h1>
      <SlideWithThumb />
      <h1>Button Tab</h1>
      <ButtonTabs />
      <h1>ButtonAccordtions</h1>
      <Accordion
        items={[
          { title: "Accordion 1", content: "Nội dung 1" },
          { title: "Accordion 2", content: "Nội dung 2" },
          { title: "Accordion 3", content: "Nội dung 3" },
        ]}
        multiple={false} 
      />
      <Accordion
        items={[
          { title: "Accordion A", content: "Nội dung A" },
          { title: "Accordion B", content: "Nội dung B" },
          { title: "Accordion C", content: "Nội dung C" },
        ]}
        multiple={true}
      />
    </div>
  );
};

export default HomeworkSession2;
