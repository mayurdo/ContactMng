
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