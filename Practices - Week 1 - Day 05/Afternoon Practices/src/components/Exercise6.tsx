import { useState } from "react";

const Exercise6 = () => {
  const [lastKey, setLastKey] = useState<string>("");

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    setLastKey(event.key);
  };

  return (
    <div>
      <input
        type="text"
        onKeyDown={handleKeyDown}
        placeholder="Type something..."
        style={{ padding: "10px", fontSize: "16px" }}
      />
      <p>Last key: {lastKey}</p>
    </div>
  );
};

export default Exercise6;
