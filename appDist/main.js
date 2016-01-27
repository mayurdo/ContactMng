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
    { page:"CustomerMaster", name:"SrNo", id:"SrNo",labelClass:"col-sm-4",labelText:"Sr No",inputDivClass:"col-sm-8",inputClass:"",placeholder:"Sr No",inputtype:"textbox"},
    { page:"CustomerMaster", name:"SupplierCode", id:"SupplierCode",labelClass:"col-sm-4",labelText:"Supplier Code",inputDivClass:"col-sm-8",inputClass:"",placeholder:"Supplier Code",inputtype:"textbox"},
    { page:"CustomerMaster",name:"CompanyName", id:"CompanyName",labelClass:"col-sm-4",labelText:"Company Name",inputDivClass:"col-sm-8",inputClass:"",placeholder:"Company Name",inputtype:"textbox"},
    { page:"CustomerMaster",name:"ContactPerson", id:"ContactPerson",labelClass:"col-sm-4",labelText:"Contact Person",inputDivClass:"col-sm-8",inputClass:"",placeholder:"Contact Person",inputtype:"textbox"},
    { page:"CustomerMaster",name:"MobileNo", id:"MobileNo",labelClass:"col-sm-4",labelText:"Mobile No",inputDivClass:"col-sm-8",inputClass:"",placeholder:"Mobile No",inputtype:"mobileno"},
    { page:"CustomerMaster",name:"PhoneNo", id:"PhoneNo",labelClass:"col-sm-4",labelText:"Phone No",inputDivClass:"col-sm-8",inputClass:"",placeholder:"Phone No",inputtype:"phoneno"},
    { page:"CustomerMaster",name:"EmailId", id:"EmailId",labelClass:"col-sm-4",labelText:"Email Id",inputDivClass:"col-sm-8",inputClass:"",placeholder:"Email Id",inputtype:"email"},
    { page:"CustomerMaster",name:"Website", id:"Website",labelClass:"col-sm-4",labelText:"Website",inputDivClass:"col-sm-8",inputClass:"",placeholder:"Website",inputtype:"textbox"},
    { page:"CustomerMaster",name:"OfficeAddressLine1", id:"OfficeAddressLine1",labelClass:"col-sm-4",labelText:"Address Line 1",inputDivClass:"col-sm-8",inputClass:"",placeholder:"Office Address Line 1",inputtype:"textbox"},
    { page:"CustomerMaster",name:"OfficeAddressLine2", id:"OfficeAddressLine2",labelClass:"col-sm-4",labelText:"Address Line 2",inputDivClass:"col-sm-8",inputClass:"",placeholder:"Office Address Line 2",inputtype:"textbox"},
    { page:"CustomerMaster",name:"OfficeAddressLine3", id:"OfficeAddressLine3",labelClass:"col-sm-4",labelText:"Address Line 3",inputDivClass:"col-sm-8",inputClass:"",placeholder:"Office Address Line 3",inputtype:"textbox"},
    { page:"CustomerMaster",name:"OfficeCity", id:"OfficeCity",labelClass:"col-sm-4",labelText:"City",inputDivClass:"col-sm-8",inputClass:"",placeholder:"Office City",inputtype:"textbox"},
    { page:"CustomerMaster",name:"OfficeState", id:"OfficeState",labelClass:"col-sm-4",labelText:"State",inputDivClass:"col-sm-8",inputClass:"",placeholder:"Office State",inputtype:"textbox"},
    { page:"CustomerMaster",name:"OfficePin", id:"OfficePin",labelClass:"col-sm-4",labelText:"Pin",inputDivClass:"col-sm-8",inputClass:"",placeholder:"Office Pin",inputtype:"pin"},
    { page:"CustomerMaster",name:"FactoryAddressLine1", id:"FactoryAddressLine1",labelClass:"col-sm-4",labelText:"Address Line 1",inputDivClass:"col-sm-8",inputClass:"",placeholder:"Factory Address Line 1",inputtype:"textbox"},
    { page:"CustomerMaster",name:"FactoryAddressLine2", id:"FactoryAddressLine2",labelClass:"col-sm-4",labelText:"Address Line 2",inputDivClass:"col-sm-8",inputClass:"",placeholder:"Factory Address Line 2",inputtype:"textbox"},
    { page:"CustomerMaster",name:"FactoryAddressLine3", id:"FactoryAddressLine3",labelClass:"col-sm-4",labelText:"Address Line 3",inputDivClass:"col-sm-8",inputClass:"",placeholder:"Factory Address Line 3",inputtype:"textbox"},
    { page:"CustomerMaster",name:"FactoryCity", id:"FactoryCity",labelClass:"col-sm-4",labelText:"City",inputDivClass:"col-sm-8",inputClass:"",placeholder:"Factory City",inputtype:"textbox"},
    { page:"CustomerMaster",name:"FactoryState", id:"FactoryState",labelClass:"col-sm-4",labelText:"State",inputDivClass:"col-sm-8",inputClass:"",inputtype:"textbox"},
    { page:"CustomerMaster",name:"FactoryPin", id:"FactoryPin",labelClass:"col-sm-4",labelText:"Pin",inputDivClass:"col-sm-8",inputClass:"",inputtype:"pin"}
    
    

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
        
        var control=  _.find(controlsFactory.controls,function(control){
                                 return ((control.page===attribute.pagename) 
                                                && (control.name===attribute.controlname));
                              });
                              
        scope.options=control;
        
      }
    };
})

// Directive : m-input
myApp.directive("mInput",function(){
    return{
      restric : "E",
      scope:{
          mType:"=",
          mOptions:"="
      },
      templateUrl:"app/html/templates/inputControl.html"
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

// Directive : m-mobile-no
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