
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