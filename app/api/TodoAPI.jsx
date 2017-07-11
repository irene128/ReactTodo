var $ = require('jquery');

module.exports = {
  setTodos: function (todos) {
    if($.isArray(todos)){
      //localStorage only can set value of string type
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },
  getTodos: function () {
    var stringTodos = localStorage.getItem('todos');
    var todos = [];

    try {
      todos = JSON.parse(stringTodos);
    } catch(e) {

    }

    return $.isArray(todos) ? todos : [];
  },
  filterTodos: function (todos, showCompleted, searchText) {
    var filteredTodos = todos;

    //filter by completed
    filteredTodos = filteredTodos.filter((todo) => {
      //callback function that decide the item stay in todos array or not
      //default show items not completed
      //if show completed checkbox checked, then show completed items
      return !todo.completed || showCompleted;
    });
    return filteredTodos;
  }
}
