import React from 'react';
import Task from './Task.jsx';
import TodoStore from './../stores/TodoStore';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import Alert from 'react-bootstrap/lib/Alert';
console.log('loaded')
export default React.createClass({
  getDefaultProps() {
    return {
      tasks: []
    };
  },

  _onChange() {
    var tasks = TodoStore.getAll();
    console.log('on change')
    this.setState({tasks: tasks});
  },


  componentDidMount() {
    console.log('add listener');
    TodoStore.addChangeListener(this._onChange);
  },

  render() {
    let {tasks} = this.props;

    if (tasks.length === 0) {
      return (
        <Alert bsStyle="warning">
          <strong>You have no tasks</strong> Create some using the Add New button below.
        </Alert>
      );
    }

    return (
      <form>
        <ListGroup>
          {tasks.map(task =>
            <Task task={task} key={task.title} />
          )}
        </ListGroup>
      </form>
    );
  }
});
