import {
 Text,
 View,
 StyleSheet,
 Image,
 Pressable
} from 'react-native';
import Colors from '../../../config/Colors';

const MenuRow = (props) => {
    const {item} = props;

    let itemImage = require("../../../../assets/images/no-image.jpg")
    if(item.image != undefined){
      itemImage = {uri:item.image};
    }

    return (
            <Pressable onPress={props.viewDishDetails} style={styles.itemContainer}>
              
            
                <View style={{flex:1}}> 
                    <Text numberOfLines={1} style={styles.itemTitle}>{item.name}</Text>
                    <Text numberOfLines={2} style={styles.itemsubTitle}>{item.description}</Text>
                    <Text style={styles.itemPrice}>$ {item.price}</Text>
                </View>

                <Image style={styles.itemImg} source={itemImage} />

                
            </Pressable>
    );
}

const styles = StyleSheet.create({
    itemContainer:{
        flex:1,
        paddingVertical:10,
        borderBottomColor:Colors.boderColor,
        borderBottomWidth:1,
        flexDirection:'row',
        alignItems:'center',
        overflow:'hidden',
        marginHorizontal:12
    },
    itemTitle:{
        color:Colors.titleColor,
        fontWeight:'bold',
        width:'100%',
        fontSize:19,
    },
    itemsubTitle:{
        color:Colors.subColor,
        fontSize:14,
        flex:1
    },
    itemPrice:{
        fontSize:13,
        color:Colors.titleColor,
        fontWeight:'bold'
    },

    itemImg:{
        width:70,
        height:70,
        alignSelf:'flex-end',
        borderRadius:10,
        marginLeft:13,
    }
});
 
export default MenuRow;