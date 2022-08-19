import {
    View,
    StyleSheet,
    Text,
    Image
  } from 'react-native';
  import { Octicons } from '@expo/vector-icons'; 
  import Colors from '../../config/Colors';
  import dishes from '../../../assets/data/restaurants.json';
  import { AntDesign } from '@expo/vector-icons'; 
  import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
  
  
  const Cart = () => {
  
      const restrant = dishes[0];
      const dishe = dishes[0].dishes[2];
      const [dispCount,setDishCount] = useState(1);
      const [price,setPrice] = useState(dishe.price);
      const navigation = useNavigation();
  
      const updateCount = (type) => {
          if(type == 1 && dispCount > 1){
              setDishCount(dispCount-1);
              calPrice("-");
          }
          else if(type == 2){
              setDishCount(dispCount+1);  
              calPrice("+");
          }
      }
  
      const calPrice = (sign) => {
         let disc = (sign == '+') ? dispCount+1 : dispCount-1;
         let pr = dishe.price;
         let result = pr * disc
         setPrice(result.toFixed(2));
      }
  
      return (
          <View style={styles.container}>
              <Octicons onPress={()=>navigation.goBack()} style={styles.icons} name="arrow-left" size={35} color="black" />
              <View style={styles.topSection}>
                  <Text style={styles.title}>{restrant.name}</Text>

                <Text style={styles.itemTitleColor}>Your Items</Text>

                <View style={styles.itemRow}>
                    <Text style={styles.cnts}>1</Text>
                    <Text numberOfLines={1} style={styles.itemname}>Title</Text>
                    <Text style={styles.itemPrice}>$18.90</Text>
                </View>

                <View style={styles.itemRow}>
                    <Text style={styles.cnts}>1</Text>
                    <Text numberOfLines={1} style={styles.itemname}>Title</Text>
                    <Text style={styles.itemPrice}>$18.90</Text>
                </View>

                <View style={styles.itemRow}>
                    <Text style={styles.cnts}>1</Text>
                    <Text numberOfLines={1} style={styles.itemname}>Title</Text>
                    <Text style={styles.itemPrice}>$18.90</Text>
                </View>

              </View>
  
             <View style={styles.priceRow}>
                <Text style={styles.subTotal}>Sub-total</Text>
                <Text style={styles.totalView}>$18.67</Text>
             </View>

             <View style={[styles.priceRow,{marginTop:8}]}>
                <Text style={styles.subTotal}>Total</Text>
                <Text style={styles.totalView}>$20.67</Text>
             </View>
              
              <View style={styles.bottomDesign}>
                   <Text style={styles.basketColor}>Next • 844.48$</Text>
              </View>
  
          </View>
      );
  }
  
  const styles = StyleSheet.create({
      container:{
         flex:1,
         paddingTop:45,
         backgroundColor:'#e8e8e8',
         paddingHorizontal:12
      },
      title:{
          fontWeight:'bold',
          fontSize:30,
          color:Colors.titleColor,
          marginBottom:23
      },
    
      topSection:{
          marginVertical:20,
          borderBottomWidth:2,
          borderBottomColor:'#d9d9d9',
          paddingBottom:20
      },
    
      counts:{
          fontSize:20,
          marginHorizontal:15
      },
      bottomDesign:{
          backgroundColor:Colors.titleColor,
          height:55,
          width:'100%',
          bottom:15,
          position:'absolute',
          alignSelf:'center',
          borderRadius:2,
          justifyContent:'center',
          alignItems:'center',
          flexDirection:'row'
      },
      basketColor:{
          color:'white',  
          alignSelf:'center',
          fontSize:16,
          fontWeight:'600'
      },
      priceText:{
          color:'white',
          position:'absolute',
          right:20,
          fontSize:16,
          fontSize:16,
          fontWeight:'600'
      },
      priceRow:{
        flexDirection:'row',
        justifyContent:'space-between'
      },
      subTotal:{
        fontSize:19,
        fontWeight:'bold',
        color:Colors.subColor
      },
      totalView:{
        fontSize:17,
        fontWeight:'bold',
        color:Colors.subColor
      },
      itemRow:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:8
      },
      cnts:{
        backgroundColor:'lightgrey',
        width:31,
        height:31,
        borderRadius:8,
        textAlign:'center',
        textAlignVertical:'center',
        fontWeight:'bold',
        marginRight:10,
      },
      itemname:{
        flex:1,
        fontSize:17,
        fontWeight:'bold',
        color:Colors.subColor
      },
      itemPrice:{
        fontWeight:'bold',
        right:'auto',
        fontSize:16,
        marginLeft:'auto',
        paddingLeft:20
      },
      itemTitleColor:{
        fontWeight:'500',
        fontSize:20,
        marginBottom:10
      }
  })
   
  export default Cart;