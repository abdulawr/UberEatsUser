import{
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';
import data from '../../../assets/data/restaurants.json';
import { Ionicons } from '@expo/vector-icons'; 
import Colors from '../../config/Colors';
import MenuRow from '../../component/Restaurant/RestaurantDetail/MenuRow';
import {FlashList} from "@shopify/flash-list";
import { useNavigation,useRoute  } from '@react-navigation/native';
import { useLayoutEffect } from 'react';

const RestaurantDetailsScreen = (props) => {
    const navigation = useNavigation();
    const record = data[0];
    const dishes = record.dishes;

    const viewDishDetails = () => {
       navigation.navigate("RestaurantMenuDetails");
    }

    // useLayoutEffect(() => {
    //     navigation.getParent().getParent().setOptions({headerShown: false});
    //   }, [navigation]);

    let Header =  <View style={styles.container}>
                    <Image style={styles.topImage} source={{uri:record.image}} />
                    <View style={styles.borderBtm}>
                        <Text style={styles.title}>{record.name}</Text>
                        <View style={{flexDirection:'row',marginHorizontal:10}}>
                            <Text>$ {record.deliveryFee}</Text>

                            <View style={{flexDirection:'row',marginLeft:15}}>
                                <Text style={{marginRight:3}}>{record.rating}</Text>
                                <Ionicons name="star" size={18} color="orange" />
                            </View>
                        </View>
                    </View>

                     <Text style={styles.menu}>Menu</Text>

                    </View>;

    return (
        <View style={styles.container}>
            <Ionicons onPress={()=>navigation.goBack()} style={styles.backBtn} name="arrow-back-circle" size={45} color="white" />
           
          <View style={styles.menuContainer}>
           
              <FlashList 
                ListHeaderComponent={Header}
                showsVerticalScrollIndicator={false}
                data={dishes}
                estimatedItemSize={dishes.length}
                renderItem={({item}) => {
                          return <MenuRow viewDishDetails={viewDishDetails} item={item} />
                }}
              />

          </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    topImage:{
        width:'100%',
        aspectRatio:5/3
    },
    backBtn:{
        position:'absolute',
        top:30,
        zIndex:100,
        left:10
    },
    title:{
        fontSize:27,
        fontWeight:'600',
        margin:10,
        color:Colors.titleColor
    },
    borderBtm:{
        borderBottomColor: Colors.boderColor,
        borderBottomWidth:1.5,
        paddingBottom:10
    },
    menu:{
        color:Colors.subColor,
        fontWeight:'400',
        fontSize:20,
        paddingVertical:9,
        paddingHorizontal:12
    },
    menuContainer:{
        width:'100%',
        flex:1
    },
})
 
export default RestaurantDetailsScreen;