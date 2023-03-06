import { StyleSheet } from "react-native";


const buttonDefault = {
  width: 50,
  height: 50,
  backgroundColor: '#013959',
  borderRadius: 25,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 8,
}

export const button = StyleSheet.create({
  default: {
    ...buttonDefault
  },
  circle: {
    ...buttonDefault,
    borderRadius: 25,
  }
})