import React from 'react'
import { Provider } from 'react-redux'
import store from '../redux/config/store'
import '../styles/index.css'
import Recipe from './pages/Recipe'

const App = () => {
  return (
    <Provider store={store}>
      <Recipe/>
    </Provider>
  )
}

export default App