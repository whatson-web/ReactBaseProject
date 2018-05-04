import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Switch} from 'react-router-dom';
import {createStore, compose, applyMiddleware} from 'redux';
import {ConnectedRouter, routerMiddleware} from 'react-router-redux';
import createHistory from 'history/createHashHistory';
import {Provider} from 'react-redux';
import reducers from './reducers';

// Styles
// Import Flag Icons Set
import 'flag-icon-css/css/flag-icon.min.css';
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
// Import Main styles for this application
import '../scss/style.scss'
// Temp fix for reactstrap
import '../scss/core/_dropdown-menu-right.scss'

import Layout from './views/Layout/';
import Login from './views/Authentication/Login/';
import Page404 from './views/Exception/Page404/';
import Page500 from './views/Exception/Page500/';

const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(
    reducers,
    compose(applyMiddleware(middleware))
);

ReactDOM.render((
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route exact path="/login" name="Login Page" component={Login}/>
                <Route exact path="/404" name="Page 404" component={Page404}/>
                <Route exact path="/500" name="Page 500" component={Page500}/>
                <Route path="/" name="Home" component={Layout}/>
            </Switch>
        </ConnectedRouter>
    </Provider>
), document.getElementById('root'));
