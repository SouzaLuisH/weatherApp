import { useRequest } from "../hooks/useRequest";
import {
  ApiCurrentWeatherRequestType,
  ApiLocationRequestType,
  MainData,
  SysData,
  WeatherData,
  WindData,
} from "./typesApi";

const API_KEY = "5d78cb4ca6326a7d206524e880dc61b9";
export const currentWeatherRequest = ({
  lat,
  lon,
}: {
  lat: string;
  lon: string;
}) => {
  if (lat == null) lat = " ";
  if (lon == null) lon = " ";

  const apiLink: string = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=pt&units=metric`;

  return useRequest<ApiCurrentWeatherRequestType>(apiLink, lat);
};

export const getLocalizationWithCityName = (
  city_name: string | null,
  onChange?: any
) => {
  const apiLink: string = `http://api.openweathermap.org/geo/1.0/direct?q=${city_name}&limit=5&appid=${API_KEY}`;
  const response = useRequest<ApiLocationRequestType[]>(apiLink, city_name);
  //
  return response;
};
