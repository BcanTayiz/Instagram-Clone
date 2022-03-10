import { StyleSheet, Text, View,Image,TouchableOpacity,SafeAreaView,Picker} from 'react-native'
import React,{useState} from 'react'
import { Searchbar } from 'react-native-paper';

import SearchBarComponent from './SearchBar/SearchBarComponent';

const Header = ({navigation,user}) => {

  const [selectedValue, setSelectedValue] = useState("logout")

  
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = (text)  => {
    console.log(text)
  }

  const showSearchContent = () => {
    navigation.navigate('Search')
  }

  return (
    <SafeAreaView>
        <View style={styles.headContainer}>
            <Image style={{width:80,height:35,resizeMode: 'stretch'}}
            source={{uri:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXgAAACGCAMAAADgrGFJAAAAkFBMVEX///8mJiYAAAAjIyMfHx8VFRUdHR0YGBgaGhoNDQ0TExMQEBAKCgoUFBQFBQXk5OTU1NTt7e3IyMioqKjq6ur4+Pi1tbWRkZG3t7fDw8OcnJyDg4PQ0NB2dna/v79UVFRoaGhfX1+Xl5dCQkItLS2Li4tvb2+kpKQ7OztNTU3d3d1JSUl+fn5jY2MxMTE9PT1GAyKxAAATjklEQVR4nO1d6WLiuLIGCYwNjoGwBwgkQCB0lvd/u6utFskioXviOc0d169AZJX0qVSbSqbRqKmmmmqqqaaaaqqppppqqqmmmmqqqaaaaqqppppqqqmmmmqqqab/V3R+fBxMKuWwWPQr7f8mabETeS7E5rE6Fp+iEMV2OqyOw+1R/1W0mppa4qMqqewLzSDJxHZcEYfbowcHu4W+IlxWwnFI82oY3B5tRJNRNqqGyyIHDkU1DG6NhvvUSDrA0jtWw2eeOQZyXw2DG6Nxz0BePAHy3YqAH/UA+F01DG6LxrnUYIjBEPRN96EaTscuWJHXahjcFE1aDvcGAn/3XA2rBwT+qRoGN0W7xOA+bRDw7YqAf247BslLNQxuidZGCjvrxr8A/KED7uS6GgY3RI8GbJnovwn4WTXMlgj8WzUMbocmFmth0gTjqoF/Sx2DzqEaBrdDW+vA/zIfKgd+DcBXpctuhlwML1bmU0XAj54fRtP54n513lYdKNwM7QwS8tN+qgb4e9Hu9npZUQhKB8n96/v6MFML8ng/+A8mzO4t0tnUfqwG+FfKvhHJVpJ21IJkuVqPotozgL+QHCbCfawE+ImI4O6TOP8cu5ugs8UEo5lKgF9dAfx/7WDExTM5HDn1qwD+Mb+MuFM7zZ/jdhvUlr7AVQL8QPS6d+1OJ00TX9lLRy1RUUrur6WBxVl+wBcI/I/GN/PR8WF2OCzXL0+EfKfbSWRzv99/fL5Wlrf5WzXY853BgML3SiSe0RnVfXFfCQNOo50Q4umvdFU3VgDpuCkGfP8c9fXOXzgi0yc15VMkNh0g8GIQfXJy3ORCNF+m3459MnrKhJDbiy1fhdaj6fd2uz/7pYb78faFKPSDTs5lTPq/Ux/gYCgW+HQZ+Gc1qP0hQHmlkRVvcV6LTq4XVOblsw4GfHTdZsIchckkb5sxTR9G93HgnrFlMTdMH0YLr+XWZf7vvlGak60wlk6m4qTHNDk+jFYBrB9C5O9HFJWzkg2xO/JG/b366mXRuI4gF0kgRIDXall2xI6D/GIj0FSsI5thJiSAW5IhBnxk0YYnOJFVLMVSgSe6vULsykI92eWs5brReDMtP+mIHn3Yb466BiLFnlr6SCLLuz2lofjQjYJMuqLlVjY1C9UTbFxdDUgikusSIaBxqZbjHAde28INzfp0hxZSlGqfHshr75VKFRjwZUEepp7To/AUDo9N0HLSTHjL7N21lLkESdhCC5f+u0D3KCWW56gPPNlGgVH37HfPcG4sUJkencTI/OMam4LAD8NvysC3aPInkhElbnO/zwGLlr4EvrxX9kFmQRxhgUO9dEr8lsXzHlquXBNklGwd69H6dRdahL6Pu+YJR2SCWsGo3eFNQa1hXE3spnVN9qN/DfCbEPinTpNTgOAHm0nZgH4F/LvfryL8ItBL6+7llo4lhuDNzvN4cVyfhOilLZkIv7hhLy/2lJVHbYEfkT4ElO6ZtHWv8Acn16iaEPhjkAAoPGWzYP+VWSMkyh6I8F9z/JfsKkN1x3n4dW0sBdFSZq7gGwVkkPxWpQ6LbooAZ9zWLnEFpfKQmLbXj5UZWuBPtFjJu23wwnYgfPclSemN9kvgXVUAiFIP2Pv6hA8hEgtcBn6Cm76VHfuT/gNXAr5BoE1VvD6Oh/ebjLXsQ3fNC8QY0+q0T/PxcLDkUtOKAK/jHa5LnTR6zK46xXcHcTm6Qd8D7z6KKUw/89Rm7yJcAfBh6eQBdGvrZJXQOJHxnqaoY4XzIZaEPCqlaCratCAdt4E2PQcWUxm80u2+YMAvmUZ0wDPlc+VhsmN0h6mSb4F3TyiTCsDn3LoOv1F2MAVPoDSh0MgWAMO0hWcQUC8XOOxfiDIqpcElkSeJxyYJ1viM0EuVp/KoDaYF68u5qt4iX5dsseiR4RyUgX/1gP80D+Tqvy03/4JHDQx42Y7wI+A//H9goRPz/fF81tNLKJXMz2IaDPcG2KJeZo5aZJnxC/TP1hVXlZcYLhjw3I42pXFVrfYF8K9LtjwKn/N3wFvbaRYaZAMdOENMSmNhHAEflE7ChBmaTOQ58Oigc1dHYsxGGFpntDudzh8Xq/OrJPAs4Sbj5YpY28njLihx1s8aaZBuGvbE9Kifab24B++uy7Q+mVVHA/kF8MZY2z1txApa+j4j7rpuVNUh8EE8iRh7wS56x6ykG+EC/9zQW0R4Z1oZo6n7LJmkaVZ+htxQXmL4yIDX/1e7hqd1DShi7LorBy9Rmkib8XAfvwHe/luMOAB+cANOoYwH6gS8H4w+OO9Rdvi3COcdYxDdaTEQDdSw7yLDfU8iK4iLfQF4MwElHQ54fYBj1KsSJFBtV94sGHY0sD0X/EaA/2VHYtxTs89aRkugNg+Cm08n8u0o/wUC79eswkbxXQLY99wSg+L3TQiOm5SSGSAu5KrcAL7x3bJtZDnmBLxmr5MQbh66e7PoKpoRse6+oOFJT895A18Db8XG6hbck8GlnTF4WyIWSCDwQZgBneVeNAb7g7t2YNP92stxGVezajgNMN604IO45EBVbcrccbhNkS4bTuAb7hvtFOulUgsMeyoLcihf0EF0ZHtp/lyVgd9JlADjrzpRwDxm6K2/g5ZPW+XML97E8cOMc3wVgQfzRMZxOZ2UgX9t8f4gsKMCNjSjfnw9dV/zvYfAHzQ+RgxckKHZCQsXDCH/jSuT42XXxSIR4D8JeGtF+gFWftKF+c9SlJKkCLwvsHhBx49nQZ1BuVWDbZlAw5WANytEDvpHyfmFQCiwNqDPO0v6DixIOlum7tjI9acmbyBTo0Hgr03KW3LoEfAoGQS8mQtswYhWNaQXB0POkrrBggNfmcP+DpxMmIukzC7eKAnYFuHXRreQAS5vqU3UrDRWoL1ZHATAJ0vThd7iO6wS0MenetwgJX92phkB3uWElG4wrgd4BavSVA3p+EJ+Yk4qbfrq5gLwEMqEeQ43GuZ7gpzywFITrAdmIvTq005BxUh6BcQj8LtBoGLAN3W0Ya0EZE765i9dCPrjwH8g8IYtbExUGn7SRS+TGPRzDACFp4sReL6TyakJw20AnlwgcDpawV4CaABYE2DSKc2qvIRxY4HA8wB0ynMxtr0bhxJDw2hcHfDp2mh1DHBALWMIYIeo2qRbpWElZU84mJgZ8CHuuHUKS4jLwKPfuYy2bPbcZ3NgSc4Qamk0LWiOA52MwLOjeg94a9NciFGsNCpm+01+Bni6fOaC+fRNR4JShoPxi8C0s2d04OSDEi1Mq2A+0Af+gvTBXJh4Q2ohvByH4b/9aFQLOxyDBafHyAH1T2tWMeDBAWrinnEleNmjxsHsjp8CHjWfm2prrU/XKK2BwQ3PdunTyMw12dGpEM6BEtce8CR9visGu5c5/QBBcAEae3BhlY5z+Mjg6lUPV5a8Mt8KgdvEV3bEgHcIOCPfG+mejQ3/Z8BjSE8Io49iInB02kGGuJXTQNF0Xwl5cC5oz3o5PIyCC3/bn8vAw/iCwBx7sJHq2NfwlHyglb0EPKjQu1jmrIkbxM2k86B1mvUvfhp4TPw1PZ93Bh4gA147JyyFsoM8IiooyptfAN4fNOw/Fr5/YxId8Caw564pxE/E4BLw4K9GU5ZNdOLcxkje9ljH8Gd+vCMCHrdyiwHPpnso+3V69inzNiZgM5v5yIcnAL5/QeLRf6ZOLwBP3hL25yXRwBmiLy8BD/O6IPEwFJiK7tepTdfodyJXIgSedGjKgGdRagR4favHSyCgxXCNNnRS4wGPsAWDhriKeTUXVA1kNy3wevv7ySAEHi1p/4JxhbLadlzHw0agKgYctXP/rk6SeXRfnlibOPDouhzJaFcy86MRPPo2AeNCNNHV8YzrEr4OBo1OO/EFMeheYNRpuNMaP4X0UpJ4yq56BzmQhPEkgwEPuoqfb7vshdOjXCSuv2AUAZ7pN94ngIXGdJLJ0rtQUKyM4ktkeojeL0aVFMAJILCUAZxnBKEW6kMNvHYDMt/dhGQyMyJxT4qsNGMwI+HDFFGHFIFT+05M2BwexbZxJSHwJHu8doLlDlHiwY9/azfLxZIupWGW7KWjVBUgxNPddGLqh0W4bMwxhNynf3rBypesTxse6cKCM5RTNjQiymmwobDDbEyQ7BB4qBF0nhNbMRW3X1ugHwGeTtW92WCVgztqOLuY1acZ+M+jxkjouBHUPBNiPAoKM4UYt8i0xNZHltzU1FnWoIYNfBWG8iaapsADdpY24moFEyRUQASb1znYlMhXI7n6Uh0Bj1EfcfWGiErDycBJhnpVE2jHfKGTJ2rHoDqnY9Q+V5f8Ybo+IkodXmqZGlXbCxIKlOylKcTTwriC7Gt2h4vSp6R+wAF051QkUiokiNVERwmBpz1JsHheNr7/xKJ96JUsqybAKZ2pbvRhCwGHauspIZvLJYSVilBjWm9mE5lI7h+ysqKhxWVwRpcQ0/3cXNGOZP4VHiEgVFgCDE2U7ikVKl4iZEweNZs+N9I0br2rFyI2XVI1GlqZT5j7jCurHr07Qmc8S8ZNGqKMdS/c3XtgRaydZsk157MgJFCpcLW0iWhzXqRFCojVngx8Hsg9kTFI4rQon+EjA78iA1dcIzAgvdr/dWI+4ScPAoz2gpWFPOGkJ9UcIaRlZ01GjMOsJYVg3IFq+zW/5YMvklqaF+oPZkYHjCdqiQOr2WPOGAEP29HZWxisWprr3w2D6oyEBhn479tgrsjiWf9tq/b7oiXp3IlfLXYx7TqogFFRV/eZ7R8ERr9VRLpTGNzhbNdTwdSShRqKOrFTdswLAxRzUty0kzW7ZOcHQlzguY3A9AduDad9IbJRRuT6YIoOP9FO4nr7iRQWuuWaYcuyM5cL0pZtOqFDQKyJxBI4I/LDXWomTqWTEI+ZCrwuSLgbjv6ICSDYxnMmps1Ll5XpNNxNTOksPCaDJP36TluB+9xbbGWCqHMWVj1DsAxHAKTk74Hj9RfWp+VTZ9SqQS9cEJqw4Y7OsovX6fk8YkGGxJ2LSbd8vZjpu1SFdvFQattbOy2XUIeqRYPNRD3bpVcNWckemZNgKlq/4EiAE5NY8/p212whoO5+8zo3j088Xf0glCuDnbPoCEsg8IgCdI2VMbVgX98C8giz7JSB+SVLDAwxO4SrTKvUyoTocdxRhVBBbmq3ivHQyDFpn6b3I3MLTa8B4FUsh42V2k5qBVCjd07T1fzV4P40R111ITlIlZJP/cb5PVN8mX18elwdpbHLRwxBZet+MjxouV2gB8ON/9IJGVVbLXAtRtNXNbfi+rQN+Aes+iJe6ea7Eraqz3fJOUnu/H0EptDapimZzV5hlizVi48arSNMxa9SSwvWUmR6+Vt71JGX35eJDBLVU2J8gSWmQ1p50dU8M+21wILIQoiOvq9Jat4Lc5/sRVpm5TcOK9nVd0FDUf2KwIVjDOCr8F1WPD8H7yIYxoFvN/n2P3uNMMuwDl410bEXFJ791tozOgRc0uYQbeUXjvNb4fWkp/Mr9XtyuZUZb6nC5gvA26vjGza3oXeXrXwj8ovBuZEwRQmeSclCb2HUUuBw5iKYSlPfXAzedDjnS0a9vnA8yTXiXwtr2978xdhMyA+OXCakyfGe7Jh2LAWoeILp3DLktZeMD5bq8wJ2Z4Z8/jsveHSxt+f4u7uNQfpUL6/Lg6YsAhlvRZcrf9kWm1I4sxBOc6deVu0IXzdlRoejjZlIoDVo2JEAW6y0jaldBvv3FfBK2zj7kOAx8Bt0ruTjRPM4wNeJGSGuT/nKdED9vatskeK33oyx92MAQ8OmyHu9vOwajU8i6wkR3IAYHzdCPdDudNq9QjRnsTTR8E2oR3OxHUa+Vk+dvB193ooiU8Z6S9tQGT3b8sNcbB9KTPx/6cBNDrl6rBBPNCjVufoqC38m4vwuCj1p+w6KiR1YLq54BfhRmv7k9bWrmkRUbgbz0XEeE6XBdBQVgf5iNFseni+9h0DTajqaR/6reow8NbmfTsP3C6hBjRbWMJ8zSqd95zmrx/x3HjQmaiil3jXP0eiRWg6mx9E8/uKLkM7z0fS6lvSIBb59Wy/jHDDFWtUvPVRM1o2Xt/VOvIV3I/Y2gbehQ/h6gr+brH+OQeht/taRmUN+U69bti8LSX7tbxl4k8Aqtv/rYfwO2WAq+YBiiNsE/tBR7udNGdY3h/sEzuxu882hr5nYh2HSX00vJsJs7Sd4rnGbwD++VfhbcxXQi0HbZmGLWwb+xsim1aT1IMMDz5oqo2XBoRa3bFxvitxL5yD36p8R1lQZubPbAtKMYVFLTdWQO5tIoUDJnez5L6Go6efJ1pHKLmSV3ELUvyBYMbkDVBG+TK3+PbWKyRYw0KsKoOjzP/8jRxWTe+0dywG7gqA/u4BU07VkT1j5K2VcLUTtxldKzpLyMl97U6R2aqol68N7F67S0h6o6efJlo3xW0quuiq/qbOz2yNrSXmFlbOtX1bV1PSPyVbx87JxW+BZe/EVk42WmOsYsbY1VUFG4jtUwmZfxZ2Ev2hR00+TqZqnV366fEGdEq6crGqBN4UM7M2TS1cSavpBskmyzmne7y+2tpJMXPlO35r+EdlfstC/7JEn9uT1j95WUtNv0yLjV6zyj/qQ+9+iyXMq7hL9o6Rt0arVzL9Kq+f3U2v/NLupIqyaaqqppppqqqmmmmqqqaaaaqqpppr+Avo/HBIeBTR3ceYAAAAASUVORK5CYII='}}
            />
            
        {/* Buraya Search Bar Eklenecek */}

        <SearchBarComponent />

        {/* Buraya Search Bar Eklenecek */}
            <View style={styles.rightHeaderContainer}>
                <TouchableOpacity>
                <Image style={styles.ImageStyle}
                source={{uri:'data:image/png;base64,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'}}
                />
                </TouchableOpacity>
                <TouchableOpacity>
                <Image style={styles.ImageStyle}
                source={{uri:'https://i.pinimg.com/474x/0e/91/59/0e91595c9c783093fea761027c9bbbf4.jpg'}}
                />
                </TouchableOpacity>
                <TouchableOpacity>
                <Image style={styles.ImageStyle}
                source={{uri:'https://icons-for-free.com/iconfiles/png/512/add+photo+plus+upload+icon-1320184027779532643.png'}}
                />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => showSearchContent() }>
                <Image style={styles.ImageStyle}
                source={{uri:'https://cdn2.iconfinder.com/data/icons/instagram-outline/19/18-512.png'}}
                />
                </TouchableOpacity>
                <TouchableOpacity>
                <Image style={styles.ImageStyle}
                source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ10WLEotika63bHzUxLTtfoE3sNStE3TMSg&usqp=CAU'}}
                />
                </TouchableOpacity>
                <TouchableOpacity>
              
                <Image style={styles.ImageStyle}
                  source={{uri:'https://miro.medium.com/max/512/1*7tlP1ph61ompULJdycVJlQ.png'}}
                  />
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default Header

const styles = StyleSheet.create({
    headContainer:{
        flex:1,
        flexDirection:'row',
        height:200,
        width:'100%',
        backgroundColor:'#fff', 
        zIndex:100
    },
    rightHeaderContainer:{
        flex:1,
        flexDirection:'row',
        height:30,
        width:500,
        backgroundColor:'#fff', 
        alignItems:'center',
        justifyContent:'center',
        zIndex:100
    },
    ImageStyle:{
        width:23,
        height:23,
        resizeMode: 'stretch',
        alignItems:'center',
        justifyContent:'center',
        zIndex:100
    }
})