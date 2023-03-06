import React from 'react';
import { TouchableOpacity, StyleSheet } from "react-native"

const CustomButton = ({ children, ...rest}) => {
  return (
    <TouchableOpacity {...rest}>
      {children}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    width: 50,
    height: 50,
    backgroundColor: '#013959',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default CustomButton;