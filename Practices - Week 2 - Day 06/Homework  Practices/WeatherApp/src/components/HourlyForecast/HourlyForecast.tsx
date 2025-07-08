type Props = {
  forecast?: {
    forecastday: {
      date: string;
      hour: {
        time: string;
        temp_c: number;
        condition: {
          icon: string;
          text: string;
        };
      }[];
    }[];
  };
};

const HourlyForecast = ({ forecast }: Props) => {
  const currentHour = new Date().getHours();

  return (
    <div className="bg-white/30 backdrop-blur-md text-white rounded-xl p-4">
      <div className="mb-3 font-semibold text-lg">Hourly Forecast</div>

      <div className="flex overflow-x-auto no-scrollbar space-x-4 text-center text-sm pb-2 gap-2">
        {forecast?.forecastday[0]?.hour
          .slice(currentHour, currentHour + 8)
          .map((hourItem, index) => (
            <div key={index} className="min-w-[84px] flex-shrink-0">
              <img
                src={hourItem.condition.icon}
                alt={hourItem.condition.text}
                className="w-10 h-10 mx-auto"
              />
              <div className="mt-2 text-3xl">
                {Math.round(hourItem.temp_c)}°
              </div>
              <div className="mb-2 font-medium">
                {index === 0 ? "Now" : hourItem.time.split(" ")[1]}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default HourlyForecast;
