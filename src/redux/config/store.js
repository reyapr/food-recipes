import { applyMiddleware, createStore, compose } from 'redux'
import reducers from './configureStore'
import requestMiddleware from './requestMiddleware'
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

const store = createStore(reducers, {}, composeWithDevTools(applyMiddleware(requestMiddleware)))

export default store