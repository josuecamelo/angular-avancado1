require('angular');
require('angular-route'); //ng route
require('./locale/angular-locale_pt-br.js');

var routeConfig = require('./config/routeConfig');
var configConstant = require('./config/configConstant');
var configValue = require('./config/configValue');
var configBonusProvider = require('./config/configBonusProvider');
var bonusGenerator = require('./services/bonusGenerator');
var clientAPIService = require('./services/clientAPIService');
var clientTestService = require('./services/clientTestService');
var MainController = require('./controllers/MainController');
var ClientsController = require('./controllers/ClientsController');
var ClientController = require('./controllers/ClientController');

var maskTel = require('./directives/maskTel');
//var alertMsg = require('./directives/alertMsg');

//angular.module('app', []);
angular.module('app',['ngRoute']); //adicionado o ngroute
angular.module('app').constant('configConstant',configValue);
angular.module('app').value('configValue',configValue);
angular.module('app').provider('bonusGenerator',[bonusGenerator]);
//angular.module('app').config(['bonusGeneratorProvider',configBonusProvider]);
angular.module('app').config(['bonusGeneratorProvider','configConstant',configBonusProvider]);

angular.module('app').config(['$routeProvider',routeConfig]);

//angular.module('app').factory('clientAPIService',['$http',clientAPIService]);
//angular.module('app').service('clientTestService',['$http',clientTestService]);
angular.module('app').factory('clientAPIService',['$http','configValue',clientAPIService]); //usando service value
angular.module('app').service('clientTestService',['$http','configValue',clientTestService]); //usando service value
angular.module('app').directive('maskTel',[maskTel]); //registrado directive
//angular.module('app').directive('alertMsg',[alertMsg]); //registrado directive
//angular.module('app').controller('MainController',['$scope','$http', '$filter', 'clientAPIService','clientTestService', 'configValue', 'bonusGenerator', 'routeInfo',MainController]);
//substituindo o de cima
angular.module('app').controller('MainController',['$scope','$filter','configValue','routeInfo', MainController]);
//angular.module('app').controller('ClientsController',['$scope','$http','$filter','clientAPIService','clientTestService','configValue','bonusGenerator','routeInfo',ClientsController]);
//angular.module('app').controller('ClientController',['$scope','$filter','clientAPIService','configValue','routeInfo','$routeParams',ClientController]);
