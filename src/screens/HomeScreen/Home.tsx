import React, { useState, useEffect } from "react";
import {
  TouchableOpacity,
  ScrollView,
  Text,
  TextInput,
  View,
  FlatList,
} from "react-native";

import {
  currentWeatherRequest,
  getLocalizationWithCityName,
} from "../../services/api";

export const Home = () => {
  const [typedCityName, setTypedCityName] = useState<string | null>(" ");
  const [local, setLocal] = useState({ lat: "", lon: "" });

  const cityList = getLocalizationWithCityName(typedCityName);

  const currentWeather = currentWeatherRequest(local);

  useEffect(() => {
    if (!typedCityName) setTypedCityName(" ");
  }, [typedCityName]);

  return (
    <ScrollView style={{ flex: 1, marginTop: 30 }}>
      <Text>{currentWeather?.name}</Text>
      <Text>{currentWeather?.main?.temp} °C</Text>

      <TextInput
        placeholder="nome da cidade"
        onChangeText={(typed) => {
          setTypedCityName(typed);
        }}
      />

      <FlatList
        data={cityList}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                setLocal({ lat: item.lat, lon: item.lon });
              }}
            >
              <View style={{ borderWidth: 1 }}>
                <Text>{item.name}</Text>
                <Text>
                  {item.state} - {item.country}
                </Text>
                <Text>
                  {item.lat} , {item.lon}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </ScrollView>
  );
};
