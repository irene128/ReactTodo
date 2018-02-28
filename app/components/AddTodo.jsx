var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');
import PlusIcon from 'react-icons/lib/fa/plus-circle';

export var AddTodo = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();
    var {dispatch} = this.props;
    var todoText = this.refs.todoText.value;

    if(todoText.length > 0){
      this.refs.todoText.value='';
      //this.props.onAddTodo(todoText);
      dispatch(actions.startAddTodo(todoText));
    }else{
      this.refs.todoText.focus();
    }
  },
  render: function () {
    return (
    <div className="container__footer">
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref="todoText" placeholder="what do you need todo?"/>
        <button className="button expanded">Add Todo <PlusIcon /></button>
      </form>
    </div>
    );
  }
});

//module.exports = AddTodo;
export default connect()(AddTodo);
