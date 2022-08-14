import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  TouchableOpacity
  } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { RectButton } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Ionicons } from '@expo/vector-icons'; 

const RestaurantRow = (props) => {
   const {item} = props;

   const renderLeftActions = (progress, dragX) => {

    const trans = dragX.interpolate({
      inputRange: [0, 50, 100, 101],
      outputRange: [-20, 0, 0, 1],
    });
    return (
      <View style={styles.swipableContainer}>
          <Ionicons name="albums-outline" size={40} color="black" />
          <Ionicons style={{marginVertical:8}} name="add-circle-outline" size={40} color="black" />
          <Ionicons name="arrow-forward-circle-outline" size={40} color="black" />
     </View>
    );
  };

    return (
        <GestureHandlerRootView>
        <Swipeable renderRightActions={renderLeftActions}>
           <TouchableOpacity onPress={()=> {console.log("Res click here")}}>
            <View  style={styles.restaurantContainer}>
            <Image style={styles.imgContainer} source={{uri:item.image}} />
                
                <View style={styles.bottomContainer}>
                        <View>
                        <Text style={styles.title}>{item.name}</Text>
                            <Text style={styles.subTitle}>
                                <Text style={{fontWeight:'bold'}}>${item.deliveryFee}</Text>   {item.minDeliveryTime} - {item.maxDeliveryTime}  minutes
                            </Text>
                        </View>
                        <Text style={styles.ratingTxt}>{parseFloat(item.rating)}</Text>
                </View>  
                </View>
            </TouchableOpacity>
        </Swipeable>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    restaurantContainer:{
      width:'100%',
      padding:10,
      backgroundColor:'#fafafa'
    },
    imgContainer:{
      width:'100%',
      aspectRatio: 6.8/4
    },
    title:{
      fontWeight:'500',
      fontSize:17,
      color:'black',
    },
    subTitle:{
     color:'gray'
    },
    ratingTxt:{
      backgroundColor:'#e9e9e9',
      width:45,
      height:25,
      borderRadius:15,
      textAlign:'center',
      textAlignVertical:'center',
    },
    bottomContainer:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      marginVertical:4
    },
    swipableContainer:{
        height:'74%',
        backgroundColor:'#AACB96',
        width:90,
        alignSelf:'baseline',
        marginTop:10,
        justifyContent:'center',
        alignItems:'center'
    }
  });
  
 
export default RestaurantRow;
