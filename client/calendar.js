angular.module('JSCalendar.calendar', ['ui.bootstrap'])

.controller('CalendarCtrl', function ($rootScope, $scope, Calendar) {
  $scope.events;
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  $scope.deleteEvent = function (eventTitle) {
    Calendar.deleteEvent(eventTitle).then(function (events) {
      $scope.updateEvents(events);
    })
    .catch(function (err) {
      console.error(err);
    });
  };
  Calendar.getEvents().then(function (events) {
    $scope.updateEvents(events);
  })
  .catch(function (err) {
    console.error(err);
  });
    
  $rootScope.$on('new-events', function (event, args) {
    $scope.updateEvents(args.events.data);
  });
  $scope.updateEvents = function (newEvents) {
    $scope.events = [];
    newEvents.forEach(function (event) {
      var date = new Date(event.date);
      var current = {
        occasion: event.occasion,
        date: date.getDate(),
        month: months[date.getMonth()],
        year: date.getFullYear(),
        invited_count: event.invited_count
      };
      $scope.events.push(current);
    });
  };
});