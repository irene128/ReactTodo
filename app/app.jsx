var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux'); //provide your store to its children
var {hashHistory} = require('react-router');

var actions = require('actions');
var store = require('configureStore').configure();

import firebase from 'app/firebase/';
import router from 'app/router/';

//import './../playground/firebase/index';

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(actions.login(user.uid));
    hashHistory.push('/todos');
    store.dispatch(actions.startAddTodos()); //dispatch just users' todo

  } else {
    store.dispatch(actions.logout());
    hashHistory.push('/');
  }
});

/*
store.subscribe(() => {
  var state = store.getState();
  console.log('New state', state);
  TodoAPI.setTodos(state.todos);
});

var initialTodos = TodoAPI.getTodos();
store.dispatch(actions.addTodos(initialTodos));
*/

/*
store.dispatch(actions.addTodo('Walk the dog'));
store.dispatch(actions.setSearchText('dog'));
store.dispatch(actions.toggleShowCompleted());
*/



//css
$(document).foundation();

require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('app')
);
