import { useState } from "react";

const Exercise10 = () => {
  const items = ["Apple", "Banana", "Orange", "Grapes", "Pineapple"];
  const [searchList, setSearchList] = useState<string[]>([]);

  const searchHandle = (key: string) => {
    const result = items.filter(item =>
      item.toLowerCase().includes(key.toLowerCase())
    );
    setSearchList(result);
  };

  return (
    <div>
      <input
        onChange={(e) => searchHandle(e.target.value)}
        type="text"
        placeholder="Search fruit..."
        style={{ padding: "5px", marginBottom: "10px" }}
      />
      {searchList.length > 0 &&
        searchList.map((prev, index) => (
          <div style={{
            padding : "10px 20px",
            backgroundColor : "green",
            marginTop : "10px",
            width : "200px"
          }} key={index}>{prev}</div>
        ))}
    </div>
  );
};

export default Exercise10;
