import styles from "../RenderList05/styles.module.css";
import ProductComponent from "./ProductComponent";

const products = [
  {
    cost: "1,422.7",
    costOld: "1,825.5",
    discountPercent: "39",
    name: "LG White Front Load Steam Washer",
    imageUrl:
      "https://github.com/ngothanhtung/vku-reactjs/blob/main/react-practices/Day-04/images-list-5/1.jpg?raw=true",
    rate: 4,
    sold: 10,
    shop: "YOUNG SHOP",
  },
  {
    cost: "999.9",
    costOld: "1,299.9",
    discountPercent: "23",
    name: "Samsung Galaxy S21",
    imageUrl:
      "https://github.com/ngothanhtung/vku-reactjs/blob/main/react-practices/Day-04/images-list-5/2.jpg?raw=true",
    rate: 5,
    sold: 25,
    shop: "SAMSUNG STORE",
  },
  {
    cost: "999.9",
    costOld: "1,299.9",
    discountPercent: "23",
    name: "Samsung Galaxy S21",
    imageUrl:
      "https://github.com/ngothanhtung/vku-reactjs/blob/main/react-practices/Day-04/images-list-5/3.jpg?raw=true",
    rate: 5,
    sold: 25,
    shop: "SAMSUNG STORE",
  },
  {
    cost: "999.9",
    costOld: "1,299.9",
    discountPercent: "23",
    name: "Samsung Galaxy S21",
    imageUrl:
      "https://github.com/ngothanhtung/vku-reactjs/blob/main/react-practices/Day-04/images-list-5/4.jpg?raw=true",
    rate: 5,
    sold: 25,
    shop: "SAMSUNG STORE",
  },
  {
    cost: "999.9",
    costOld: "1,299.9",
    discountPercent: "23",
    name: "Samsung Galaxy S21",
    imageUrl:
      "https://github.com/ngothanhtung/vku-reactjs/blob/main/react-practices/Day-04/images-list-5/5.jpg?raw=true",
    rate: 4,
    sold: 25,
    shop: "SAMSUNG STORE",
  },
  {
    cost: "999.9",
    costOld: "1,299.9",
    discountPercent: "23",
    name: "Samsung Galaxy S21",
    imageUrl:
      "https://github.com/ngothanhtung/vku-reactjs/blob/main/react-practices/Day-04/images-list-5/6.jpg?raw=true",
    rate: 2,
    sold: 25,
    shop: "SAMSUNG STORE",
  },
];

const RenderList05 = () => {
  return (
    <div className={styles.card}>
      <div className={styles.row1}>
        <div className={styles.title}>
          <span>Deal of the day</span>
          <span className={styles.time}>End In 6:17:17:39</span>
        </div>
        <span className={styles.viewall}>View all</span>
      </div>
      <hr className={styles.divider} />
      <div className={styles.row2}>
        {products.map((item, idx) => (
          <ProductComponent
            key={idx}
            cost={item.cost}
            costOld={item.costOld}
            discountPercent={item.discountPercent}
            name={item.name}
            imageUrl={item.imageUrl}
            rate={item.rate}
            sold={item.sold}
            shop={item.shop}
          />
        ))}
      </div>
    </div>
  );
};

export default RenderList05;
