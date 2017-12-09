import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import reducer from './reducers'
// import { fetchPosts } from './actions';
import thunkMiddleware from 'redux-thunk';

const store = createStore(
    reducer,
    applyMiddleware( thunkMiddleware, createLogger() )
);


// MAKE FETCH ____ CALL HERE IN DISPATCH
// store.dispatch();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
