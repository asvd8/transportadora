var miAplicacion = angular.module('lista_items', []);
miAplicacion.controller('Controlador', ['$scope', function($scope) {
      $scope.lista = [
        /* {texto: 'comprar', seleccionado: true},
         {texto: 'Call of duty', seleccionado: false}*/
      ];
      $scope.agregar = function() {
         $scope.lista.push({texto: $scope.texto, seleccionado: true});
         $scope.texto = '';
      };
      $scope.eliminar = function() {
         var lista = $scope.lista;
         $scope.lista = [];
         angular.forEach(lista, function(item) {
            if (!item.seleccionado)
               $scope.lista.push(item);
         });
      };
 }]);