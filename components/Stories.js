import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native'
import React from 'react'

const Stories = () => {
  return (
    <View style={styles.storyContainer}>
        <TouchableOpacity style={styles.imageContainer}>
            <Image 
            style={styles.ImageStyle} 
            source={{uri:'https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=20&m=1223671392&s=612x612&w=0&h=lGpj2vWAI3WUT1JeJWm1PRoHT3V15_1pdcTn2szdwQ0='}}/>
            <Text>George-j19</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.imageContainer}>
            <Image 
            style={styles.ImageStyle} 
            source={{uri:'https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=20&m=1223671392&s=612x612&w=0&h=lGpj2vWAI3WUT1JeJWm1PRoHT3V15_1pdcTn2szdwQ0='}}/>
            <Text>Mike-x142</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.imageContainer}>
            <Image 
            style={styles.ImageStyle} 
            source={{uri:'https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=20&m=1223671392&s=612x612&w=0&h=lGpj2vWAI3WUT1JeJWm1PRoHT3V15_1pdcTn2szdwQ0='}}/>
            <Text>Micheal-12s</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.imageContainer}>
            <Image 
            style={styles.ImageStyle} 
            source={{uri:'https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=20&m=1223671392&s=612x612&w=0&h=lGpj2vWAI3WUT1JeJWm1PRoHT3V15_1pdcTn2szdwQ0='}}/>
            <Text>Alice-41X</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.imageContainer}>
            <Image 
            style={styles.ImageStyle} 
            source={{uri:'https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=20&m=1223671392&s=612x612&w=0&h=lGpj2vWAI3WUT1JeJWm1PRoHT3V15_1pdcTn2szdwQ0='}}/>
            <Text>Richard-2sA</Text>
        </TouchableOpacity>
        <View>
        </View>
    </View>
  )
}

export default Stories

const styles = StyleSheet.create({
    ImageStyle:{
        height:70,
        width:70,
        resizeMode:'stretch',
        zIndex:3
    },
    storyContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        padding:16,
        zIndex:1,
    },
    imageContainer:{
        margin:1,
        padding:1,
        zIndex:2,
    }
})