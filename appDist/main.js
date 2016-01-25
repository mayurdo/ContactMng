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

// Factory : controlsFactory
myApp.factory("controlsFactory",function(){
    
    var factory={};
    
    factory.controls=[
        // Page : Customer Master
    { page:"CustomerMaster", name:"SupplierCode", id:"supplierCode",labelClass:"col-sm-4",labelText:"Supplier Code",inputDivClass:"col-sm-8",inputClass:"",placeholder:"Supplier Code"},
    { page:"CustomerMaster",name:"CompanyName", id:"companyName",labelClass:"col-sm-4",labelText:"Company Name",inputDivClass:"col-sm-8",inputClass:"",placeholder:"Company Name"},
    { page:"CustomerMaster",name:"ContactPerson", id:"contactPerson",labelClass:"col-sm-4",labelText:"Contact Person",inputDivClass:"col-sm-8",inputClass:"",placeholder:"Contact Person"}

        ];
        
        return factory;
});

// factory : methodHelper
myApp.factory("methodHelper",function(){
   
   var factory={};
   
   factory.enterOnlyNumber=function(element){
            element.bind("keydown keypress", function (event) {
                if((event.which >= 48 && event.which<=57) || (event.which >= 96 && event.which<=105)
                        || event.which===8 || (event.shiftKey || event.ctrlKey || event.altKey)) {
                   return;
                }
                 event.preventDefault();
            });
   }
   
   return factory;
});

// Directive : m-form-group
myApp.directive("mFormGroup",function(controlsFactory){
    return{
      restric : "E",
      scope:{
          pagename:"=",
          controlname:"="
      },
      templateUrl:"app/html/templates/formGroup.html",
      link: function (scope,element, attribute ) {
        
        for(var i=0;i<=controlsFactory.controls.lengh;i++)
        {
            if(controlsFactory.controls[i].name===scope.controlName)      
            {
              scope.options=controlsFactory.controls[i];
            }
        }
        }
    };
})

// Directive : left-menu
myApp.directive("mLeftMenu",function(){
    return{
      restric : "E",
      scope:{
          menulist:"="
      },
      templateUrl:"app/html/templates/menuTemp.html",
      link: function(scope,element,attribute){
          
          scope.toggleMenu=function(menu){
              if(menu.showSubMenu){
                  menu.showSubMenu=false;
              }else{
                  menu.showSubMenu=true;
              }
          }
      }
    };
})

// Directive : mobile-no
myApp.directive("mMobileNo",function(methodHelper){
    return{
        restric:"A",
        scope:{},
        compile: function (element, attribute ) {
            // add lengh attribute
            element.attr("minlength", "10");
            element.attr("maxlength", "12");
            
            // restrict to enter only number
            methodHelper.enterOnlyNumber(element);
        }
    }
});

// Directive : phone-no
myApp.directive("mPhoneNo",function(methodHelper){
    return{
        restric:"A",
        scope:{},
        compile: function (element, attribute ) {
            // add lengh attribute
            element.attr("maxlength", "12");
            
            // restrict to enter only number
            methodHelper.enterOnlyNumber(element);
        }
    }
});

// Directive : pin-code
myApp.directive("mPinCode",function(methodHelper){
    return{
        restric:"A",
        scope:{},
        compile: function (element, attribute ) {
            // add max lengh attribute
            element.attr("maxlength", "6");
            
            // restrict to enter only number
            methodHelper.enterOnlyNumber(element);
        }
    }
});

// Directive : sr-no
myApp.directive("mSrNo",function(methodHelper){
    return{
        restric:"A",
        scope:{},
        compile: function (element, attribute ) {
            // disable text box
            element.attr("disabled","disabled");
        }
    }
});

// Controller : customerMasterCtrl
myApp.controller("customerMasterCtrl",["$scope",function($scope){
    
    
    
}]);

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