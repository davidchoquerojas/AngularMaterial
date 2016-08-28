(function () {
    'use strict';
    angular.module('appAngular', ['appDatos']).controller('persona', persona);
    persona.$inject = ['$location', 'factoryDatos'];

    function persona(location,dataFactory) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'persona';
        vm.persona = {};

        vm.listaPersona = [
                            { name: "Alex", edad: 40, fechaNacimiento: new Date().toJSON() },
                            { name: "Alex 1", edad: 41, fechaNacimiento: new Date().toJSON() },
                            { name: "Alex 2", edad: 42, fechaNacimiento: new Date().toJSON() },
                            { name: "Alex 3", edad: 43, fechaNacimiento: new Date().toJSON() },
                            { name: "Alex 4", edad: 44, fechaNacimiento: new Date().toJSON() },
                            { name: "Alex 5", edad: 45, fechaNacimiento: new Date().toJSON() },
                            { name: "Alex 6", edad: 47, fechaNacimiento: new Date().toJSON() },
                            { name: "Alex 7", edad: 48, fechaNacimiento: new Date().toJSON() }
        ];
        activate();
        vm.consular = function (parametro) {
            if (vm.personaSeleccionado == undefined)
                alert("Seleccione un item");
            console.log(vm.personaSeleccionado);
        }
        vm.guardar = function (persona) {
            console.log(persona);
            dataFactory.Grabar(persona).success(function (respuesta) {
                console.log(respuesta);
            });
        }
        function activate() {

        }
    }
})();
