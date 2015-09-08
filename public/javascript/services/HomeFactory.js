(function() {
	'use strict';
	angular.module('app')
	.factory('HomeFactory', HomeFactory);

	HomeFactory.$inject = ['$http', '$q'];

	var Question = function(q, ansArray) {
		this.q = q ;
		this.ansArray = ansArray ;
	} ;

	var initArray = function(questions) {

		questions.push(new Question("q1", ["a11", "a12"])) ;
		questions.push(new Question("q2", ["a21", "a22"])) ;
		questions.push(new Question("q3", ["a31", "a32"])) ;
		questions.push(new Question("q4", ["a41", "a42"])) ;
		questions.push(new Question("q5", ["a51", "a52"])) ;

	}

	var ansSelected = "";

	function HomeFactory($http, $q) {
		var o = {};

		o.questions = [] ;
		initArray(o.questions) ;

		o.calculate = function() {
			ansSelected = ansSelected + "Correct" ;
		} ;


		return o;
	}
})();