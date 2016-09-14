	angular
		.module('miApp')
		.controller('MiCtrl',['$scope','$http', 'Data', 'Datos',
            function($scope,$http,Data,Datos) { 
                console.log(Data);
                console.log(Datos);
                $scope.enviar = enviar
                $scope.user = {}

                function enviar(){
                    Data.cargar($scope.user)
                    console.log(Data.listado())
                    $scope.user = null;
                    $scope.user = {};
                }
            }])
	//	  .controller('MiCtrl', function($scope){
