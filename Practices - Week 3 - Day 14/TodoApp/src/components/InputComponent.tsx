type InputComponentType = {
  type: string;
  placeholder: string;
};

export const InputComponent = ({
  type,
  placeholder,
}: InputComponentType) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`mt-1 w-full border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400`}
    />
  );
};
