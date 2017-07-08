var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: [
        {
          id: 1,
          text: 'Clean the yard'
        },
        {
          id: 2,
          text: 'Walk the dog'
        },
        {
          id: 3,
          text: 'Clean the room'
        },
        {
          id: 4,
          text: 'Pay the bill'
        },
        {
          id: 5,
          text: 'Do homework'
        }
      ]
    }
  },
  handleAddTodo: function (text) {
    alert('new todo: ' + text);
  },
  render: function () {
    var {todos} = this.state;

    return (
    <div>
      <TodoList todos={todos}/>
      <AddTodo onAddTodo={this.handleAddTodo}/>
    </div>
    );
  }
});

module.exports = TodoApp;
