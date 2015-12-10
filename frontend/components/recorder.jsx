var React = require('react');
var Track = require('../util/track.js');
var KeyStore = require('../stores/key_store.js');

var Recorder = React.createClass({
  getInitialState: function() {
    return {
      isRecording: false,
      track: new Track({name: "Track", roll:[]})
    };
  },

  componentDidMount: function() {
    KeyStore.addListener(this.recordNotes);
  },

  componentWillUnmount: function() {
    KeyStore.remove(this.recordNotes);
  },

  recordNotes: function() {
    if (this.state.isRecording) {
      this.state.track.addNotes(KeyStore.all());
    }
  },

  startRecording: function() {
    this.setState({isRecording: true});
    this.state.track.startRecording();
  },

  stopRecording: function() {
    this.setState({isRecording: false});
    this.state.track.stopRecording();
  },

  playRecording: function() {
    if (this.state.isRecording) return;
    this.state.track.play();
  },

  render: function() {
    return(
      <div className="recorder">
        <div className="start-button" onClick={this.startRecording}>Start</div>
        <div className="stop-button" onClick={this.stopRecording}>Stop</div>
        <div className="play-button" onClick={this.playRecording}>Play</div>
      </div>
    );
  }
});

module.exports = Recorder;
