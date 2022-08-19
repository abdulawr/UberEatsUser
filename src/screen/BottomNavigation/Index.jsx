import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Index from '../HomeScreen/Index';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import OrderList from '../Orders/OrderList';
import Profile from '../Profile/Profile';
import { HomeNavigator,OrderNavigator } from '../../navigation/Navigation';

const Tab = createMaterialBottomTabNavigator();

const BottomNavigationContainer = () => {
    return (
        <Tab.Navigator 
            initialRouteName="Home"
            barStyle={{ backgroundColor: '#fff' }}
            >
                
               <Tab.Screen
                 options={{
                    tabBarIcon:({color,focused})=>{
                       return <MaterialCommunityIcons name={(focused == true) ? "home-variant" : "home-variant-outline"} size={24} color={color} /> 
                    },
                    title:"Home",
                    headerShown:false
                 }}
                 name='Home' component={HomeNavigator} 
                />

               <Tab.Screen
                options={{
                    tabBarIcon:({color,focused})=>{
                       return <MaterialCommunityIcons name='format-list-text' size={24} color={color} /> 
                    },
                    title:"Orders"
                 }}
                name='Order' component={OrderNavigator} />

               <Tab.Screen
                 options={{
                    tabBarIcon:({color,focused})=>{
                       return <FontAwesome name={(focused == true) ? "user" : "user-o"} size={24} color={color} /> 
                    },
                    title:"Profile"
                 }}
                name='Profile' component={Profile} />

        </Tab.Navigator>
    );
}
 
export default BottomNavigationContainer;