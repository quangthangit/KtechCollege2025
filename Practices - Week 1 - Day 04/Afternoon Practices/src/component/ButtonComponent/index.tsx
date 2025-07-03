type Props = {
  styles: React.CSSProperties;
  children: React.ReactNode;
  name? : "One" | "True" | "Three"
  handle: React.MouseEventHandler<HTMLButtonElement>;
};

const ButtonComponent = ({ styles, children, handle , name = "One" }: Props) => {
  return (
    <button onClick={handle} style={styles}>
      {children} {name}
    </button>
  );
};

export default ButtonComponent;
