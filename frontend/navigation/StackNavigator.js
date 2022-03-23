import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Start from '../screens/start/View'
import List from '../screens/view/detail/View'
import Detail from '../screens/checkin/View'
import Form from '../screens/form/View'
import Home from './TabNavigator'

const Stack = createNativeStackNavigator();

function RouteApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Start"
      >
        <Stack.Screen name="Start" component={Start} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="List" component={List} options={{ headerShown: false }} />
        <Stack.Screen name="Detail" component={Detail} options={{ headerShown: false }} />
        <Stack.Screen name="Form" component={Form} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RouteApp;