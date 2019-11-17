import React from 'react'
import { Provider } from 'react-redux'
import store from '../redux/config/store'
import '../styles/index.css'
import Recipe from './pages/Recipe'
import Header from './templates/Header'

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Recipe/>
    </Provider>
  )
}

export default App