import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet,
  RefreshControl
} from 'react-native';
import RestaurantRow from '../../component/Restaurant/RestaurantRow';
import dumyData from '../../../assets/data/restaurants.json';
import { FlashList } from "@shopify/flash-list";
import { useState } from 'react';

export default function Index() {

  const [refreshing,setRefreshing] = useState(false);
  const onRefresh = () => {
    setRefreshing(true);
        setTimeout(()=>{
        setRefreshing(false);
    },3000);
  }
  
  return (
        <FlashList
            data={dumyData}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => {
                return <RestaurantRow item={item} />
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
  );
}

const styles = StyleSheet.create({});
