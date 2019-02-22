import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './Root';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware } from 'redux';
import modules from 'modules';
import { Provider } from 'react-redux';
import penderMiddleware from 'redux-pender/lib/middleware';
import { createLogger } from 'redux-logger';

const logger = createLogger();
const store = createStore(modules,  applyMiddleware(logger, penderMiddleware()));

ReactDOM.render(
    <Provider store={store}>
        <Root />
    </Provider>
, document.getElementById('root'));
serviceWorker.unregister();
