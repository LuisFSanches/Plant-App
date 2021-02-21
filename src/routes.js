import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

//Screens
import Home from './pages/Home';
import PlantDetail from './pages/PlantDetail';

//Tabs
import Tabs from './navigation/tabs';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'Home'}>
      <Stack.Screen name="Home" component={Tabs} />
    </Stack.Navigator>
  );
}
