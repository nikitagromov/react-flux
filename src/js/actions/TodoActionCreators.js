import Dispatcher from '../Dispatcher';
import Constants from '../Constants';

/* eslint-disable no-console */

export default {
  addItem(text) {
    Dispatcher.handleViewAction({
      type: Constants.ActionTypes.TASK_ADDED,
      text: text
    });
  },

  unCompleteTask(task) {
    Dispatcher.handleViewAction({
      type: Constants.ActionTypes.TASK_UNCOMPLETED,
      task: task
    })
  },

  clearList() {
    Dispatcher.handleViewAction({
      type: Constants.ActionTypes.ALL_TASKS_DELETED,
      text: ''
    });
    //console.warn('clearList action not yet implemented...');
  },

  completeTask(task) {
    console.warn('completeTask action not yet implemented...', task);
    Dispatcher.handleViewAction({
      type: Constants.ActionTypes.TASK_COMPLETED,
      task: task
    })
  },

  changeTaskTitle(task) {
    Dispatcher.handleViewAction({
      type: Constants.ActionTypes.TASK_TITLE_CHANGED,
      task: task
    })
  }
};
