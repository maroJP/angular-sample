var app = angular.module('myApp', [ 'pascalprecht.translate' ]);

app.config(function($translateProvider) {
});

app.controller('sampleCtrl', [ '$scope', '$http', '$q',
		function($scope, $http, $q) {

			var url = 'api/sample';
			var deferred = $q.defer();
			$http({
				method : 'GET',
				url : url,
				timeout : 5000
			}).then(function onSuccess(response) {
				// expect response status code 200
				$scope.result = response.data;
				// deferred.resolve(response.data);
			}, function onError(response) {
				// 通信に失敗
				deferred.reject(0);
			});
			return deferred.promise;

		} ]);

app.controller('langCtrl2',['$scope', '$http', function($scope, $http) {
	$scope.getServerLanguage = function() {
		var url = 'api/locale';
		$http({
			method : 'GET',
			url : url,
			timeout : 5000,
			headers :{'Accept-Language': 'en'}
		}).then(function onSuccess(response) {
			console.log(response.data.language);
		}, function onError(response) {
			console.log(response);
		});
	};
}]);

app.controller('langCtrl', [
		'$scope',
		function($scope) {
			$scope.getLanguage = function(greeting) {

				var nav = window.navigator, browserLanguagePropertyKeys = [
						'language', 'browserLanguage', 'systemLanguage',
						'userLanguage' ], i, language;

				// support for HTML 5.1 "navigator.languages"
				if (angular.isArray(nav.languages)) {
					for (i = 0; i < nav.languages.length; i++) {
						language = nav.languages[i];
						if (language && language.length) {
							console.log(language);
							return;
						}
					}
				}

				// support for other well known properties in browsers
				for (i = 0; i < browserLanguagePropertyKeys.length; i++) {
					language = nav[browserLanguagePropertyKeys[i]];
					if (language && language.length) {
						console.log(language);
						return;
					}
				}

				console.log("undefine");
			};

		} ]);
