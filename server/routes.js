'use strict';

var path = require('path');

module.exports = function(app) {

  // Insert routes below
  app.use('/api/task', require('./api/task'));
};
