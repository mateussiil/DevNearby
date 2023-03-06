import React from 'react';
import { StyleSheet, Image, View, Text, TouchableOpacity} from 'react-native';
import { getCurrentPositionAsync } from 'expo-location';
import { MaterialIcons } from '@expo/vector-icons';
import Input from '../../components/Input';
import CustomButton from '../components/Button';
import { button } from '../styles/styles';

function Register({ navigation }){
   const goToMyLocation = async () => {
      const { coords } = await getCurrentPositionAsync({
         enableHighAccuracy: true,
      });

      const { latitude, longitude } = coords;

      console.log({  latitude, longitude });
   }

   return (
   <>
     <View style={styles.container}>
         <Text style={styles.label}>Github User</Text>
         <Input
            style={styles.input}
            placeholder="Github User" 
            name="username_github"
            id="username_github" 
         />
         <TouchableOpacity onPress={goToMyLocation} style={styles.selfPositionButton}>
            <MaterialIcons name="my-location" size={20} color="#FFF"/>   
            <Text>Get my position</Text>
         </TouchableOpacity>
         <CustomButton style={[button.default, styles.register]}>
            <Text style={styles.registerText}>Register</Text>
         </CustomButton>
      </View>
   </>
   );
}

const styles = StyleSheet.create({
   container:{
      flex:1,
      top:20,
      padding: 10
   },
   loadButton:{
      width:50,
      height:50,
      backgroundColor:'#013959',
      borderRadius:25,
      justifyContent:'center',
      alignItems:'center',
      marginLeft:15,
   },
   register: {
      position: 'absolute',
      alignSelf: 'center',
      bottom: 40,
      width: '80%',
   },
   registerText:{
      color: 'white',
      fontWeight: 'bold',
   }
});

export default Register;