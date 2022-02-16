// import React from 'react'
// import Home from './view/home/View'

// export default class App extends React.Component {

//   render() {
//     return (
//       <Home/ >
//     )
//   }
// }

import React from 'react'
import Home from './view/home/View'
import List from './view/list/View'
import { StackNavigator } from '@react-navigation/native'

export default function App() {
  return (
    <NavigationContainer>{
       {Home: { screen: Home },
        List: { screen: List },}/* Rest of your app code */}</NavigationContainer>
  );
}


const App = StackNavigator({
  Home: { screen: Home },
  List: { screen: List },
});

export default App

