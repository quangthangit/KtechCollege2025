export type Weather = {
  location: {
    name: string; 
  };
  current: {
    temp_c: number; 
    condition: {
      text: string;
      icon: string; 
    };
    humidity: number; 
    wind_kph: number; 
  };
  forecast: {
    forecastday: {
      date: string;
      day: {
        maxtemp_c: number; 
        maxwind_kph: number; 
        condition: {
          icon: string; 
        };
      };
    }[]; 
  };
};
