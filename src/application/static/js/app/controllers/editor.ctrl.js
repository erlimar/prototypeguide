/**
 * @ngdoc module
 * @name EditorCtrl
 * @description
 *
 * Controller do Editor de Protótipos
 */
PrototypeGuideApp.controller('EditorCtrl', function ($scope, $compile) {
  
  /**********************************
   Consts
   ***********************************/

  var COMPONENTPREFIX = 'pg',
      COMPONENTBUTTON = 'button';


  /**********************************
   Publish methods
   ***********************************/

  $scope.export = {
    mensagem: 'Mensagem na controller EDITOR mudada!',
    clica: function() {
      alert('olá!');
    }
  };

  $scope.getComponent = function(componentId) {
    var component_ = jQuery(getTemplate(componentId));
    component_.addClass('app-component-editing');
    $compile(component_.contents())($scope);
    return component_;
  }

  $scope.mensagem = 'Mensagem na controller EDITOR!';
  $scope.mensagem2 = 'Outra msg';

  /**********************************
   Private methods
   ***********************************/

  var componentList_ = [
    {
      id: 'pg.button',
      template: '<span><button class="btn">Button</button></span>'
    },
    {
      id: 'pg.button.primary',
      template: '<span><button class="btn btn-primary">Button Primary</button></span>'
    },
    {
      id: 'pg.button.warning',
      template: '<span><button class="btn btn-warning">Button Warning</button></span>'
    },
    {
      id: 'pg.button.info',
      template: '<span><button class="btn btn-info">Button Info</button></span>'
    },
    {
      id: 'pg.button.success',
      template: '<span><button class="btn btn-success">Button Success</button></span>'
    },
    {
      id: 'pg.layout.crud1',
      template: [
        '<div class="container-fluid">',
        '  <div class="row-fluid">',
        '    <h2>CRUD #1</h2>',
        '  </div>',
        '  <div class="row-fluid">',
        '    <div class="span10">',
        '      <p>You search form here!</p>',
        '    </div>',
        '    <div class="span2">',
        '      <button class="btn">Search...</button>',
        '    </div>',
        '  </div>',
        '  <div class="row-fluid">',
        '    <div class="span10">',
        '      <p>You search form here!</p>',
        '    </div>',
        '    <div class="span2">',
        '      <button class="btn btn-success"><i class="icon-white icon-plus"></i></button>',
        '      <button class="btn btn-danger"><i class="icon-white icon-minus"></i></button>',
        '      <button class="btn btn-info"><i class="icon-white icon-edit"></i></button>',
        '    </div>',
        '  </div>',
        '  <div class="row-fluid">',
        '    <p>Layout CRUD #3</p>',
        '  </div>',
        '</div>'
      ]
    },
    {
      id: 'pg.alert',
      template: [
        '<div>',
        '  <alert type="danger">mensagem [{{ 1 + 2 }}] ({{ mensagem + \']][[\' + mensagem2 }} - {{ teste }})</alert>',
        '  <button class="btn btn-success" ng-click="teste = !teste">Muda!</button>',
        '</div>'
      ]
    },
    {
      id: 'pg.tooltip',
      template: [
        '<span>',
        '<input type="text" value="Clique aqui!" tooltip="Esta é a dica do campo"  tooltip-trigger="focus" tooltip-placement="right" class="form-control" />',
        '</span>'
      ]
    },
    {
      id: 'pg.tooltip2',
      template: [
        '<div>',
        '  <div class="form-group">',
        '    <label>Texto do Popup:</label>',
        '    <input type="text" ng-model="dynamicPopover" class="form-control" value="Digite aqui o valor">',
        '  </div>',
        '  <div class="form-group">',
        '    <label>Título:</label>',
        '    <input type="text" ng-model="dynamicPopoverTitle" class="form-control" value="Digite o valor aqui">',
        '  </div>',
        '  <button popover="{{dynamicPopover}}" popover-title="{{dynamicPopoverTitle}}" class="btn btn-default">Dynamic Popover</button>',
        '</div>'
      ]
    }
  ];

  var getTemplate = function(componentId){
    for(var idx in componentList_){
      if(componentList_[idx].id == componentId) {
        var template_ = componentList_[idx].template;
        if(Array.isArray(template_))
          template_ = template_.join('\n');
        return template_;
      }
    }
    return null;
  };

});