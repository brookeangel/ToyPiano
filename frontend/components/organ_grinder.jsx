var React = require('react');
var TONES = require('../constants/tones.js');
var Key = require('./key.jsx');
var Recorder = require('./recorder.jsx');

var OrganGrinder = React.createClass({
  render: function() {
    return(
      <div>
        <div className="keyboard">
          {
            Object.keys(TONES).map(function(tone) {
              return <Key key={tone} noteName={tone} />;
            })
          }
        </div>
        <Recorder />
      </div>
    );
  }
});

module.exports = OrganGrinder;
