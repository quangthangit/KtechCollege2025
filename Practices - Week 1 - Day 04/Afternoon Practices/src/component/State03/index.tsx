import ProductComponent from "./ProductComponent";
import styles from "../State03/State03.module.css";
import { useState } from "react";

const State03 = () => {
  const data = [
    {
      name: "Vivo Y8 8GB ram",
      cost: "4.000.000 vnd",
      imageUrl:
        "https://github.com/ngothanhtung/vku-reactjs/blob/main/react-practices/Day-04/images-list-4/Apple-USBC-To-SDCard-A.jpg?raw=true",
    },
    {
      name: "Vivo Y8 8GB ram",
      cost: "4.000.000 vnd",
      imageUrl:
        "https://github.com/ngothanhtung/vku-reactjs/blob/main/react-practices/Day-04/images-list-4/Apple-USBC-To-SDCard-A.jpg?raw=true",
    },
    {
      name: "Vivo Y8 8GB ram",
      cost: "4.000.000 vnd",
      imageUrl:
        "https://github.com/ngothanhtung/vku-reactjs/blob/main/react-practices/Day-04/images-list-4/Apple-USBC-To-SDCard-A.jpg?raw=true",
    },
    {
      name: "Vivo Y8 8GB ram",
      cost: "4.000.000 vnd",
      imageUrl:
        "https://github.com/ngothanhtung/vku-reactjs/blob/main/react-practices/Day-04/images-list-4/Apple-USBC-To-SDCard-A.jpg?raw=true",
    },
    {
      name: "Vivo Y8 8GB ram",
      cost: "4.000.000 vnd",
      imageUrl:
        "https://github.com/ngothanhtung/vku-reactjs/blob/main/react-practices/Day-04/images-list-4/Apple-USBC-To-SDCard-A.jpg?raw=true",
    },
  ];
  const [dataPhone,setDataPhome] = useState(data)
  const deleteHandle = (index: number) => {
    setDataPhome(prev => prev.filter((_, i) => i !== index));
  };
  return (
    <div>
      <div className={styles.card}>
        <div className={styles.row1}>
          <span className={styles.title}>Tin mới</span>
          <span className={styles.subtitle}>Xem thêm</span>
        </div>
        <div className={styles.row2}>
          {dataPhone.length > 0 &&
            dataPhone.map((data, index) => {
              return (
                <ProductComponent
                  deleteHandle={() => deleteHandle(index)}
                  name={data.name}
                  cost={data.cost}
                  imageUrl={data.imageUrl}
                  key={index}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default State03;
