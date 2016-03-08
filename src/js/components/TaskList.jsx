import React from 'react';
import Task from './Task.jsx';
import TodoStore from './../stores/TodoStore';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import Alert from 'react-bootstrap/lib/Alert';

export default React.createClass({
  getDefaultProps() {
    return {
      tasks: []
    };
  },

  _onChange() {
    console.log('args', arguments);

    this.setState({tasks: []});
  },


  componentDidMount() {
    TodoStore.addDeleteListener(this._onChange);
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
