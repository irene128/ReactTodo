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
  }
}
