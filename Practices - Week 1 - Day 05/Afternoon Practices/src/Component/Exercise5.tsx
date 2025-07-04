import { useState } from "react";

const Exercise5 = () => {
  const [text, setText] = useState("");

  const changeHandle = (value: React.ChangeEvent<HTMLInputElement>) => {
    setText(value.currentTarget.value);
  };
  return (
    <div>
      <input
        onChange={(e) => changeHandle(e)}
        style={{
          padding: "10px",
        }}
        type="text"
      />
      <button
      onClick={()=> alert(text)}
        style={{
          padding: "10px",
        }}
      >
        Gửi
      </button>
    </div>
  );
};

export default Exercise5;
