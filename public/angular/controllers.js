'use strict';

controllers.controller('bodyController', ['$scope', '$log', '$http',BodyController]);
function BodyController($scope, $log, $http){
        console.log("angular OK");
}


controllers.controller('LayoutController', ['$mdMedia', '$scope', LayoutController]);
function LayoutController($mdMedia, $scope) {
    var self = this;
    self.title = 'Simple Layout';
    self.sectionTitle = 'Section #1';
    self.sectionBody = 'This is a simple section.';

    $scope.$watch(function(){
        return $mdMedia('xs') ? 'small' : 'large';
    },
    function(size){
        self.screenSize = size;
    })
}
