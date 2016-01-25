
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