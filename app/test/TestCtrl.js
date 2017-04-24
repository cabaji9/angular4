var app = angular.module('app');
app.controller('TestCtrl', ['$rootScope', '$scope', '$filter',
  '$routeParams','AppService', TestCtrl]);
function TestCtrl($rootScope, $scope, $filter, $routeParams,AppService) {

  $scope.value = 'HOLA TEST ONE';

  $scope.bringData = function(evt){
      AppService.getData().then(function(data){
          $scope.dataBack = data;
      });

  };
};

