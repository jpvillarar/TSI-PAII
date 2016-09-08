angular
  .module('miApp', ['ngAnimate'])
  .controller('MiCtrl', function($scope, $http){
    $scope.mail = "mi@mails";
    $scope.vista = 1;
    $scope.aPartir= 1;
    $scope.form={};

    $scope.personas = [];

    $http
    .get('./scripts/persona.json')
    .then(function(rta){
    	console.log(rta);
    	$scope.personas =rta.data;
    })


    $scope.enviar = function(){
    	console.log($scope.log)
    }
    var unmail = "dsd";


  })
