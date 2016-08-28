(function () {
    'use strict';
    angular.module('appDatos', []).factory('factoryDatos', datos);
    datos.$inject = ['$http'];
    function datos(http) {
        return {
            Grabar: function (data) {
                return http({
                    method: 'POST',
                    url: '/Home/Grabar',
                    data: data
                });
            }
        }
    }
})();