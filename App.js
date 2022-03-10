import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Aşağıda navigasyon için gerekli kütüphaneleri görüyoruz.

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/Homepage'
import RegisterScreen from './screens/RegisterForm'
import LoginScreen from './screens/LoginForm'
import SearchScreen from './screens/SearchPage'

import AuthProvider, { useAuth } from './AuthContext';



const Stack = createNativeStackNavigator();

export default function App() {

  // Bütün screenlerimiz burada Navigator ve Stack yapısı ile oluşturulmaktadır.


  const Navigator = () => {

    const [user] = useAuth()



    // user değeri ile oynayarak burada form yapısına ulaşıp instagram ana sayfasına yönlenebilirsiniz.
    // program içinde hata varsa bu şekilde diğer aşamaları görebilirsiniz.
    console.log(user)

    if(user){
      return(
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>  
        <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown: false}}/> 
      </Stack.Navigator>
      )
    }

    // user olmadığı zaman uygulama

    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Search" component={SearchScreen} />
        </Stack.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <AuthProvider>
        <Navigator />
      </AuthProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
