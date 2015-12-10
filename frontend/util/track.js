var KeyActions = require('../actions/key_actions');

function Track(attr) {
  this.name = attr.name;
  this.roll = attr.roll;
}

Track.prototype.startRecording = function() {
  this.roll = [];
  this.date = new Date();
};

Track.prototype.stopRecording = function() {
  this.addNotes([]);
};

Track.prototype.play = function() {
  if (typeof this.interval === 'undefined') {
    var playBackStartTime = Date.now();
    var currentNote = 0;
    this.interval = setInterval(function() {
      if (currentNote >= this.roll.length) {
        clearInterval(this.interval)
      } else {
        if (Date.now() - playBackStartTime > this.roll[currentNote].timeSlice) {
          KeyActions.batchAddKey(this.roll[currentNote].notes);
          currentNote += 1;
        }
      }
    }.bind(this), 50);
  }
};

Track.prototype.addNotes = function(notes) {
  this.roll.push({
    timeSlice: new Date().getTime() - this.date.getTime(),
    notes: notes
  });
};


module.exports = Track;
