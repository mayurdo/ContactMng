
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