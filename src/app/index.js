var React = require('react');
var ReactDOM = require('react-dom');
require('./css/index.css');

// Module requires
var TodoItem = require('./todoItem');
var AddItem = require('./addItem');

// Create component.
var TodoComponent = React.createClass({
  getInitialState: function() {
    return {
      todos: ['test 1', 'test 2', 'test 3', 'test 4']
    }
  },
  render: function() {
    var todos = this.state.todos;
    todos = todos.map(function(item, index) {
      return(<TodoItem item={item} key={index} onDelete={this.onDelete} />);
    }.bind(this));
    return(
      <div id="todo-list">
        <p>Title goes here</p>
        <ul>{todos}</ul>
        <AddItem onAdd={this.onAdd} />
      </div>
    );
  }, // render

  // Custom functions.
  onDelete: function(item) {
    var updatedTodos = this.state.todos.filter(function(val, index) {
      return item !== val;
    });
    this.setState({
      todos: updatedTodos
    });
  },

  onAdd: function(item) {
    var updatedTodos = this.state.todos;
    updatedTodos.push(item);
    this.setState({
      todos: updatedTodos
    });
  },

  // Lifecycle functions.
  componentWillMount: function() {
    console.log('componentWillMount');
  },

  componentDidMount: function() {
    console.log('componentDidMount');
    // Any grabbing of external data.
  },

  componentWillUpdate: function() {
    console.log('componentWillUpdate');
  },
});

// Put component into html page.
ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));
