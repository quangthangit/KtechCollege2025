import Device from "./device";
import styles from "../RenderList04/RenderList04.module.css";

const RenderList04 = () => {
  const data = [
    {
      imageUrl:
        "https://github.com/ngothanhtung/vku-reactjs/blob/main/react-practices/Day-04/images-list-4/Apple-USBC-To-SDCard-A.jpg?raw=true",
      name: "Cáp chuyển đổi USBC sang SBS",
      cost: "1.240.000 đồng",
      discountPercent: "25",
    },
    {
      imageUrl:
        "https://github.com/ngothanhtung/vku-reactjs/blob/main/react-practices/Day-04/images-list-4/Apple-USBC-To-SDCard-A.jpg?raw=true",
      name: "Cáp chuyển đổi USBC sang SBS",
      cost: "1.240.000 đồng",
    },
    {
      imageUrl:
        "https://github.com/ngothanhtung/vku-reactjs/blob/main/react-practices/Day-04/images-list-4/Apple-USBC-To-SDCard-A.jpg?raw=true",
      name: "Cáp chuyển đổi USBC sang SBS",
      cost: "1.240.000 đồng",
    },
    {
      imageUrl:
        "https://github.com/ngothanhtung/vku-reactjs/blob/main/react-practices/Day-04/images-list-4/Apple-USBC-To-SDCard-A.jpg?raw=true",
      name: "Cáp chuyển đổi USBC sang SBS",
      cost: "1.240.000 đồng",
      discountPercent: "20",
    },
  ];
  return (
    <div className={styles.card}>
      <span className={styles.row1}>Phụ kiện tương thích</span>
      <div className={styles.row2}>
        {data.length > 0 &&
          data.map((item, index) => {
            return (
              <Device
                key={index}
                cost={item.cost}
                name={item.name}
                discountPercent={item.discountPercent}
                imageUrl={item.imageUrl}
              />
            );
          })}
      </div>
    </div>
  );
};

export default RenderList04;
