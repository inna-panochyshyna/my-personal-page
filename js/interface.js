( function($) {
  'use strict';



  	/*-------------------------------------------------------------------------------
	  Detect mobile device 
	-------------------------------------------------------------------------------*/



	var mobileDevice = false; 

	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	  	$('html').addClass('mobile');
	  	mobileDevice = true;
	}

	else{
		$('html').addClass('no-mobile');
		mobileDevice = false;
	}



    /*-------------------------------------------------------------------------------
	  Window load
	-------------------------------------------------------------------------------*/



	$(window).load(function(){

		$('.loader').fadeOut();

    	var wow = new WOW({
		    offset: 150,          
		    mobile: false
		  }
		);
		wow.init();
	});

	var navbar=$('.js-navbar-affix');
	var windowHeight=$(window).height();
	var navbarAffixHeight=79




	/*-------------------------------------------------------------------------------
	  Smooth scroll to anchor
	-------------------------------------------------------------------------------*/



    $('.js-target-scroll, .navbar-nav li a[href^="#"]').on('click', function() {
        var target = $(this.hash);
        if (target.length) {
            $('html,body').animate({
                scrollTop: (target.offset().top - navbarAffixHeight + 1)
            }, 1000);
            return false;
        }
    });



    /*-------------------------------------------------------------------------------
	  Affix
	-------------------------------------------------------------------------------*/



	navbar.affix({
	  offset: {
	    top: navbarAffixHeight
	  }
	});

	navbar.on('affix.bs.affix', function() {
		if (!navbar.hasClass('affix')){
			navbar.addClass('animated slideInDown');
		}
	});

	navbar.on('affixed-top.bs.affix', function() {
	  	navbar.removeClass('animated slideInDown');
	  	$('.navbar-collapse').collapse('hide');
	});



	/*-------------------------------------------------------------------------------
	 Navbar collapse
	-------------------------------------------------------------------------------*/



	$('.navbar-collapse').on('show.bs.collapse', function () {
	 	navbar.addClass('affix');
	});

	$('.navbar-collapse').on('hidden.bs.collapse', function () {
		if (navbar.hasClass('affix-top')){
			navbar.removeClass('affix');
		}
	});

	$(".navbar-nav > li > a").on('click', function() {
	    $(".navbar-collapse").collapse('hide');
	});



	/*-------------------------------------------------------------------------------
	 Scrollspy
	-------------------------------------------------------------------------------*/



	$('body').scrollspy({
		offset:  navbarAffixHeight + 1
	});

	
	/*-------------------------------------------------------------------------------
	  Parallax
	-------------------------------------------------------------------------------*/



	if(!mobileDevice){
		$(window).stellar({
		  	responsive: true,
		  	horizontalScrolling: false,
		  	hideDistantElements: false,
		  	horizontalOffset: 0,
		  	verticalOffset: 0
		});
	}


	
	/*-------------------------------------------------------------------------------
	  Progress bar
	-------------------------------------------------------------------------------*/


	function progress_bars() {
		$(".progress .progress-bar:in-viewport").each(function() {
			if (!$(this).hasClass("animated")) {
				$(this).addClass("animated");
				$(this).width($(this).attr("data-width") + "%");
			}
			
		});
	}

	$(window).scroll(function() {
		progress_bars();
	});



	/*-------------------------------------------------------------------------------
	  Isotope
	-------------------------------------------------------------------------------*/



    $('.isotope').each(function() {		
		var $container = $(this);
		$container.imagesLoaded( function(){
			$container.isotope({		 
				itemSelector: '.isotope-item',
				percentPosition: true,
				layoutMode: 'masonry',	
				masonry: {
				  columnWidth: '.isotope-item'
				}	
			});	
		});
    }); 

})(jQuery);
