
var exec = require('cordova/exec');

var PLUGIN_NAME = 'MiPlugin';

var MiPlugin = {
  saludo: function (name, successCallback, errorCallback){
        exec(successCallback, errorCallback, PLUGIN_NAME, "saludar", [name]);
  },
  reconoce: function(name, successCallback, errorCallback){
        exec(successCallback, errorCallback, PLUGIN_NAME, "reconoce", [name]);
  }
};

module.exports = MiPlugin;
