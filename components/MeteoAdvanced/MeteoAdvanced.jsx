import {
  StyledContainer,
  StyledLabel,
  StyledValue,
  s,
} from "./MeteoAdvanced.style";
import { View } from "react-native";
import { Txt } from "../Txt/Txt";

export function MeteoAdvanced({ sunrise, sunset, windspeed }) {
  return (
    <View style={s.container}>
      <StyledContainer>
        <StyledLabel>zawa{sunrise}</StyledLabel>
        <StyledValue>Sunrise</StyledValue>
      </StyledContainer>

      <StyledContainer>
        <StyledLabel>zawa{sunset}</StyledLabel>
        <StyledValue>Sunset</StyledValue>
      </StyledContainer>

      <StyledContainer>
        <StyledLabel>aws{windspeed}</StyledLabel>
        <StyledValue>Wind Speed</StyledValue>
      </StyledContainer>
    </View>
  );
}
