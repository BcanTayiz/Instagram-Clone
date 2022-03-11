// Gerekli kütüphaneler, hook yapıları ve react-native elementleri

import { StyleSheet, Text, View,Image,Dimensions } from 'react-native'
import React,{useState,useEffect,useRef} from 'react';

// create Server ile Mock API oluşturabiliyoruz.
import { createServer } from "miragejs";
import {posts} from '../public/MockAPI';
console.log(posts)
import { Video, AVPlaybackStatus } from 'expo-av';

const {width} = Dimensions.get("window")
const height = width * 0.7


// Yine mock API için gerekli server yapısı kontrolü
if (window.server) {
    server.shutdown()
  }
  

// Burada posts yapısı data klasörü içinde çekiyoruz
  window.server = createServer({
      routes() {
        this.get("/api/posts", () => {
          return {
            posts
          }
        })
      },
    })


// Search yapısındaki postların rastgele dağıtılmasını sağlar.
function randomArrayShuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
    }

const SearchPage = ({navigation}) => {

    //Burada 1 adet video useRef kullanılarak dökümantasyonu izledim.

    const [posts, setPosts] = useState([])
    const video = useRef(null);
    const [status, setStatus] = useState({});


    //Yine gördüğümüz gibi fetch ile Mock API verisini çekiyoruz.

    useEffect(() => {
        fetch("/api/posts")
          .then((res) => res.json())
          .then((json) => setPosts(randomArrayShuffle(json.posts)))

        
      }, [])

    

  return (
      // Şimdide gerekli Search dağımı için View'ler Görseller ve Videoları oluşturuyorum.
    <View>
      {posts.map((post,index) => {
          return(
              <View key={index} style={styles.visiualContainer}>
                <Image  source={{uri:post.imageOneUrl}} style={styles.object} key={index+20}/>
                <Image  source={{uri:post.imageTwoUrl}} style={styles.object} key={index+21}/>
                <View>
                    <Video
                        ref={video}
                        style={styles.object}
                        source={{
                        uri: post.videoUrl
                        }}
                        useNativeControls
                        resizeMode="contain"
                        isLooping
                        onPlaybackStatusUpdate={status => setStatus(() => status)}
                    />
                </View>
              </View>
          )
      })}
    </View>
  )
}

export default SearchPage

// Style yapıları aşağıdaki gibidir.
const styles = StyleSheet.create({
    visiualContainer:{
        flex:1,
        flexDirection:'row',
        maxWidth:'100%',
        maxHeight:'100%',
        marginTop:5,
        marginBottom:5
    },
    object:{
        width:'30%',
        height: 150,
        borderColor:'black'
    },
    video: {
        position: 'absolute',
        width,
        height
      },
    container:{
        marginTop:50,
        width,
        height
    },
    scroll:{
        width,
        height,
    },
    image:{
        width,
        height,
        resizeMode:'cover',
    },
    pagination:{
        flexDirection:'row',
        position:'absolute',
        bottom:0,
        alignSelf:'center'
    },
    pagingText:{
        color:'#888',
        margin:3,
    },
    pagingActiveText:{
        color:'black',
        margin:3
    },
    instagramPost:{
        width:'100%',
        height:300,
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      },
})