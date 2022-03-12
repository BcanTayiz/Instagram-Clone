import { StyleSheet, Text, View,FlatList, ScrollView, SafeAreaView,Image,Dimensions,TouchableOpacity,TextInput } from 'react-native'
import React,{useState,useEffect,useRef} from 'react';
import { createServer } from "miragejs";

import { Video, AVPlaybackStatus } from 'expo-av';
import { posts } from '../public/MockAPI';
import { CONSTS } from '../Constants/constants';

import { Icon } from 'react-native-elements';
import { v4 as uuidv4 } from 'uuid';


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
    const [commentText,setCommentText] = useState([])
    const [commentList,setCommentList] = useState([])
    const [userToComment,setUSerToComment] = useState('')

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

    const setCommentTextFunc = () => {
          setCommentList([...commentList,commentText])
          setUSerToComment(createCommenterUser)
          console.log(commentList)
    }

    const createCommenterUser = () => {
      const list = ['X','Y','W','a','b','c','1','2',',3','4','5','6']
      let person = 'User-'
      for (let i = 0;i<3;i++){
        let x = Math.floor(Math.random() * list.length)
        person += list[x]
      }

      return person

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
                        <View style={{position:'absolute',top:25,left:4}}>
                          <Text style={{fontWeight:'500'}}>{post.likeNum} likes</Text>
                        </View>
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
                  <View style={styles.commentSection}>
                    <Text>{post.profile_name}</Text>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea officiis nisi aspernatur numquam laboriosam sed corrupti? Nostrum pariatur totam rerum nam doloremque iste molestias unde voluptates, distinctio doloribus quaerat velit? </Text>
                  </View>
                  <View>
                    
                    <Text style={{color:'gray',marginTop:3,padding:3}}>View all {post.commentNum} comment</Text>
                    <View>
                    <TextInput style={{backgroundColor:'#fff',height:30,textAlign:'center'}}
                      placeholder='Add a comment...' onChangeText={(text) => setCommentText(text)}
                    />
                    <TouchableOpacity>
                      <Icon name="emoji-happy" style={{color:'blue',position:'absolute',flex:1,bottom:15,left:10,fontSize:12}}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={setCommentTextFunc}>
                      <Text style={{color:'blue',position:'absolute',flex:1,bottom:7,right:10,fontSize:12}}>Post</Text>
                      
                    </TouchableOpacity>
                    <View>
                      <View style={{flex:1,flexDirection:'col',height:20}}>
                        {commentList.length > 0 ? commentList.map(comment => {
                        return(
                          <View  key={uuidv4()}>
                            <Text>{userToComment}: {comment}</Text>
                          </View>
                        )
                        
                      }) : ''}</View>
                    </View>
                    </View>
                    
                  </View>
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
        top: 380,
        alignSelf:'center',
        marginBottom:5,
    },
    commentSection:{
      flexDirection:'row',
      alignContent: 'center',
      marginTop:8,
      padding:3,
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