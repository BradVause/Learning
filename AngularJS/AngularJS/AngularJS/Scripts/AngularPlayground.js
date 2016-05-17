

angular.module("root", [])//module is the logical container for components
    .controller("index", ["$scope", function ($scope) { //controller is a function which augments the scope with data, functions, and whatnot.
        $scope.message = "Hello World";
    }])
    .controller("twoway", ["$scope", function ($scope) { //note - I can declare multiple controllers off the same module
        $scope.Header = "How about some 2 way Binding?";

        $scope.favouriteWord; //using ng-model directive, ui controls are bound to these variables
        $scope.favouriteColor;
        $scope.favouriteShape;

    }])
    .controller("bindingClasses", ["$scope", function ($scope) { //note - your scope must be declared with a $ - otherwise it won't work
        $scope.Title = "Binding CSS Classes";

        $scope.value = 1;

        $scope.isBold = function () { return $scope.value % 2 === 0; };
        $scope.isItalic = function () { return $scope.value % 3 === 0; };
        $scope.isUnderlined = function () { return $scope.value % 5 === 0; };
        $scope.getColor = function () { return $scope.value > 10; };
    }])
    .controller("repeaters", ["$scope", function ($scope) {
        $scope.Title = "Repeaters, iterations, collections";
        $scope.Products = [
			{ id: 1, name: "Hockey puck" },
			{ id: 2, name: "Golf club" },
			{ id: 3, name: "Baseball bat" },
			{ id: 4, name: "Lacrosse stick" }
        ];
    }])
    .controller("ctlShowingHiding", ["$scope", function ($scope){
        $scope.Title = "Showing and Hiding Elements";

        $scope.isFirstElementVisible = true;
        $scope.secondElementShouldExist = true;
    }]);