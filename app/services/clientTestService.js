/**
 * Created by josuecamelo on 20/12/17.
 */
module.exports = function($http, configValue){
    this.getClients = function(){
        return $http.get(configValue.apiURL);
    };
    this.saveClients = function(client){
        return $http.post(configValue.apiURL,client);
    };

};