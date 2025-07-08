import { useState } from "react";

type Props = {
  address?: string;
  changeHandle: (value: string) => void;
};

const SearchInput = ({ address = "hanoi", changeHandle }: Props) => {
  const [value, setValue] = useState(address);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      changeHandle(value);
    }
  };

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onKeyDown={handleKeyDown}
      placeholder="Nhập tên thành phố..."
      className="w-full p-3 pl-10 rounded-full bg-white/30 backdrop-blur-md placeholder-white text-white border border-white/40 mb-6 outline-none"
    />
  );
};

export default SearchInput;
