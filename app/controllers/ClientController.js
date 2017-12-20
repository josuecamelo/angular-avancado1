/**
 * Created by josuecamelo on 20/12/17.
 */
module.exports = function($scope,$filter,clientAPIService,configValue,routeInfo,$routeParams){
    $scope.name = $filter("uppercase")(configValue.appName);
    $scope.msg = "";
    $scope.clients = [];
    $scope.page = routeInfo.routeName;
    $scope.navClass = routeInfo.navClass;

    var listClient = function(){
        clientAPIService.getClient($routeParams.id).then(function(data,status){
            console.log(data);
            //console.log(status);
            $scope.client = data.data;
        });
    };

    listClient();

};