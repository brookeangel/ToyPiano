var AppDispatcher = require('../dispatcher/dispatcher.js');
var Store = require('flux/utils').Store;
var KeyConstants = require('../constants/key_constants.js');

var KeyStore = new Store(AppDispatcher);
var _keys = [];

KeyStore.addKey = function(key) {
  _keys.push(key);
  this.__emitChange();
};

KeyStore.batchAddKeys = function(keys) {
  _keys = keys;
  this.__emitChange();
};

KeyStore.find = function(key) {
  var idx = _keys.indexOf(key);
  return idx;
};

KeyStore.removeKey = function(key) {
  var idx = this.find(key);
  _keys.splice(idx, 1);
  this.__emitChange();
};

KeyStore.all = function() {
  return _keys.slice();
  debugger;
};

KeyStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
  case KeyConstants.ADD_KEY:
    KeyStore.addKey(payload.key);
    break;
  case KeyConstants.REMOVE_KEY:
    KeyStore.removeKey(payload.key);
    break;
  case KeyConstants.BATCH_ADD_KEYS:
    KeyStore.batchAddKeys(payload.keys);
    break;
  }
};


module.exports = KeyStore;
