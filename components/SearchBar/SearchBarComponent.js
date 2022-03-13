import { SafeAreaView, StyleSheet, Text, View,ScrollView ,FlatList,Image,Dimensions} from 'react-native'
import React ,{useState,useEffect, useRef} from 'react'
import { Searchbar } from 'react-native-paper';
import { createServer } from "miragejs";
// Overlayı daha sonradan modal olarak açılacak arama tabı ve görseller için ekliyorum
import { Overlay } from 'react-native-elements'

import { posts } from '../../public/MockAPI';
import { Video, AVPlaybackStatus } from 'expo-av';


const {width} = Dimensions.get("window") 
const height = width * 0.3

// mirage js API servisi MOCK API için postu burada çekiyorum.
window.server = createServer({
    routes() {
      this.get("http://localhost:19000/api/posts", () => {
        return {
          posts
        }
      })
    },
  })

const SearchBarComponent = ( ) => {

  // usestate yapılarında posts gerekli veri ypaısı
  // search data ise comment ile yapılmış yapılar

  const [posts, setPosts] = useState([])
  const [searchData,setSearchData] = useState('')

  const video = useRef(null);
  const [status, setStatus] = useState({});

  const onChangeSearch = (event) => {
    setSearchData(event)
  } 


   // fetch API useeffect ile kullanılarak sayfa açılışında veri çekiliyor.

  useEffect(() => {
    fetch("/api/posts",{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
    .then((res) => res.json())
    .then((json) => setPosts(json.posts))

  },[]);


  // Slide için gerekli yapı ve scoll

 

  const changeScrollColor = ({nativeEvent}) => {
    const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width)
    if(slide !== active){
        setActive(slide)
    }
}

 // Aşağıda gerekli 2 görsel ve bir video içeren bir container oluşturdum ve return ettim.

 // search işlemini modal ile yaparak recursive bir şekilde text girişi ve sayfa oluşturması işlemini çözmeye çalıştım.
  return (
    <SafeAreaView>
      <Searchbar style={styles.searchBar}
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchData}
      />
      {
        posts.map(post => {
          if(post.profile_name.substring(0,searchData.length).toLowerCase() == (searchData.substring(0,searchData.length).toLowerCase()) &&
          searchData.length > 0)
          { 
            // burada yine Overlay kullanarak daha önce yer alan post mapping işlemi yapılmıştır.
            return(
              <Overlay  key={post.id} >
                <Searchbar style={styles.searchBarModal}
                  placeholder="Search"
                  onChangeText={onChangeSearch}
                  value={searchData}
                />
                <ScrollView paddingEnabled horizontal 
              showsHorizontalScrollIndicator={false}
              onScroll={changeScrollColor}  >
                <View style={styles.container}>
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
                  
                </View>
                  
                </ScrollView>
              </Overlay>
            )
          }
          else{
            <Text>No Result</Text>
          }
        })
      }
    </SafeAreaView>
  )

}

export default SearchBarComponent

const styles = StyleSheet.create({
    container: {
      flex: 1,
      opacity: 1,
      backgroundColor: 'black',
      width: width,
      zIndex:10000
    },
    OverlayContainer:{
      flex:2,
      alignContent:'center',
      justifyContent:'center',
      width:100,
      height:100,
    },
    searchInput:{
        width:'100%',
        height: '100%',
        paddingLeft: 8,
        fontSize: 16,
        zIndex:100
    },
    searchBar:{
      width: (Dimensions.get('window').width+50) / 3,
      height:30,
      fontSize: 2,
    },
    searchBarModal:{
      width: '90%',
      height:30,
      zIndex:100,
      fontSize: 2
    },
    video: {
      position: 'absolute',
      width,
      height,
      zIndex:100
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
      zIndex:100,
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
      width:'100%',
  },
  scroll:{
      width: 100,
      height: 300,

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
      paddingBottom:20,
      zIndex:100
  },
  pagination:{
      flexDirection:'row',
      position:'absolute',
      bottom:100,
      alignSelf:'center',
      zIndex:100
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
