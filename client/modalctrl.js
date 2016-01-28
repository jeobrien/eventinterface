angular.module('JSCalendar.calendar')

.controller('ModalCtrl', function ($scope, $uibModal, $log, Calendar) {

  $scope.animationsEnabled = true;

  $scope.open = function (size) {
    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'addEvent.html',
      controller: 'EventInstanceCtrl',
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });
  };
  $scope.toggleAnimation = function () {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };
})

.controller('EventInstanceCtrl', function ($scope, $uibModalInstance, items, Calendar) {

  $scope.ok = function () {
    Calendar.saveEvent($scope.newEvent).then(function (events) {
      console.log(events, "EVENTS")
      $scope.events = events;
    })
    .catch(function (err) {
      console.error(err);
    });
    $uibModalInstance.close();
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});