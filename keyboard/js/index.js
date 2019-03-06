$(document).ready(function() {
  $('#layout-option').on('change', function() {
    var value = this.value;
    $('.container')
      .toggleClass('layout-flex', value === 'layout-flex')
      .toggleClass('layout-fixed', value === 'layout-fixed')
      .toggleClass('layout-sticky', value === 'layout-sticky')
      .toggleClass('layout-absolute', value === 'layout-absolute')
      .toggleClass('layout-mixed', value === 'layout-mixed');
  });
  
  $(window).on('resize', function() {
    document.getElementById('input').value = window.innerHeight;
  })
});