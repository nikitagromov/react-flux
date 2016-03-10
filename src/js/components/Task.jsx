import React from 'react';
import ActionCreator from '../actions/TodoActionCreators';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import Input from 'react-bootstrap/lib/Input';
import RichInput from './RichInput.jsx';

export default React.createClass({
  getDefaultProps() {
    return {
      task: {
        title: '',
        completed: false
      }
    };
  },

  handleToggle(task) {
    console.log(task)
    if (!task.completed) {
      ActionCreator.completeTask(task);
    } else {
      ActionCreator.unCompleteTask(task);
    }

  },

  render() {
    let {task} = this.props;

    return (
      <ListGroupItem>
        <Input type="checkbox" ref="checkbox" checked={task.completed}
          onChange={this.handleToggle.bind(this, task)}/>
        <RichInput task={task}/>
      </ListGroupItem>
    );
  }
});
