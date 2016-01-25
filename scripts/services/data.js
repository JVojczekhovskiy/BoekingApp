'use strict';

angular.module('boekingApp')
.service('dataService', function($http) {

  this.deleteBoeking = function(boeking) {
    console.log("The " + boeking.name + " booking has been deleted!")
    // other logic
  };
});
