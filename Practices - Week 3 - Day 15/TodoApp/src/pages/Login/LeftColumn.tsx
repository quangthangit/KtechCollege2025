import Lottie from "lottie-react";
import Animation from "./Animation.json"
export const LeftColumn = () => {
  return (
    <div className="w-full md:w-1/2 bg-[#f2f6fa] flex flex-col justify-center items-center p-6 md:p-12">
      <h1 className="text-3xl md:text-4xl font-bold text-[#2b2b2b] leading-tight mb-6 text-center md:text-left">
        Set Your Partner
        <br />
        Recruitment on Auto-Pilot
      </h1>
      <div className="relative w-[200px] h-[200px] md:w-[300px] md:h-[300px]">
        <Lottie animationData={Animation} className="w-full h-full" />
      </div>
    </div>
  );
};
