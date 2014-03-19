/**
 * @ngdoc directive
 * @name pgComponent
 * @restrict E
 *
 * @description
 * Um componente na barra de componentes que pode ser arrastado para
 * um container de componentes na tela.
 */
PrototypeGuideApp.directive('pgComponent', function () {
  return {
    restrict: 'A',
    link: function (scope, iElement, iAttrs) {

      iElement.on({
        dragstart: function(event){
          event.originalEvent.dataTransfer.setData("Text", iAttrs.pgComponent);
        }
      });
    }
  };
});

/**
 * @ngdoc directive
 * @name pgComponentContainer
 * @restrict E
 *
 * @description
 * Recipiente para soltar componentes sendo carregados na tela.
 */
PrototypeGuideApp.directive('pgComponentContainer', function ($compile) {

  var execInScope = function (angularScope, actionToExecute) {
      if (typeof actionToExecute !== typeof (function () { }))
          return;

      if (typeof angularScope === typeof undefined)
          return;

      if (angularScope.$$phase || angularScope.$root.$$phase)
          actionToExecute();
      else
          angularScope.$apply(actionToExecute);
  };

  var componentList = [];
  var containerBox = null;

  var isEmpty = function(){
    return !componentList.length > 0;
  };

  var addComponent = function(template) {
    if(containerBox != null) {
      var componentObject = jQuery(template);
      componentObject.addClass('app-component-editing');
      containerBox.append(componentObject);
      return componentObject;
    }
    return null;
  };

  var addComponent2 = function(component) {
    if(containerBox != null)
      containerBox.append(component);
  };

  return {
    restrict: 'AE',

    scope: {
      getComponent: '=',
      componentScope: '=pgComponentScope'
    },

    link: function (scope, iElement, iAttrs) {
      containerBox = iElement;
      scope.isEmpty = isEmpty;
      scope.clica = function(){ alert('clicado!'); }

      iElement.on({
        drop: function(event){
          event.originalEvent.preventDefault();

          if(typeof scope.getComponent === typeof function(){}) {
            execInScope(scope, function(){
              var id_ = event.originalEvent.dataTransfer.getData("Text");
              //var template_ = scope.getTemplate(id_);
              //if (typeof template_ != 'undefined' && template_ != null && template_.toString().length > 0) {
              //  componentList.push(id_);
              //  var added_ = addComponent(template_);
              //  //if(added_!= null)
              //  //  $compile(added_.contents())(scope);
              //};
              var component_ = scope.getComponent(id_);
              if(component_ != null) {
                componentList.push(id_);
                addComponent2(component_);
              }
            });
          }
        },

        dragover: function(event){
          event.preventDefault();
        }
      });
    }
  };
});
