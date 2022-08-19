import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RestaurantDetailsScreen from '../screen/RestaurantScreen/RestaurantDetailsScreen';
import BottomNavigationContainer from '../screen/BottomNavigation/Index';
import OrderDetails from '../screen/Orders/OrderDetails';
import Cart from '../screen/CartScreen/Cart';
import RestaurantMenuDetails from '../screen/RestaurantScreen/RestaurantMenuDetails';
import HomeScreen from '../screen/HomeScreen/Index';
import OrderList from '../screen/Orders/OrderList';


const Navigation = () => {

    const Stack = createNativeStackNavigator();

    return (
      <NavigationContainer>
         <Stack.Navigator initialRouteName='BottomNavigationContainer'>
              <Stack.Screen options={{headerShown:false}} name='BottomNavigationContainer' component={BottomNavigationContainer} /> 
              <Stack.Screen options={{headerShown:false}} name='Cart' component={Cart} /> 
              <Stack.Screen options={{headerShown:false}} name='RestaurantMenuDetails' component={RestaurantMenuDetails} /> 
         </Stack.Navigator>
      </NavigationContainer>
    );
}

export const HomeNavigator = () => {
  const Stack = createNativeStackNavigator();
 
   return (
      <Stack.Navigator initialRouteName='HomeScreen'>
         <Stack.Screen options={{headerShown:false}} name='HomeScreen' component={HomeScreen} /> 
         <Stack.Screen options={{headerShown:false}} name='RestaurantDetailsScreen' component={RestaurantDetailsScreen} /> 
      </Stack.Navigator>
   ) 
}


export const OrderNavigator = () => {
  const Stack = createNativeStackNavigator();
 
   return (
      <Stack.Navigator initialRouteName='OrderList'>
         <Stack.Screen options={{headerShown:false}} name='OrderList' component={OrderList} /> 
         <Stack.Screen options={{headerShown:false}} name='OrderDetails' component={OrderDetails} /> 
      </Stack.Navigator>
   ) 
}
 
export default Navigation;