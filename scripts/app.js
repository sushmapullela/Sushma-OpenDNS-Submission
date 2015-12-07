var app = angular.module('app',['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    .when('/page1',{
        templateUrl: 'page1.html',
        controller: 'pageCtrl'
    })
    .when('/page2',{
        templateUrl: 'page2.html',
        controller: 'pageCtrl'
    })
    .otherwise('/page1');
})

//Directives
app.directive('blogFeed',function(){
	return{
		restrict: 'E',
		replace: true,
		templateUrl: 'blogFeed.html',
		link: function(scope,element,attr){
			
		}
	}
})

app.directive('footer',function(){
	return{
		restrict: 'E',
		replace: true,
		templateUrl: 'footer.html',
		link: function(scope,element,attr){
			
		}
	}
})

app.directive('header',function(){
    return{
        restrict: 'E',
        replace: true,
        templateUrl: 'header.html',
        link: function(scope,element,attrs){
            
        }
    }
})

app.directive('hero',function(){
	return{
		restrict: 'E',
		replace: true,
		templateUrl: 'hero.html',
		link: function(scope,element,attr){
			
		}
	}
})

app.directive('learnMore',function(){
    return{
        restrict: 'E',
        replace: true,
        templateUrl: 'learnMore.html',
        link: function(scope,element,attr){
            element.find('.main-content').hide();
            scope.showContent = function(id){
                element.find('.overlay-content-'+id).hide();
                element.find('.main-content-'+id).show();
            }
        }
    }
})

app.directive('statistics',function(){
    return{
        restrict: 'E',
        replace: true,
        templateUrl: 'statistics.html',
        link: function(scope,element,attr){
            element.find('.content').on('mouseover',function(){
                $('.content').css('z-index','0');
                $(this).css('z-index','2');
            })
        }
        
        
    }
})

app.directive('testimonial',function(){
	return{
		restrict: 'E',
		replace: true,
		templateUrl: 'testimonial.html',
		link: function(scope,element,attr){
			element.find('.test-content').hide();
			element.find('.netflix').show();
            element.find('.btn-netflix').addClass('active');
			scope.showTestimonial = function(id){
                element.find('.tab-btn').removeClass('active');
                element.find('.btn-'+id).addClass('active');
				element.find('.test-content').hide();
				element.find('.'+id).show();
			}
            /*element.find('.tab-btn').on('mouseenter',function(){
                $(this).css('background-color','rgba(255,255,255,0.4)');
            })
            element.find('.tab-btn').on('mouseleave',function(){
                $(this).css('background-color','transparent');
            })*/
		}
	}
})

//Controllers

app.controller('pageCtrl',['$scope','$http',function($scope,$http){
    
    /*$http.jsonp('https://blog.opendns.com/?format=json&data=blog&post_count=4​')
            .success(function (response) {
                 $scope.response = angular.fromJson(response);
                 console.debug($scope.response);
            })
            .error(function (data, status, headers, config) {
            });*/
    
    //data for blog post
    $scope.blogs = [{
                title:{
                    icon: 'images/company-blog-icon.png',
                    title: 'COMPANY BLOG'
                },
                content:'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet',
                date: 'JUNE 12,2015',
                bg: 'images/blog-1-no-overlay.jpg',
                overlay: 'rgba(255,0,0,0.5)'
            },{
                title:{
                    icon: 'images/security-labs-blog-icon.png',
                    title: 'SECURITY LABS BLOG'
                },
                content:'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet',
                date: 'JUNE 10,2015',
                bg: 'images/blog-2-no-overlay.jpg',
                overlay: 'rgba(0,255,0,0.5)'
            },{
                title:{
                    icon: 'images/company-blog-icon.png',
                    title: 'COMPANY BLOG'
                },
                content:'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet',
                date: 'JUNE 15,2015',
                bg: 'images/blog-3-no-overlay.jpg',
                overlay: 'rgba(0,0,255,0.5)'
            },{
                title:{
                    icon: 'images/engineering-blog-icon.png',
                    title: 'ENGINEERING BLOG'
                },
                content:'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet',
                date: 'JUNE 22,2015',
                bg: 'images/blog-4-no-overlay.jpg',
                overlay: 'rgba(0,255,255,0.5)'
            }]
}])

