require('angular');

require('./locale/angular-locale_pt-br.js');

var configValue = require('./config/configValue');
var configBonusProvider = require('./config/configBonusProvider');
var bonusGenerator = require('./services/bonusGenerator');
var clientAPIService = require('./services/clientAPIService');
var clientTestService = require('./services/clientTestService');
var MainController = require('./controllers/MainController');
var maskTel = require('./directives/maskTel');
//var alertMsg = require('./directives/alertMsg');

angular.module('app', []);
angular.module('app').value('configValue',configValue);
angular.module('app').provider('bonusGenerator',[bonusGenerator]);
angular.module('app').config(['bonusGeneratorProvider',configBonusProvider]);
//angular.module('app').factory('clientAPIService',['$http',clientAPIService]);
//angular.module('app').service('clientTestService',['$http',clientTestService]);
angular.module('app').factory('clientAPIService',['$http','configValue',clientAPIService]); //usando service value
angular.module('app').service('clientTestService',['$http','configValue',clientTestService]); //usando service value
angular.module('app').directive('maskTel',[maskTel]); //registrado directive
//angular.module('app').directive('alertMsg',[alertMsg]); //registrado directive
angular.module('app').controller('MainController',['$scope','$http', '$filter', 'clientAPIService','clientTestService', 'configValue', 'bonusGenerator',MainController]);