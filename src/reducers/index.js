import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {reducer as reduxFormReducer} from 'redux-form';

const reducers = {
    routing: routerReducer,
    form: reduxFormReducer,
};

export default combineReducers(reducers);