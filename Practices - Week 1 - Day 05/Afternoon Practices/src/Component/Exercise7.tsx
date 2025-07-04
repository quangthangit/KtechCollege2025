import { useState } from "react";

const Exercise7 = () => {
  const [double, setDouble] = useState(false);
  const doubleClickHandle = () => {
    setDouble(true)
    setTimeout(() => {
      setDouble(false);
    }, 2000);
  };
  return (
    <div>
      <button style={{
        padding : "20px",
        backgroundColor : "green",
        color : "white"
      }} onDoubleClick={() => doubleClickHandle()}>Double Click</button>
      <p>{double ? "Double Click" : ""}</p>
    </div>
  );
};

export default Exercise7;
