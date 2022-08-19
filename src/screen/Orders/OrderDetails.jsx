import {
    View,
    Text,
    StyleSheet,
    Image,
} from 'react-native';
import order from '../../../assets/data/orders.json';
import {FlashList} from '@shopify/flash-list';
import data11 from '../../../assets/data/restaurants.json';
import OrderItemRow from '../../component/Orders/OrderItemRow';


const ViewOrders = () => {

    const data = order[0];
    const dishes = data11[0].dishes;

    const Header = <View>
           <Image style={styles.topImage} source={{uri:data.Restaurant.image}} />
             <Text style={styles.title}>{data.Restaurant.name}</Text>

             <Text style={styles.subTitle}>
                <Text style={{fontWeight:'500'}}>{data.status} &#8226; </Text> 
                3 days ago
             </Text>

            <Text style={styles.yourOrders}>Your orders</Text>
    </View>
    
    return (
        <View style={styles.container}>
             
            <FlashList 
                ListHeaderComponent={Header}
                showsVerticalScrollIndicator={false}
                data={dishes}
                estimatedItemSize={dishes.length}
                renderItem={({item}) => {
                          return <OrderItemRow item={item} />
                }}
              />

        </View>
    );
}
 
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    topImage:{
        width:'100%',
        aspectRatio:5/3
    },
    title:{
        fontSize:28,
        padding:10,
    },
    subTitle:{
        fontSize:14,
        paddingHorizontal:10
    },
    yourOrders:{
        fontSize:20,
        fontWeight:'bold',
        paddingHorizontal:10,
        marginTop:10,
        marginBottom:10
    }
})
export default ViewOrders;