import createReducer from '../../config/createReducer'
import * as types from './types'

const initialState = {
  loading: false,
  error: false,
  data: []
}

export default createReducer(
  {
    [types.GET_RECIPES_REQUEST]: state => ({
      ...state,
      loading: true
    }),
    [types.GET_RECIPES_SUCCESS]: (state, action) => ({
      ...state,
      loading: false,
      data: action.payload.data.recipe
    }),
    [types.GET_RECIPES_FAIL]: (state, action) => ({
      ...state,
      loading: false,
      error: action.error
    })
  },
  initialState
)