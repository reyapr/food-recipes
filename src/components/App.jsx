import React from 'react'
import { Provider } from 'react-redux'
import store from '../redux/config/store'
import Card from './Card'

const App = () => {
  return (
    <Provider store={store}>
      <div>Apps</div>
      <Card/>
    </Provider>
  )
}

export default App