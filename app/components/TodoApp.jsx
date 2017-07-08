var React = require('react');
var TodoList = require('TodoList');

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
        }
      ]
    }
  },
  render: function () {
    var {todos} = this.state;

    return (
    <div>
      <TodoList todos={todos}/>
    </div>
    );
  }
});

module.exports = TodoApp;
