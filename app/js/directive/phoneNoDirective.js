
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