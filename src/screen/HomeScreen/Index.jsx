import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet,
  RefreshControl
} from 'react-native';
import RestaurantRow from '../../component/Restaurant/RestaurantRow';
import dumyData from '../../../assets/data/restaurants.json';
import { FlashList } from "@shopify/flash-list";
import { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function Index(props) {

  const {navigation} = props;
 
  // useLayoutEffect(() => {
  //   navigation.getParent().setOptions({headerShown: true});
  // }, [navigation]);
  
  const [refreshing,setRefreshing] = useState(false);
  const onRefresh = () => {
    setRefreshing(true);
        setTimeout(()=>{
        setRefreshing(false);
    },3000);
  }

      const openResDetails = () => {
         navigation.navigate("RestaurantDetailsScreen");
      }
  
  return (
        <SafeAreaProvider style={{flex:1}}>
        <FlashList
            data={dumyData}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => {
                return <RestaurantRow openResDetails={openResDetails} item={item} />
            }}
            estimatedItemSize={dumyData.length}
            refreshing={true}

            refreshControl={
                <RefreshControl
                  size='large'
                  refreshing={refreshing}
                  onRefresh={onRefresh}
                />
            }
        />
        </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});
