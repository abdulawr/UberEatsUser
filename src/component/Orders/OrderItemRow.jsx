import{
  View,
  Text,
  StyleSheet
} from 'react-native';

const OrderItemRow = () => {
    return (
        <View style={styles.container}>
            <View style={styles.qtry}>
                <Text style={{fontWeight:'500',fontSize:16}}>4</Text>
            </View>
             
             <Text numberOfLines={1} style={styles.titles}>
                Testing tile 
            </Text>

            <Text style={{fontWeight:'500',fontSize:15}}>$ 6.6</Text>
        </View>
    );
}
 
const styles = StyleSheet.create({
 container:{
    flexDirection:'row',
    paddingHorizontal:10,
    marginVertical:5,
    alignItems:'center'
 },
 qtry:{
    width:35,
    height:35,
    backgroundColor:'lightgrey',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10
 },
 titles:{
    flex:1,
    fontSize:15,
    paddingHorizontal:10,
    fontWeight:'500'
 }
});

export default OrderItemRow;