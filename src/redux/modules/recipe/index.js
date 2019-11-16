import createReducer from '../../config/createReducer'
import * as types from './types'

const initialState = {
  loading: false,
  error: false,
  test: 'string test'
}

export default createReducer(
  {
    [types.GET_RECIPES_REQEUST]: state => ({
      ...initialState,
      loading: true
    }),
    [types.GET_RECIPES_SUCCESS]: (state, action) => ({
      ...initialState,
      loading: false
    }),
    [types.GET_RECIPES_FAIL]: (state, action) => ({
      loading: false,
      error: action.error
    })
  },
  initialState
)