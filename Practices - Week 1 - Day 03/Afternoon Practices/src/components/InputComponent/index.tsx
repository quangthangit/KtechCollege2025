import styles from "./InputComponent.module.css";

type InputProps = {
    label?: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
};

const InputComponent = ({ label, leftIcon, rightIcon }: InputProps) => {
    return (
        <div className={styles.inputWrapper}>
            {leftIcon && <span className={styles.leftIcon}>{leftIcon}</span>}
            <input className={styles.input} placeholder={label} />
            {rightIcon && <span className={styles.rightIcon}>{rightIcon}</span>}
        </div>
    );
};

export default InputComponent;
