import {
  View,
  StyleSheet,
  Text,
  Image,
  Pressable
} from 'react-native';
import { Octicons } from '@expo/vector-icons'; 
import Colors from '../../config/Colors';
import dishes from '../../../assets/data/restaurants.json';
import { AntDesign } from '@expo/vector-icons'; 
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';


const RestaurantMenuDetails = () => {

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
                <Text style={styles.title}>{dishe.name}</Text>
                <Text style={styles.subTitle}>{dishe.description}</Text>
            </View>

             <View style={styles.requestContainer}>
                <AntDesign onPress={()=> updateCount(1)} name="minuscircleo" size={50} color="black" />
                <Text style={styles.counts}>{dispCount}</Text>
                <AntDesign onPress={()=> updateCount(2)} name="pluscircleo" size={50} color="black" />
            </View>

            <Pressable onPress={()=> navigation.navigate("Cart")} style={styles.bottomDesign}>
                 <Text style={styles.basketColor}>Add {dispCount} basket</Text>
                 <Text style={styles.priceText}>$ {price}</Text>
            </Pressable>

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
        fontSize:25,
        color:Colors.titleColor
    },
    subTitle:{
        fontSize:15,
        color:Colors.subColor,
        paddingVertical:8
    },
    topSection:{
        marginVertical:25,
        borderBottomWidth:2,
        borderBottomColor:'#d9d9d9',
        paddingBottom:20
    },
    requestContainer:{
        flexDirection:'row',
        alignItems:'center',
        alignSelf:'center'
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
    }
})
 
export default RestaurantMenuDetails;