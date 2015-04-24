studentRoster.factory('StudentsFactory', function StudentsFactory() {
  var factory = {};

  factory.list = [];
  factory.signIn = function() {
    var student = { name: factory.studentName, signedIn: false };
    factory.list.push(student);
    factory.studentName = null;
  };
  return factory;
});
