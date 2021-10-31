import { createStore, combineReducers, applyMiddleware } from 'Redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'