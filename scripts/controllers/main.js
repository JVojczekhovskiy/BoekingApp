'use strict';

angular.module('boekingApp')
.controller('mainCtrl', function($scope, dataService) {
  $scope.boekingen = [];

  $scope.addBoeking = function(n,i,d,t) {
    var boeking = {name: n, info: i, doel: d, tijd: t};
    $scope.boekingen.push(boeking);
  };

  $scope.resetInput = function(){
    $scope.naam = "";
    $scope.info = "";
    $scope.doel = "";
    $scope.tijd = "";

  }

  $scope.deleteBoeking = function(boeking, $index) {
    dataService.deleteBoeking(boeking);
    $scope.bookingen.splice($index, 1);
  };
})
