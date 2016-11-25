userControllers.controller('userController', [ '$scope', '$location',  '$http', function ($scope, $location, $http) {

	console.log("userController loaded");
	var self = this;

	$scope.userResponse = [];
	
	$scope.totalUsers = [1, 2, 3, 4, 5, 6, 7];
	
	$scope.maxNoOfUsers = 0;
	
	$scope.maxChartHeight = 0;
	
	$scope.selectedChartType = "days";

	$scope.promotion = {};

	$scope.promotions = [];
	
	$scope.getBarHeight = function (noOfUsers) {
		var height = noOfUsers/$scope.maxNoOfUsers * 95;
		return Math.round(height * 100) / 100;
	},
	
	$scope.updateChart = function () {
		console.log('update chart is called');
		var chartType = $scope.selectedChartType;
		var chartData = [];
		
		switch (chartType) {
			case 'monthly':
                chartData = $scope.userResponse.chartDataMonthly;
				break;
			case 'yearly':
				chartData = $scope.userResponse.chartDataYearly;
				break;
            case 'weekly':
                chartData = $scope.userResponse.chartDataWeekly;
                break;
			default:
				chartData = $scope.userResponse.chartDataDays;
				break;
		}

        self.getMaxNo(chartData);
		$scope.userResponse.chartData = chartData;
	}

	$scope.addPromotions = function () {
		$scope.promotions.push({
			"header": $scope.promotion.header,
			"desc": $scope.promotion.desc,
			"className": "collapse"
		})
	}

	$scope.showPromotion = function (index) {
		var className = $scope.promotions[index].className === "active" ? "collapse" : "active";
		$scope.promotions[index].className = className;
	}

	$scope.removePromotion = function (index) {
		$scope.promotions.splice(index, 1);
	}
	
	
	$http.get('responses/userengagments.json').then(function(response) {
	    var data = response.data;
		$scope.userResponse = data;
		$scope.updateChart();
		
	});
	
	self.getMaxNo = function (chartData) {
		var arr = [];
		angular.forEach(chartData, function(obj, key) {
			console.log(obj);
			arr.push(obj.noOfUsers);	
		}, this);		
		
		$scope.maxNoOfUsers = Math.max.apply( Math, arr );
		return $scope.maxNoOfUsers;
		
	}


}]);



	