import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Reducer from './reducers/index'

const store = createStore(Reducer)

ReactDOM.render((
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
    ), document.getElementById('root'))


