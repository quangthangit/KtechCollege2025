import { ArrowRight } from "lucide-react";
import styles from "./GetStartedButton.module.css";

const GetStartedButton = () => {
    return (
        <div className={styles.button}>
            <span>Get started</span>
            <ArrowRight className={styles.icon} />
        </div>
    );
};

export default GetStartedButton;