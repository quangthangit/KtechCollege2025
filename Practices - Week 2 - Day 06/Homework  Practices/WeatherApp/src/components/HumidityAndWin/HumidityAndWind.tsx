type Props = {
    humidity : string,
    wind : string,
}

const HumidityAndWind = ({humidity,wind} : Props) => {
  return (
    <div className="flex justify-between bg-white/30 backdrop-blur-md text-white p-4 rounded-xl mb-6 text-sm">
      <div className="flex-1 text-center border-r border-white/50">
        <div className="uppercase">Humidity</div>
        <div className="text-xl font-bold mt-1">{humidity}</div>
      </div>
      <div className="flex-1 text-center">
        <div className="uppercase">Wind</div>
        <div className="text-xl font-bold mt-1">{wind}</div>
      </div>
    </div>
  );
};
export default HumidityAndWind;
