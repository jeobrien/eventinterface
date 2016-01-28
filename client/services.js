
angular.module('JSCalendar.services', [])

.factory('Calendar', function ($http) {
  var saveEvent = function (event) {
    return $http({
      method: 'POST',
      url: '/api/events',
      data: event,
      headers: {'Content-Type': 'application/json'}
    })
    .then(function (resp) {
      return resp;
    });
  };
  var deleteEvent = function (title) {
    return $http({
      method: 'POST',
      url: '/api/delete',
      data: {
        title: title
      },
      headers: {'Content-Type': 'application/json'}
    })
    .then(function (resp) {
      return resp.data;
    });
  };
  var getEvents = function ($scope) {
    return $http({
      method: 'GET',
      url: '/api/events',
    })
    .then(function (resp) {
      return resp.data;
    });
  };
  return {
    saveEvent: saveEvent,
    deleteEvent: deleteEvent,
    getEvents: getEvents
  };
});