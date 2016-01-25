'use strict';

angular.module('bookingApp')
.service('dataService', function($http) {

  this.deleteBooking = function(booking) {
    console.log("The " + booking.name + " booking has been deleted!")
    // other logic
  };
});
