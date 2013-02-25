angular.module('translatetest', [
  'translate',
  'translate.directives'
]).run(['translate', function(translate) {
  translate.add({
    'Hello World!': 'Hallo Welt!',
    'Hello {{user}}!': 'Hallo {{user}}!',
    "{'0': 'Nobody is viewing.','one': '1 person is viewing.','other': '{} people are viewing.'}": "{'0': 'Keiner schaut.','one': '1 Person schaut.','other': '{} Personen schauen.'}",
    'Digging in the dirt': 'Graben im Schlamm',
    'Message: {{message}}': 'Nachricht: {{message}}'
  });
}]);

function TestCtrl($scope, translate) {
  $scope.personCount = 1;
  $scope.user = "Harry Potter";
  $scope.message = translate('Digging in the dirt');
}
