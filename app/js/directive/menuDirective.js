
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