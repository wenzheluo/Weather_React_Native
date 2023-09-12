import { Text, View } from "react-native";
import { s } from "../Home/Home.style.js";

export function Home() {
  return (
    <>
      <View style={s.weather_basic}>
        <Text style={s.txt}>Basic Weather info</Text>
      </View>
      <View style={s.searchbar_container}>
        <Text style={s.txt}>SearchBar</Text>
      </View>
      <View style={s.weather_advanced}>
        <Text style={s.txt}>Advanced Weather info</Text>
      </View>
    </>
  );
}
