import assign from 'object-assign';
import Constants from '../Constants';
import {EventEmitter} from 'events';

export default assign({}, EventEmitter.prototype, {
  // Allow Controller-View to register itself with store
  addChangeListener(callback) {
    this.on(Constants.CHANGE_EVENT, callback);
  },

  removeChangeListener(callback) {
    this.removeListener(Constants.CHANGE_EVENT, callback);
  },

  // triggers change listener above, firing controller-view callback
  emitChange() {
    this.emit(Constants.CHANGE_EVENT);
  },

  emitDeleteAll() {
    this.emit(Constants.ALL_TASKS_DELETED);
  },

  addDeleteListener(callback) {
    this.on(Constants.ALL_TASKS_DELETED, callback);
  }
});
