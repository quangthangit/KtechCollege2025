type Props = {
  day: string;
  icon: React.ReactNode;
  active?: boolean;
};

const Weather = ({ day, icon, active = false }: Props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        alignItems: "center",
        padding: "12px",
        borderRadius: "12px",
        backgroundColor: active ? "#F6FBFF" : "#fff",
      }}
    >
      {icon}
      <span>{day}</span>
    </div>
  );
};

export default Weather;
