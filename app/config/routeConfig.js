/**
 * Created by josuecamelo on 20/12/17.
 */
module.exports = function($routeProvider){
    $routeProvider.when("/clients",{
        templateUrl:"view/clients.html",
        controller:"MainController",
        resolve:{
            routeName:function(){
                return "Client list";
            }
        }
    });


};