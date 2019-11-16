import { GET_RECIPES } from './types'
import axios from 'axios'

export const getRecipes = () => ({
  type: GET_RECIPES,
  promise: axios.get('https://api.myjson.com/bins/171v5n')
})