userControllers.controller('userController', [ '$route','$scope', '$location',  '$http', function ($route,$scope, $location, $http) {

	console.log("userController loaded");
	var self = this;

	$scope.userResponse = [];
	
	$scope.totalUsers = [1, 2, 3, 4, 5, 6, 7];
	
	$scope.maxNoOfUsers = 0;
	
	$scope.maxChartHeight = 0;
	
	$scope.selectedChartType = "days";
	
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


    $scope.products = window.products? window.products : [{productName:'latte',src:'image/coffee.jpg',price:3.7,size:'L'},
        {productName:'cappuccino',src:'image/cappa.jpg',price:3.0,size:'S'},
        {productName:'banana cake',src:'image/banana_cake.jpg',price:5.5,size:''}
    ];
    $scope.product = {};
    $scope.addNewProduct = function () {
        $scope.products.push($scope.product);
        window.products =  $scope.products;
        $location.path('/coffeelist');
    };
    
    $scope.loadfile=function (target) {
        var reader = new FileReader();
        reader.onload = function(){
            $scope.product.src = reader.result;
        };
        reader.readAsDataURL(target.files[0]);
    }

}]);



	