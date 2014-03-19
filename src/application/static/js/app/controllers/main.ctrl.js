/**
 * @ngdoc module
 * @name MainCtrl
 * @description
 *
 * Controller global do aplicativo.
 */
PrototypeGuideApp.controller('MainCtrl', function ($scope) {
  
  // Propriedades privadas da Controller
  var internal = {

    // Definição de classe CSS para tamanho do container de
    // conteúdo em modo "Normal"
    spanClassContentNormal: 'span9',

    // Definição de classe CSS para tamanho do container de
    // conteúdo em modo "Full Screen"
    spanClassContentFullScreen: 'span11',

    // Definição de estilo CSS para container em modo "Normal"
    styleContainerNormal: {
      'padding-top': '60px',
      'padding-bottom': '70px'
    },

    // Definição de estilo CSS para container em modo "Normal"
    styleContainerFullScreen: {
      'padding-top': '20px',
      'padding-bottom': '60px'
    }
  };

  $scope.mensagem = 'Mensagem na controller MAIN!';

  // Controla de está ou não no modo de tela cheia
  $scope.fullScreen = false;

  // Classe que controla o tamanho do container de conteúdo
  // entre os modos "Full Screen" e "Normal"
  $scope.spanClassContent = internal.spanClassContentNormal;

  // Estilo CSS que controla a aparência do container de conteúdo
  // entre os modos "Full Screen" e "Normal"
  $scope.styleContainer = internal.styleContainerNormal;

  /**
   * @ngdoc method
   * @name MainCtrl#changeFullScreen
   *
   * @description
   * Altera entre o modo de tela cheia (full screen) e o modo normal.
   * Não se trata do modo full screen do navegador. Somente retira alguns
   * elementos da tela para focar no conteúdo.
   */
  $scope.toggleFullScreen = function() {
    $scope.fullScreen = !$scope.fullScreen;

    $scope.spanClassContent = $scope.fullScreen
      ? internal.spanClassContentFullScreen
      : internal.spanClassContentNormal;

    $scope.styleContainer = $scope.fullScreen
      ? internal.styleContainerFullScreen
      : internal.styleContainerNormal;

    if($scope.fullScreen) {
      jQuery('.app-component-editing')
        .removeClass('app-component-editing')
        .addClass('app-component-editing-full');
    }else{
      jQuery('.app-component-editing-full')
        .removeClass('app-component-editing-full')
        .addClass('app-component-editing');
    }
  };
});