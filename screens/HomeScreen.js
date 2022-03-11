import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View,SafeAreaView } from 'react-native'
import { auth } from '../firebase'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import Header from '../components/Header'
import Posts from '../components/Posts'
import Stories from '../components/Stories'

const HomeScreen = ({navigation}) => {
  const navigationRef = useNavigation()

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigationRef.replace("Login")
      })
      .catch(error => alert(error.message))
  }

  return (
    <SafeAreaView style={styles.container}>
      <View >
        <Header navigation={navigation}/>
        <Stories />
        <Posts />
      </View>

      <View style={styles.downContainer}>
        <Text>Email: {auth.currentUser?.email}</Text>
        <TouchableOpacity
          onPress={handleSignOut}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Sign out</Text>
        </TouchableOpacity>
      </View>
     
     
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  downContainer:{
    flex:1,
    alignContent:'center',
    justifyContent:'center',
    alignItems:'center',
    marginTop:100,
  },
   button: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
})