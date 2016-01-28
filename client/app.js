angular.module('JSCalendar', [
 'JSCalendar.calendar',
 'JSCalendar.services',
 'ngRoute'
])
.config(function ($routeProvider, $httpProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'calendar.html',
    controller: 'CalendarCtrl'
  })
});