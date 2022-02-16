// import React from 'react'
// import Home from './view/home/View'

// export default class App extends React.Component {

//   render() {
//     return (
//       <Home/ >
//     )
//   }
// }
import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './view/home/View'
import List from './view/list/View'

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate('Details')}
//       />
//     </View>
//   );
// }

// function DetailsScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Details Screen</Text>
//     </View>
//   );
// }

const Stack = createNativeStackNavigator();



function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home"
        // screenOptions={{
        // headerStyle: {
        //   height: 0
        //   // backgroundColor: '#f4511e',
        // }
        // // headerTintColor: '#fff',
        // // headerTitleStyle: {
        // //   fontWeight: 'bold',
        // //   },
        // }}
      >
        <Stack.Screen name="Home" component={Home} style={{ height: 10px }} ></Stack.Screen>
        <Stack.Screen name="List" component={List} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


