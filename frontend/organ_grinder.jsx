var React = require('react'),
    ReactDOM = require('react-dom'),
    OrganGrinder = require('./components/organ_grinder.jsx');

require("./util/key_listener.js");

$(function() {
  var root = document.getElementById('organ-grinder');
  ReactDOM.render(<OrganGrinder />, root);
});
