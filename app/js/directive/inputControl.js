
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