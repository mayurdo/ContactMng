// config file
/*global angular*/
var myApp = angular.module("myApp", ['ui.router']);

myApp.config(function ($stateProvider, $urlRouterProvider) {

     $urlRouterProvider.when("", "/Master");

     $stateProvider
        .state("Masters", {
            url: "/Masters",
            templateUrl: "app/html/masters/master.html"
        })
        .state("Masters.CustomerMaster", {
            url:"/CustomerMaster",
            templateUrl: "app/html/masters/customerMasterEntry.html"
        })
        .state("Masters.VendorMaster", {
            url:"/VendorMaster",
            templateUrl: "app/html/masters/vendorMasterEntry.html"
        })
        .state("Masters.ItemMaster", {
            url:"/ItemMaster",
            templateUrl: "app/html/masters/itemMasterEntry.html"
        });
});