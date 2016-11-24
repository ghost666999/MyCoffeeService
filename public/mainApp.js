var mainAppModule = angular.module('mainApp', ['ngRoute', 'userControllers' ]);
var userControllers = angular.module('userControllers', []);


	mainAppModule.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.
			when('/', {
				templateUrl: 'views/signin.html',
				controller: 'userController'
			})
            .when('/promotion', {
                templateUrl: 'views/promotion.html',
                controller: 'userController'
            })
            .when('/signin', {
                templateUrl: 'views/signin.html',
                controller: 'userController'
            })
            .when('/coffeelist', {
                templateUrl: 'views/coffeelist.html',
                controller: 'userController'
            })
            .when('/addcoffee', {
                templateUrl: 'views/addcoffee.html',
                controller: 'userController'
            })
            .when('/analysis', {
                templateUrl: 'views/user-analysis.html',
                controller: 'userController'
            })
	}]);


var promotionCount = 0;
var promotionsList = [];
$(document).ready(function() {

})

function addContent() {
    var title = $('#title').val();
    var details = $('#details').val();

    if (!title) {
        $('#title').focus();
        return;
    }
    if (!details) {
        $('#details').focus();
        return;
    }
    createContent(title, details);
}

function createContent(title, details) {
    var promotion = "<div class=\"panel panel-default\" id=\"panel"+promotionCount+"\">";
    promotion = promotion + "<div class=\"panel-heading\">";
    promotion = promotion + "<h5 class=\"panel-title\">";
    promotion = promotion + "<a class=\"inline-block\" data-toggle=\"collapse\" data-parent=\"#promotions-list\" href=\"#"+promotionCount+"\"> <div id=\"promotion"+promotionCount+"title\">";
    promotion = promotion + title + "</div></a><button class=\"btn btn-default btn-xs inline-block float-right\" onclick=\"removeContent('panel"+promotionCount+"')\">-</button></h5>";
    promotion = promotion + "</div>";
    promotion = promotion + "<div id=\""+promotionCount+"\" class=\"panel-collapse collapse\">";
    promotion = promotion + "<div class=\"panel-body\" style=\"padding:0px\">"+"<div data-spy=\"scroll\"  data-target=\"#navbarExample\" data-offset=\"0\" class=\"scrollspy-example\" style=\"padding:10px;height:100%;width:100%;border:0px solid black;\" id=\"job"+promotionCount+"body\">";
    promotion = promotion + details + "</div>";
    promotion = promotion + "</div></div>"
    promotion = promotion + "</div>";
    $("#promotions").append(promotion);

    $("#promotions").sortable({
        connectWith: ".col-md-12.win"
    }).disableSelection();
    promotionCount += 1;
}

function removeContent(id) {
    $("#"+id).remove();
}