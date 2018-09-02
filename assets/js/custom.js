(function (factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else if (typeof module === 'object' && typeof module.exports === 'object') {
    factory(require('jquery'));
  } else {
    factory(jQuery);
  }
}(function (jQuery) {
  // Spanish
  jQuery.timeago.settings.strings = {
    prefixAgo: "hace",
    prefixFromNow: "dentro de",
    suffixAgo: "",
    suffixFromNow: "",
    seconds: "menos de un minuto",
    minute: "un minuto",
    minutes: "unos %d minutos",
    hour: "una hora",
    hours: "%d horas",
    day: "un día",
    days: "%d días",
    month: "un mes",
    months: "%d meses",
    year: "un año",
    years: "%d años"
  };
}));

/*window.addEventListener("load", function(){
	window.cookieconsent.initialise({
		"palette": {
			"popup": {
				"background": "#000"
			},
			"button": {
				"background": "#dd163b"
			}
		},
		"theme": "edgeless",
		"content": {
			"message": "Este sitio web usa cookies para mejorar la experiencia de navegación.",
			"dismiss": "Entiendo!",
			"link": "Leer mas...",
			"href": "http://politicadecookies.com/"
		}
	})
});*/

function openMobileMenu() {
  document.getElementById("mobile-menu").style.width = "250px";
}

function closeMobileMenu() {
  document.getElementById("mobile-menu").style.width = "0";
}

$(document).ready(function(){
  jQuery("time.timeago").timeago();
   
  $affbar_deals = Cookies.get('affdeals');
  if (!$affbar_deals) {
    $(".affbar").slideDown("slow");
    $(".affbar-close").click(function(){
      Cookies.set('affdeals', '1');
      $(".affbar").slideUp("slow");
    });
  }
  
  if ($('.back-to-top').length) {
    var scrollTrigger = 500,
    backToTop = function () {
      var scrollTop = $(window).scrollTop();
      if (scrollTop > scrollTrigger) {
        $('.back-to-top').addClass('show');
      } else {
        $('.back-to-top').removeClass('show');
      }
    };
    
    backToTop();
    
    $(window).on('scroll', function () {
      backToTop();
    });
    
		$('.back-to-top').on('click', function (e) {
      e.preventDefault();
      $('html,body').animate({
        scrollTop: 0
      }, 700);
    });
  }

  var $el, $ps, $up, totalHeight;
  
  $(".panel .read-more-link").click(function() {  
    totalHeight = 30
    
    $el = $(this);
    $p  = $el.parent();
    $up = $p.parent();
    $ps = $up.find("a:not('.read-more')");
    
    $ps.each(function() {
      totalHeight += $(this).outerHeight();
    });
    
    $up
    .css({
      "height": $up.height(),
      "max-height": 9999
    })
    .animate({
      "height": totalHeight
    });
    
    $p.fadeOut();
    return false;
  });
});
