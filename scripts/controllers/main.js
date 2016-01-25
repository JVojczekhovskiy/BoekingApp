'use strict';

angular.module('bookingApp')
.controller('mainCtrl', function($scope, dataService) {
  $scope.bookingen = [];

  $scope.addBooking = function(n,i,d,t) {
    var booking = {name: n, info: i, doel: d, tijd: t};
    $scope.bookingen.push(booking);
  };

  $scope.deleteBooking = function(booking, $index) {
    dataService.deleteBooking(booking);
    $scope.bookingen.splice($index, 1);
  };
})
