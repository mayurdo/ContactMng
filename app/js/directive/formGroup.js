
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