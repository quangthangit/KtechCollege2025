type Props = {
  degreesC: string;
  weather: string;
  imageUrl : string
};

const MainWeather = ({ degreesC, weather,imageUrl }: Props) => {
  return (
    <div className="flex text-center text-white mb-6">
      <div className="flex-1">
        <div className="text-8xl font-bold">{degreesC}</div>
        <div className="text-2xl font-bold mt-2">{weather}</div>
      </div>
      <div className="mt-4 flex-1">
        <img
          src={imageUrl}
          alt="weather icon"
          className="w-20 mx-auto"
        />
      </div>
    </div>
  );
};

export default MainWeather;
