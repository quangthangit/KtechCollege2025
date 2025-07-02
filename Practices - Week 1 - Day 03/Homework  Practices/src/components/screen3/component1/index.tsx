import styles from "./component1.module.css";

type Props = {
  images: string[];
  title: string;
  subtitle?: string;
  bgColor?: string;
};

const Component1 = ({ images, title, subtitle, bgColor = "#12C0E7" }: Props) => {
  return (
    <div className={styles.card} style={{backgroundColor : bgColor}}>
      <div className={styles.avatars}>
        {images.map((url, index) => (
          <img key={index} src={url} alt={`avatar${index}`} className={styles.avatar} />
        ))}
      </div>
      <div className={styles.text}>
        <div className={styles.title}>{title}</div>
        {subtitle && <div className={styles.subtitle}>{subtitle}</div>}
      </div>
    </div>
  );
};

export default Component1;
