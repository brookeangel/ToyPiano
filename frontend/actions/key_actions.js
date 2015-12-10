var AppDispatcher = require('../dispatcher/dispatcher.js');
var KeyConstants = require('../constants/key_constants.js');

var KeyActions = {
  addKey: function(key) {
    AppDispatcher.dispatch({
      actionType: KeyConstants.ADD_KEY,
      key: key
    });
  },

  removeKey: function(key) {
    AppDispatcher.dispatch({
      actionType: KeyConstants.REMOVE_KEY,
      key: key
    });
  },

  batchAddKey: function(keys) {
    AppDispatcher.dispatch({
      actionType: KeyConstants.BATCH_ADD_KEYS,
      keys: keys
    });
  },
};

module.exports = KeyActions;
