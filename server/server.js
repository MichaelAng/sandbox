(function () {
    'use strict';

    var express = require('express');
    var app = express();
    var bodyParser = require('body-parser');
    var config = require('./config/config');
    var methodOverride = require('method-override');
    var path = require('path');

    app.use(express.static(config.root));
    app.use(bodyParser.urlencoded({'extended':'true'}));
    app.use(bodyParser.json());
    app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
    app.use(methodOverride());

    app.set('appPath', path.join(config.root, 'client'));
    app.use(express.static(path.join(config.root, 'client')));

    // Start server
    app.listen(config.port, config.ip, function () {
      console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
    });
})();
