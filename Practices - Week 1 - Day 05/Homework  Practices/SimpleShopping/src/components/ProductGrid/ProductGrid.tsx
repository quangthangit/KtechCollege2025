import CartDropDown from "../CartDropdown/CartDropDown";
import ProductCard from "../ProductCard/ProductCard";
import styles from "../ProductGrid/styles.module.css";
import products from "../../data/product";

type Props = {
  active : boolean
}

const ProductGrid = ({active = false} : Props) => {
  return (
    <div className={styles.main}>
      <div className={styles.container1}>
        <div className={styles.title}>Thực phẩm khô</div>
        <div className={styles.filter}>
          <div className={styles["filter-option"]}>Sắp xếp theo giá</div>
          <div className={styles["filter-option"]}>Sắp xếp theo tên</div>
        </div>
      </div>
      <div className={styles.container2}>
        {products.map((item) => (
          <ProductCard
            key={item.id}
            product={{
              id: item.id,
              name: item.name,
              price: item.price,
              imageUrl: item.imageUrl,
            }}
          />
        ))}
      </div>
      {active ? (
        <div className={styles.menu}>
          <CartDropDown />
        </div>
      ) : (
        null
      )}
    </div>
  );
};

export default ProductGrid;
