type Props = {
  day: string;
  icon: React.ReactNode;
  active?: boolean;
  hour: string;
};

const Weather = ({ day, icon, active = false, hour }: Props) => {
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
        color: active ? "#0031B0" : "#000",
      }}
    >
      {icon}
      <span>{day}</span>
      <span style={{fontSize : "9px"}}>{hour}</span>
    </div>
  );
};

export default Weather;
