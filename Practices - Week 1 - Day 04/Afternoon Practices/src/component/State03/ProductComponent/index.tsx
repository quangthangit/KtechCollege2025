import styles from "../ProductComponent/ProductComponet.module.css";

type Props = {
  name: string;
  cost: string;
  imageUrl: string;
  deleteHandle: React.MouseEventHandler<SVGSVGElement>;
};

const ProductComponent = ({
  name,
  cost = "Ngừng kinh doanh",
  imageUrl,
  deleteHandle,
}: Props) => {
  return (
    <div className={styles.card}>
      <img height={50} src={imageUrl} className={styles.img} />
      <div className={styles.row2}>
        <span className={styles.name}>{name}</span>
        <span className={styles.cost}>{cost}</span>
      </div>
      <div onClick={deleteHandle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          height={20}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default ProductComponent;
