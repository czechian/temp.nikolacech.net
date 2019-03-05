$(document).ready(function() {
  var container = $('.container')
  
  $('.layout-option-input').on('change', function() {
    var value = $(this).attr('value');
    console.log(value);
    container
      .toggleClass('layout-flex', value === 'layout-flex')
      .toggleClass('layout-fixed', value === 'layout-fixed');
  })
});