var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux'); //provide your store to its children
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
import Login from 'Login';

//var TodoApp = require('TodoApp');
import TodoApp from 'TodoApp';

var actions = require('actions');
var store = require('configureStore').configure();
var TodoAPI = require('TodoAPI');

//import './../playground/firebase/index';

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

store.dispatch(actions.startAddTodos());

//css
$(document).foundation();

require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/">
        <Route path="todos" component={TodoApp}/>
        <IndexRoute component={Login}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
