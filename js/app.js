var myapp = angular.module('myapp', []);

myapp.controller('myController', function($scope){
	console.log("hello");

	$scope.newUser = {};
	$scope.clickedUser = {};

	$scope.users = [
		{username: "irin", fullname: "irinahar", email: "irin@gmail.com"},
		{username: "tarin", fullname: "nabiha tarin", email: "tarin@gmail.com"},
		{username: "rayat", fullname: "rayat morshed", email: "rayat@gmail.com"},
	];
	$scope.submit = function(){
		$scope.users.push($scope.newUser);
		$scope.newUser = {};
	};
	$scope.edituser = function(user){
		$scope.clickedUser = user;
	
	};
	$scope.save = function(){
		
	};
	$scope.deleteUser =function(){
		$scope.users.splice($scope.users.indexOf($scope.clickedUser),1); 
	};
});