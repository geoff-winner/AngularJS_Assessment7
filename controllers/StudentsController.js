studentRoster.controller('StudentsCtrl', function StudentsCtrl($scope, StudentsFactory) {
  $scope.list = StudentsFactory.list;
  $scope.StudentsFactory = StudentsFactory;
});
