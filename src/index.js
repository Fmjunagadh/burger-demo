import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import "./assets/vendor/fontawesome-free/css/all.min.css";
import "./assets/css/sb-admin.css";
import App from './App';
//import store from './store'
import {createStore} from 'redux';
import reducers from './reducers/screening';
//import { connect } from "react-redux";

const store = createStore(reducers)

ReactDOM.render(<Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));


    




