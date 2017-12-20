require('angular');

require('./locale/angular-locale_pt-br.js');

var clientAPIService = require('./services/clientAPIService');
var MainController = require('./controllers/MainController');
var maskTel = require('./directives/maskTel');
//var alertMsg = require('./directives/alertMsg');

angular.module('app', []);
angular.module('app').factory('clientAPIService',['$http',clientAPIService]);
angular.module('app').directive('maskTel',[maskTel]); //registrado directive
//angular.module('app').directive('alertMsg',[alertMsg]); //registrado directive
angular.module('app').controller('MainController',['$scope','$http', '$filter', 'clientAPIService',MainController]);