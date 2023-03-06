import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const CustomInput = ({style, ...rest}) => {
  const inputStyle = style ? StyleSheet.compose(style, styles.input) : styles.input;

  return (
    <TextInput
      style={inputStyle}   
      placeholderTextColor="#999"
      autoCapitalize="words"
      autoCorrect={false}  
      {...rest}
    />
  )
}

const styles = StyleSheet.create({
  input:{
    height: 50,
    alignSelf: 'center',
    backgroundColor: '#FFF',
    color:'#333',
    width: '100%',
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 16,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset:{
        width:4,
        height:4,
    },
    elevation: 2,
  }
})

export default CustomInput;
