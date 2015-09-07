(function() {
	'use strict';
	angular.module('app')
	.controller('HomeController', HomeController);

	HomeController.$inject = ['HomeFactory'];

	function HomeController(HomeFactory) {
		var vm = this;
		vm.title = 'Quiz';
		
		vm.Questions = HomeFactory.questions ;
		vm.ansSelected = HomeFactory.ansSelected ;
	}
})();