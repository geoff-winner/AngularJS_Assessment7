studentRoster.controller('SignInCtrl', function SignInCtrl($scope, StudentsFactory) {
  $scope.list = StudentsFactory.list;
  $scope.signStudentIn = function(student) {
    student.signedIn = true;
  },

  $scope.signStudentOut = function(student) {
    student.signedIn = false;
  };
});
