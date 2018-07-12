"use strict";

function prepare_modals() {
  $('.js-open-modal').click(function () {
      let target = $(this).data('target');
      $(`#${target}`).fadeIn(400);
      $('.blur').css('filter', 'blur(3px)');
      document.onmousewheel = document.onwheel = function () {
          return false;
      }
  })
  if ($(window).width() <= '750') {
      $('.js-open-modal').click(function () {
          $(`#${target}`).fadeIn(400);
          $('.blur').css('filter', 'blur(3px)');
          $('body').css('overflow', 'hidden');
          document.onmousewheel = document.onwheel = function () {
              return false;
          }
      })
  }
  $(document).mouseup(function (e) {
      var div = $(".modal__content");
      if (!div.is(e.target)
              && div.has(e.target).length === 0
              || $('.modal__close').is(e.target)) {
          $('.modal').fadeOut(400)
          $('.blur').css('filter', '')
          $('body').css('overflow', '')
          document.onmousewheel = document.onwheel = function () {
              return true;
          }
      }
  });
  
}

$(document).ready(function () {
  prepare_modals();
  var Switchery = require('switchery');
  var elem = document.querySelector('.js-switch');
  var init = new Switchery(elem, { color: '#ff4222', className: 'switchery switchery-sm' });
})