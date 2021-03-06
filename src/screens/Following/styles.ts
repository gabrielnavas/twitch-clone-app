import styled from "styled-components/native";
import Constants from 'expo-constants'
import { Platform } from "react-native";
import colors from "../../styles/colors";
import { statusBarHeight } from "../../styles/dimensions";

export const Wrapper = styled.SafeAreaView`
  background: ${colors.primary};
  flex: 1;
  padding-top: ${statusBarHeight() + 'px'};
`

export const Container = styled.View`
  padding-left: 14px;
`

export const Main = styled.View`

`
