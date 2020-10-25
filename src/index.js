import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { firebase } from './firebase/firebase';
import configureStore from './store/configureStore';
import { login, logout } from './actions/auth';
import { startGetArticles } from './actions/articles';
import * as serviceWorker from './serviceWorker';
import AppRouter from './routers/AppRouter';
import './index.css';

const store = configureStore();
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user));
    console.log(user.uid);
  }
  else {
    store.dispatch(logout());
  }
})
store.dispatch(startGetArticles()).then(() => {
  try {
    ReactDOM.render(
      <Provider store={store}>
        <AppRouter />
      </Provider>,
      document.getElementById('root')
    );
  }
  catch {
    ReactDOM.render(<div>The app is currently not available...</div>, document.getElementById('root'));
  }
});


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister(); 
