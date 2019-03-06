$(document).ready(function() {
  var container = $('.container')
  
  $('#layout-option').on('change', function() {
    var value = this.value;
    container
      .toggleClass('layout-flex', value === 'layout-flex')
      .toggleClass('layout-fixed', value === 'layout-fixed')
      .toggleClass('layout-sticky', value === 'layout-sticky')
      .toggleClass('layout-absolute', value === 'layout-absolute')
      .toggleClass('layout-mixed', value === 'layout-mixed');
  })
});