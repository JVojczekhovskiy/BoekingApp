'use strict';

angular.module('boekingApp')
.controller('mainCtrl', function($scope,Booking) {
  $scope.boekingen = Booking.query();
  $scope.maanden = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  $scope.dagen =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
  $scope.tijden = ["09:00","09:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30"];

  $scope.addBoeking = function(n,i,d,da,m,t) {
    Booking.create({
      "name": n,
      "information": i,
      "purpose": d,
      "time": new Date(m+" "+da+", 2016 "+t+":00 UTC").toISOString()
    }).$promise.then(function(boeking) {
 			 		$scope.boekingen.push(boeking);
          document.getElementsByClassName('form-horizontal')[0].reset();
 		});
  };

  $scope.deleteBoeking = function($index) {
    Booking.deleteById({
      id: $scope.boekingen[$index].id
    }).$promise.then(function(){
      console.log('deleted');
      $scope.boekingen.splice($index, 1);
    });
  };
})
