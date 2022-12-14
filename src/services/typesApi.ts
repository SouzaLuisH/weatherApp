export type WeatherData = {
  id: number;
  main: string;
  description: string;
  icon: string;
};
export type MainData = {
  temp: string;
  feels_like: string;
  temp_min: string;
  temp_max: string;
  pressure: number;
  humidity: number;
};
export type WindData = {
  speed: number;
  deg: number;
};
export type SysData = {
  country: string;
};

export type ApiCurrentWeatherRequestType = {
  name: string;
  weather: WeatherData;
  main: MainData;
  wind: WindData;
  sys: SysData;
};

export type ApiLocationRequestType = {
  lat: string;
  lon: string;
  country: string;
  state: string;
  name: string;
};
