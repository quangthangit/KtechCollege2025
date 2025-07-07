type Props = {
  name: string;
  styles: string;
  handle: () => void;
};

const ButtonComponent = ({ name, styles, handle }: Props) => {
  return (
    <button
      className={`${styles} text-white font-semibold px-4 py-2 rounded-md`}
      onClick={handle}
    >
      {name}
    </button>
  );
};

export default ButtonComponent;
