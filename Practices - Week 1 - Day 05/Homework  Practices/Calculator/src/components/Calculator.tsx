import { useState } from "react";
import styles from "../component/styles.module.css";

const Calculator = () => {
  const [calculator, setCalculator] = useState("");
  const [result, setResult] = useState("");
  const operator = ["+", "-", "*", "/"];
  const calculatorHandle = (value: string) => {
    switch (value) {
      case "=":
        try {
          setResult(eval(calculator));
        } catch {
          setResult("Error");
        }
        break;
      case "C":
        setCalculator("");
        setResult("");
        break;
      case "Delete":
        setCalculator((prev) => prev.slice(0, -1));
        break;
      default:
        setCalculator((prev) => prev + value);
    }
  };
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <h1 id={styles.calculator}>{calculator}</h1>
        <h1 id={styles.result}>{result}</h1>
        <div className={styles.row}>
          <div className={styles.col_1}>
            {[...Array(9)].map((_, i) => (
              <button
                key={i}
                className={styles.number}
                onClick={(e) =>
                  calculatorHandle(e.currentTarget.textContent || "")
                }
              >
                {i}
              </button>
            ))}
            {operator.map((prev, i) => {
              return (
                <button
                  key={i}
                  onClick={(e) =>
                    calculatorHandle(e.currentTarget.textContent || "")
                  }
                  className={styles.operator}
                >
                  {prev}
                </button>
              );
            })}
            <button
              onClick={(e) =>
                calculatorHandle(e.currentTarget.textContent || "")
              }
              className={styles.delete}
            >
              Delete
            </button>
            <button
              onClick={(e) =>
                calculatorHandle(e.currentTarget.textContent || "")
              }
              className={styles.deleteAll}
            >
              C
            </button>
            <button
              onClick={(e) =>
                calculatorHandle(e.currentTarget.textContent || "")
              }
              className={styles.equals}
            >
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
