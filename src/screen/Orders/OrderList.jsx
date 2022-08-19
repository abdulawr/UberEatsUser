import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';
import {FlashList} from '@shopify/flash-list';
import orders from '../../../assets/data/orders.json';
import Colors from '../../config/Colors';
import { useState } from 'react';
import OrderRow from '../../component/Orders/OrderRow';
import { useNavigation } from '@react-navigation/native';


const OrderList = () => {

    const [order,setOrder] = useState(orders);
    const navigation = useNavigation();
    const viewOrder = () => {
      navigation.navigate("OrderDetails");
    }

    return (
        <View style={styles.container}>
            <Text style={styles.pageTitle}>Your Orders</Text>

          <FlashList 
                data={order}
                renderItem={({item}) => {
                   return <OrderRow viewOrder={viewOrder} item={item} />;
                }}
                estimatedItemSize={order.length}
          />

        </View>
    );
}
 
const styles = StyleSheet.create({
 container:{
    flex:1,
    paddingTop:50,
 },
 pageTitle:{
    fontSize:30,
    fontWeight:'bold',
    textAlign:'center',
    color:Colors.titleColor,
    marginBottom:15
 },

});

export default OrderList;