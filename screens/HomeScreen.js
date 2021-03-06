import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View,SafeAreaView, } from 'react-native'
import { auth } from '../firebase'

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


  /* Home içinde direk navigasyon koymamın sebebi auth işleminde çok hakim olamam */
  /* Auth için youtube ve google içindeki aramalarım sonucunde en kısa çözümü bulmaya çalıştım */
  /* bunun sonucundaki materyal içindeki çözüm hataları yardımcı olmadı */
  /* Diğer yapıları bozmaması amacı ile home navigasyonu direk oluşturdum */


  return (
    <SafeAreaView style={styles.container}>
      <View >

        {// bütün home componenetleri burada toplanıyor.
        }
        <Header navigation={navigation}/>
        <Stories />
        <Posts />
      </View>
      <View style={styles.downContainer}>
        {
          // login sayfasına buradan dönüş yapabiliyoruz.
          // en alltaki bölümü home ile görebilirsiniz.
        }
        <Text>Email: {auth.currentUser?.email}</Text>
        <TouchableOpacity
          onPress={handleSignOut}
          style={styles.buttonContainer}
        >
          <Text style={styles.buttonText}>Sign out</Text>
        </TouchableOpacity>
      </View>
        <View>
          <Text style={{marginBottom:10,textAlign:'center'}}>Barış Can Tayiz Kompanion Case</Text>
        </View>

    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom:20,
  },
  downContainer:{
    flex:2,
    alignContent:'center',
    justifyContent:'center',
    alignItems:'center',
    marginTop:100,
    marginBottom:100,
    paddingBottom:20,
  },
  buttonContainer: {
    backgroundColor: '#0782F9',
    width: '60%',
    height:60,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
    marginBottom:10,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
    marginBottom:20
  },
})