import keyMirror from 'react/lib/keyMirror';

export default {
  // event name triggered from store, listened to by views
  CHANGE_EVENT: 'change',

  // Each time you add an action, add it here... They should be past-tense
  ActionTypes: keyMirror({
    TASK_ADDED: null,
    TASK_DELETED: null,
    ALL_TASKS_DELETED: null,
    TASK_COMPLETED: null,
    TASK_UNCOMPLETED: null,
    TASK_TITLE_CHANGED: null
  }),

  ActionSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  })
};
