import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'

import Header from '../components/Header'
import Stories from '../components/Stories'
import Posts from '../components/Posts'
import { useAuth } from '../AuthContext'

// HomePage Anasayfa olarak çoğu sayfa bu bölümde bulunmaktadır. 


const Homepage = ({route,navigation}) => {
  
  const params = route.params
  const [user] = useAuth()
  return (
    <View >
        <Header navigation={navigation} user={user}
        style={[styles.container, { backgroundColor: '#5cc9f5', marginTop: -16, zIndex: 100 ,flex:1,zIndex:100,position:'absolute'}]}/>
        <Stories style={[styles.container, { backgroundColor: '#5cc9f5', marginTop: -16, zIndex: 1,flex:1}]} />
        <Posts style={styles.container}/>
    </View>
  )
}

export default Homepage

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
  }
})