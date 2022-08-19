import {
    View,
    Text,
    StyleSheet,
    Image,
    Pressable
} from 'react-native';
import Colors from '../../config/Colors';

const OrderRow = (props) => {
    
    const {item} = props;

    return (
           <Pressable onPress={props.viewOrder} style={styles.orderContainer}>
               <Image style={styles.rowImage} source={{uri:item.Restaurant.image}}/>
               <View style={styles.contentContainer}>
                   <Text numberOfLines={1} style={styles.orderTitle}>{item.Restaurant.name}</Text>
                   <Text style={styles.secondTitle} numberOfLines={1}>3 item 33.56$</Text>
                   <Text style={styles.thirdTitle} numberOfLines={1}>2 days ago &#8226; {item.status}</Text>
               </View>
           </Pressable>
    );
}
 
const styles = StyleSheet.create({
orderContainer:{
   marginHorizontal:11,
   paddingVertical:8,
   borderBottomWidth:1.5,
   borderBottomColor:Colors.boderColor,
   flexDirection:'row'
 },
 rowImage:{
  height:73,
  width:73,
  borderRadius:4
 },
 contentContainer:{
    paddingLeft:10
 },
 orderTitle:{
    width:'86%',
    fontSize:20,
    fontWeight:'bold',
    color:Colors.titleColor,
    paddingRight:10,
 },
 secondTitle:{
    color:Colors.subColor,
     fontSize:16
 },
 thirdTitle:{
    color:Colors.subColor,
     fontSize:15
 }

});

export default OrderRow;