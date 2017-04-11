var app = angular.module('app');
app.controller('TestCtrl', ['$rootScope', '$scope', '$filter',
  '$routeParams', TestCtrl]);
function TestCtrl($rootScope, $scope, $filter, $routeParams) {

  $scope.value = 'HOLA TEST ONE';

};

