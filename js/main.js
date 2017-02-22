$(document).ready(function(){
			var touch = $('.header__nav-btn');
		    var menu = $('.header__nav');
		 
		    $(touch).on('click', function(e) {
		        e.preventDefault();
		        menu.slideToggle();
		    });
		    $(window).resize(function(){
		        var wid = $(window).width();
		        if(wid > 768 && menu.is(':hidden')) {
		            menu.removeAttr('style');
		        }
		    });
});

$(document).ready(function(){
          $('.bxslider1').bxSlider({
             nextText: '',
      	     prevText: '',
      	     controls: false,
      	     touchEnabled: false,
      	     auto: true,
      	     pause: 4000,
      	     speed: 1000
      	 });
            
});

$(document).ready(function(){
          $('.bxslider2').bxSlider({
             nextText: '',
      	     prevText: '',
      	     controls: false,
      	     touchEnabled: false,
      	     auto: true,
      	     pause: 2500,
      	     speed: 1000
      	 });
            
});

$( document ).ready(function() {
        var $container = $('.isotope');
        // filter buttons
        $('#filters button').click(function(){
            var $this = $(this);
            // don't proceed if already selected
            if ( !$this.hasClass('is-checked') ) {
                $this.parents('#options').find('.is-checked').removeClass('is-checked');
                $this.addClass('is-checked');
            }
            var selector = $this.attr('data-filter');
            $container.isotope({  itemSelector: '.item', filter: selector });
            return false;
        });
});