import 'materialize-css/dist/css/materialize.min.css'
import React from 'react'
import REACTDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import {thunk} from 'redux-thunk'
import App from './components/App'
import reducers from './reducers'
import axios from 'axios'
window.axios = axios


const store = createStore(reducers, {}, applyMiddleware(thunk))
const el = document.getElementById('root')


const root = REACTDOM.createRoot(el)

root.render(<Provider store={store}><App/></Provider>)

console.log('STRIPE KEY', process.env.REACT_APP_STRIPE_KEY)