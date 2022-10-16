import React, { useState, useEffect } from "react";
import { ScrollView, Text, View } from "react-native";

type WeatherData = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

type MainData = {
  temp: string;
  feels_like: string;
  temp_min: string;
  temp_max: string;
  pressure: number;
  humidity: number;
};

type WindData = {
  speed: number;
  deg: number;
};
type SysData = {
  country: string;
};

type Request = {
  name: string;
  weather: WeatherData;
  main: MainData;
  wind: WindData;
  sys: SysData;
};

const apiLink =
  "https://api.openweathermap.org/data/2.5/weather?lat=-30.033056&lon=-51.230000&appid=5d78cb4ca6326a7d206524e880dc61b9&lang=pt&units=metric";

export const Home = () => {
  const [data, setData] = useState<Request | null>(null);

  useEffect(() => {
    fetch(apiLink)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <ScrollView style={{ flex: 1, marginTop: 30 }}>
      <Text>{JSON.stringify(data, null, 4)}</Text>
    </ScrollView>
  );
};
