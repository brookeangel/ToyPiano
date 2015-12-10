var React = require('react');
var TONES = require('../constants/tones.js');
var Note = require('../util/note.js');
var KeyStore = require('../stores/key_store.js');

var Key = React.createClass({
  componentDidMount: function() {
    this.note = new Note(TONES[this.props.noteName]);
    KeyStore.addListener(this.playKey);
  },

  componentWillUnmount: function() {
    KeyStore.remove(this.playKey);
  },

  playKey: function() {
    var keys = KeyStore.all();
    if (keys.indexOf(this.props.noteName) !== -1) {
      this.note.start();
    } else {
      this.note.stop();
    }
  },

  render: function() {
    return <div className="key"></div>;
  }
});

module.exports = Key;
