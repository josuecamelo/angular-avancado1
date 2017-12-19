require('angular');

require('./locale/angular-locale_pt-br.js');

var MainController = require('./controllers/MainController');
var maskTel = require('./directives/maskTel');

angular.module('app', []);
angular.module('app').directive('maskTel',[maskTel]); //registrado directive
angular.module('app').controller('MainController',['$scope','$http', '$filter',MainController]);