import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import articlesReducer from '../reducers/articles';

// Keep REDUX DEVTOOLS functionalities if it exists
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default _ => {
    const store = createStore(
        combineReducers({
            articles: articlesReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
};