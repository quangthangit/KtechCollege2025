import PhoneDesc from "./PhoneDesc";
import styles from "../RenderList01/RenderList01.module.css";

const RenderList01 = () => {
  const phoneData = [
    {
      imageUrl:
        "https://www.geeky-gadgets.com/wp-content/uploads/2024/03/iPhone-15-Pro-Max.jpg",
      desc: "Ấn tượng đầu tiên sam sung galaxy A32 4G Với 6 triệu đã có màng hình Super AMOLED 90hz",
      view: "1240",
    },
    {
      imageUrl:
        "https://th.bing.com/th/id/OIP.sBHYpYfjrKiQhhDHbKZ7ewAAAA?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
      desc: "Ấn tượng đầu tiên sam sung galaxy A32 4G Với 6 triệu đã có màng hình Super AMOLED 90hz",
      view: "1430",
    },
    {
      imageUrl:
        "https://www.geeky-gadgets.com/wp-content/uploads/2024/03/iPhone-15-Pro-Max.jpg",
      desc: "Ấn tượng đầu tiên sam sung galaxy A32 4G Với 6 triệu đã có màng hình Super AMOLED 90hz",
      view: "140",
    },
    {
      imageUrl:
        "https://th.bing.com/th/id/OIP.sBHYpYfjrKiQhhDHbKZ7ewAAAA?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
      desc: "Ấn tượng đầu tiên sam sung galaxy A32 4G Với 6 triệu đã có màng hình Super AMOLED 90hz",
      view: "2140",
    },
  ];
  return (
    <div className={styles.card}>
      <div className={styles.row1}>
        <span className={styles.title}>Tin mới</span>
        <span className={styles.subtitle}>Xem thêm</span>
      </div>
      <div className={styles.row2}>
        {phoneData.length > 0 &&
          phoneData.map((data, index) => {
            return (
              <PhoneDesc
                imageUrl={data.imageUrl}
                desc={data.desc}
                view={data.view}
                key={index}
              />
            );
          })}
      </div>
    </div>
  );
};
export default RenderList01;
