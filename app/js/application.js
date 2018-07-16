"use strict";

function prepare_modals() {
  $('.js-open-modal').click(function () {
      let target = $(this).data('target');
      console.log(target);
      $('.modal').fadeOut(100);
      $(`${target}`).fadeIn(400);
      $('.blur').css('filter', 'blur(3px)');
      document.onmousewheel = document.onwheel = function () {
          return false;
      }
  })
  if ($(window).width() <= '750') {
      $('.js-open-modal').click(function () {
          $(`${target}`).fadeIn(400);
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
              || $('.js-close-modal').is(e.target)) {
          $('.modal').fadeOut(100);
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
  if (elem) {
    var init = new Switchery(elem, { color: '#ff4222', className: 'switchery switchery-sm' });
  }
  $(".js-show-answer").click(function () {
    $(this).parents(".faq-question").addClass("active");
    let cl = $(this).parents(".faq-show-answer").siblings(".js-answer");
    cl.show("slow");
    // cl.css('height', 'auto');
    $(this).hide();
  });
  $(".js-hide-answer").click(function () {
    $(this).parents(".faq-question").removeClass("active");
    let link = $(this).parents(".faq-question").find(".js-show-answer");
    let cl = $(this).parents(".js-answer");
    // cl.css('height', '0');
    cl.hide("slow");
    link.show();
  })
})