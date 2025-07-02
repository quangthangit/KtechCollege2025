import styles from "./component1.module.css";

type Props = {
  title: string;
  avata: React.ReactNode;
  subtitle: string;
  iconRight: React.ReactNode;
  bgColor?: string;
  titleColor?: string;
  subtitleColor?: string;
  titleFontWeight?: string;
  subtitleFontWeight?: string;
};

const Component3 = ({
  title,
  avata,
  subtitle,
  iconRight,
  bgColor = "#fff",
  titleColor = "#000",
  subtitleColor = "#60747E",
  titleFontWeight = "700",
  subtitleFontWeight = "100"
}: Props) => {
  return (
    <div className={styles.card} style={{ backgroundColor: bgColor }}>
      <div className={styles.row1}>
        <div className={styles.col1}>
          {avata}
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <span
              style={{ fontSize: "18px", fontWeight: titleFontWeight, color: titleColor }}
            >
              {title}
            </span>
            <span style={{ fontSize: "14px", color: subtitleColor, fontWeight: subtitleFontWeight }}>
              {subtitle}
            </span>
          </div>
        </div>
        {iconRight}
      </div>
    </div>
  );
};

export default Component3;
