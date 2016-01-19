/**
 * Created by vishu on 18/1/16.
 */
var app = angular.module('demo', []);

function demoController($scope){
    console.log('inside controller');
    $scope.message = 'from angularjs';
    $scope.options = {
        facebook : true,
        google : true,
        twitter : false
    };
}
app.controller('ChoreCtrl', function ($scope) {
    $scope.loginChore = function (chore) {
        alert(chore +' inside loginChore');
    }
    $scope.ctrlFlavor = "Blueberry";
    $scope.ctrlFlavors = "Blueberryssssss";
});

app.directive('kid', function () {
    return {
        restrict: 'E',
        scope:{
            done: '&'
        },
        template : '<input type="text" ng-model="chore">'+ '{{ chore }} ' +'<div class="btn btn-success" ng-click="done({chore:chore})">I am done</div>'
    }
});


app.directive('drink', function () {
    return {
        scope: {
            flavor:'@'
        },
        template :'<div>{{ flavor }}</div>'
    }
})

app.directive('superMan', function(){
    return {
        restrict:'E',
        template: '<div>This is custom directive template</div>'
    }
});

app.directive('enter', function () {
    return {
        link : function (scope, element, attr){
           element.bind('mouseenter', function () {
               console.log('inside mouseenter');
           });
        }
    }
});

app.directive('leaves', function () {
   return {
       link : function (scope, element, attr) {
           element.bind('mouseleave', function () {
               console.log('inside mouseleave');
           })
       }
   }
});

app.directive('inputHover', function () {
    return {
        link: function (scope, element) {
            element.hover(function () {
               console.log('inside hover event');
            });
        }
    }

});



app.directive('btnCheckbox', function(){
    return {
        require: 'ngModel',
        link: function (scope, element,  attr, ngModel){
                scope.$watch(function(){
                    return ngModel.$modelValue;
                },function(modelValue){
                    if (modelValue){
                        element.addClass('active');
                    } else {
                        element.removeClass('active');
                    };
                });

                element.bind('click',function (){
                    console.log('element clicked');
                    scope.$apply(function(){
                        ngModel.$setViewValue(element.hasClass("active") ? false : true);
                    });
                })

            }
    }

});

