
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