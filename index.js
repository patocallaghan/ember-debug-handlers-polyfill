/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-debug-handlers-polyfill',

  included: function(app) {
    var app = this.app || app;

    if (app.env !== 'production') {
      app.import('vendor/ember-debug-handlers-polyfill/debug.js');
    } else {
      app.import('vendor/ember-debug-handlers-polyfill/prod.js');
    }
  }
};
