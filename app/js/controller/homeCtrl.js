
// controller : homeCtrl
myApp.controller("homeCtrl",["$scope",function($scope){
    $scope.menus =[
            {
                name : "Masters",
                showSubMenu:true,
                submenus :[
                            {
                                name:"Customer Master",
                                url:"Masters.CustomerMaster"
                            },
                            {
                                name:"Vendor Master",
                                url:"Masters.VendorMaster"
                            },
                            {
                                name:"Item Master",
                                url:"Masters.ItemMaster"
                            }
                          ]
            }
            ];
}]);