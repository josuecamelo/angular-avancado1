/**
 * Created by josuecamelo on 20/12/17.
 */
module.exports = function($routeProvider){

    $routeProvider.when("/home",{
        templateUrl:"view/home.html",
        controller:"MainController",
        resolve:{
            routeName:function(){
                return "Home";
            }
        }
    });

    $routeProvider.when("/clients",{
        templateUrl:"view/clients.html",
        controller:"MainController",
        resolve:{
            routeName:function(){
                return "Client list";
            }
        }
    });

    $routeProvider.otherwise({redirectTo:"/home"}); //rota default
};