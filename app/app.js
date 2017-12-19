require('angular'); //primeira coisa a fazer ao criar o arquivo
var MainController = require('./controllers/MainController');

angular.module('app', []);
angular.module('app').controller('MainController',['$scope',MainController]);
