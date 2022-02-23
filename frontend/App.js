import * as React from 'react';
import { Provider } from 'react-redux'
import store from './store/'

import RouteApp from './view/home/App'

const App = (props) => {
  return (
    <Provider store={store}>
      <RouteApp />
    </Provider>
  )
}

export default App;