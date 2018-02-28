import {createStore} from 'redux'
import reducer from '../reducers'
// import {composeWithDevTools} from 'redux-devtools-extension'

export default () => createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())