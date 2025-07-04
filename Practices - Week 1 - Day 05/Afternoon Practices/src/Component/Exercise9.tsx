import { useState } from "react";

const Exercise9 = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };

  return (
    <div style={{ padding: "20px" }}>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          style={{ marginRight: "10px" }}
        />
        Toggle me
      </label>
      <p>Checkbox is: {checked ? "checked" : "unchecked"}</p>
    </div>
  );
};

export default Exercise9;
