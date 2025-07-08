import { useEffect, useState } from "react";
import HourlyForecast from "./HourlyForecast/HourlyForecast";
import HumidityAndWind from "./HumidityAndWin/HumidityAndWind";
import MainWeather from "./MainWeather/MainWeather";
import SearchInput from "./SearchInput/SearchInput";
import type { Weather } from "./types/Weather";

const Weather = () => {
  const [data, setData] = useState<Weather | null>(null);
  const [location, setLocation] = useState<string>("hanoi");

  useEffect(() => {
    const fetchDataWeather = async () => {
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/forecast.json?key=c9a0ca46550648b29ce125849232709&q=${location}&days=1&aqi=no&alerts=no&lang=vi`
        );
        const result = await response.json();
        if (result.error) {
          setData(null);
        } else {
          setData(result);
        }
      } catch (error) {
        console.error("Error fetching weather:", error);
      }
    };
    fetchDataWeather();
  }, [location]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-400 to-blue-200 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-transparent">
        <SearchInput changeHandle={(e) => setLocation(e)} />
        {data ? (
          <>
            <MainWeather
              degreesC={data.current.temp_c + "°"}
              weather={data.current.condition.text}
              imageUrl={data.current.condition.icon}
            />
            <HumidityAndWind
              humidity={data.current.humidity + "%"}
              wind={data.current.wind_kph + " km/h"}
            />
          </>
        ) : (
          <p className="text-white text-center">Đang tải dữ liệu...</p>
        )}
       {data?.forecast && <HourlyForecast forecast={data.forecast} />}
      </div>
    </div>
  );
};

export default Weather;
