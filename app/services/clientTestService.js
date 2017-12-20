/**
 * Created by josuecamelo on 20/12/17.
 */
module.exports = function($http){
    this.getClients = function(){
        return $http.get('http://localhost:8001');
    };
    this.saveClients = function(client){
        return $http.post('http://localhost:8001',client);
    };

};