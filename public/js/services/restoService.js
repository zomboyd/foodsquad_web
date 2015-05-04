angular.module('restoService', []).factory('Restaurant', ['$http', function($http)
{
    return {
        get : function() {
            return $http.get('/api/restaurants');
        },

        create : function(nerdData) {
            return $http.post('/api/restaurants', restaurantData);
        },

        delete : function(id) {
            return $http.delete('/api/restaurants/' + id);
        }
    }       

}]);