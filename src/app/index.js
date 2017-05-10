var React = require('react');
var ReactDOM = require('react-dom');

// Create component.
var TodoComponent = React.createClass({
  getInitialState: function() {
    return {
      todos: [
        'test 1',
        'test 2',
        'test 3',
        'test 4'
      ]
    }
  },
  render: function() {
    var todos = this.state.todos;
    todos = todos.map(function(item, index) {
      return(
        <TodoItem item={item} key={index} />
      );
    });
    return(
      <div id="todo-list">
        <p>Title goes here</p>
        <ul>{todos}</ul>
      </div>
    );
  } // render
});

// Create TodoItem component.
var TodoItem = React.createClass({
  render: function() {
    return(
      <li>
        <div className="todo-item">
          <span className="item-name">{this.props.item}</span>
        </div>
      </li>
    );
  }
});

// Put component into html page.
ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));
