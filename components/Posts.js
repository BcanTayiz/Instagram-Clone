import { StyleSheet, Text, View,FlatList, ScrollView, SafeAreaView,Image,Dimensions,TouchableOpacity} from 'react-native'
import React,{useState,useEffect,useRef} from 'react';
import { createServer } from "miragejs";

import { Video, AVPlaybackStatus } from 'expo-av';
import { posts } from '../public/MockAPI';
import { CONSTS } from '../Constants/constants';


const {width} = Dimensions.get("window") 
const height = width * 0.7

if (window.server) {
    server.shutdown()
  }
  
  window.server = createServer({
      routes() {
        this.get("/api/posts", () => {
          return {
            posts
          }
        })
      },
    })

const Posts = () => {

    const video = useRef(null);
    const [status, setStatus] = useState({});

    const [posts, setPosts] = useState([])
    
    var [active,setActive] = useState(0)

    useEffect(() => {
      fetch("/api/posts",{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      })
        .then((res) => res.json())
        .then((json) => setPosts(json.posts))
    }, [])

    const changeScrollColor = ({nativeEvent}) => {
        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width)
        if(slide !== active){
            setActive(slide)
        }
    }

      return(
       
        <SafeAreaView>
        {posts.map((post) => (
          <View key={post.id} style={styles.container}>
              <View style={styles.upperContainer}>
                  <Image  source={{uri: post.profile_pic}} style={styles.imageProfil}/>
                  <Text>{post.profile_name}</Text>
              </View>
              <ScrollView paddingEnabled horizontal 
            showsHorizontalScrollIndicator={false}
            onScroll={changeScrollColor}
              style={styles.scroll}>
                <Image  source={{uri:post.imageOneUrl}} style={styles.image} />
                <Image  source={{uri:post.imageTwoUrl}} style={styles.image}/>
                <View>
                    <Video
                        ref={video}
                        style={styles.video}
                        source={{
                        uri: post.videoUrl
                        }}
                        useNativeControls
                        resizeMode="contain"
                        isLooping
                        onPlaybackStatusUpdate={status => setStatus(() => status)}
                    />
                </View>
                
              </ScrollView>
              <View style={styles.pagination}>
                  {
                      posts.map((item,index)=> {
                         if(index == 0 || (index == 1|| index == 2)){
                             
                             return(
                            <Text key={index} style={index == active ? styles.pagingActiveText : styles.pagingText}>⬤</Text>
                            )
                      } 
                      })
                  }
              </View>
              <View>
                  <View style={styles.downContainer}>
                      <TouchableOpacity>
                        <Image source={{uri:CONSTS.like}} style={{width:25,height:25,marginLeft:10}} />
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <Image source={{uri:CONSTS.comment}} style={{width:25,height:25,marginLeft:10}} />
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <Image source={{uri:CONSTS.direct_message}} style={{width:25,height:25,marginLeft:10}} />
                      </TouchableOpacity>
                      <TouchableOpacity>
                      <View style={styles.saveIcon}>
                          <Image source={{uri:CONSTS.save_icon}} style={{width:25,height:25}} />
                      </View>
                      </TouchableOpacity>
                  </View>
                <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea officiis nisi aspernatur numquam laboriosam sed corrupti? Nostrum pariatur totam rerum nam doloremque iste molestias unde voluptates, distinctio doloribus quaerat velit? </Text>
              </View>
              
              
          </View>
        ))}
      </SafeAreaView>
      )
   
}

export default Posts

const styles = StyleSheet.create({
    video: {
        position: 'absolute',
        width,
        height
      },
    container:{
        marginTop:50,
        width,
        height: height+120
    },
    upperContainer:{
        flexDirection:'col',
        width:'100%',
        height:80,
        padding:20,
        backgroundColor:'#EAEAEA',
        shadowColor: "#000000",
        shadowOpacity: 0.3,
        shadowRadius: 10,
        shadowOffset: {
        height: 3,
        width: 3
        }
    },
    downContainer:{
        flexDirection:'row',
        marginTop:10,
        padding:5,
        height:60,
        width:'100%'
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
    saveIcon:{
        marginLeft:Dimensions.get('window').width - 160,
    },
    imageProfil:{
        width:30,
        height:30,
        resizeMode:'cover',
        paddingBottom:20
    },
    pagination:{
        flexDirection:'row',
        position:'absolute',
        bottom:100,
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