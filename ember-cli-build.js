'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const { Webpack } = require('@embroider/webpack');
const EmbroiderCompat = require('@embroider/compat');
const path = require('path');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return EmbroiderCompat.compatBuild(app, Webpack, {
     packagerOptions: {
       webpackConfig: {
         resolve: {
           alias: {
             'embroider-cannot-find-module-error': path.resolve(__dirname, './app'), // app
             settings: path.resolve(__dirname, './lib/settings/'), // addon 
             'common-utilities': path.resolve(__dirname, './lib/common-utilities/'), // engine
           }
         }
       }
     }
   });

};
