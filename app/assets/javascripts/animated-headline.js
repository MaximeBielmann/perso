jQuery(document).ready(function($){
	//set animation timing
	var animationDelay = 2500,
		//loading bar effect
		barAnimationDelay = 3800,
		barWaiting = barAnimationDelay - 3000, //3000 is the duration of the transition on the loading bar - set in the scss/css file
		//letters effect
		lettersDelay = 50,
		//type effect
		typeLettersDelay = 150,
		selectionDuration = 500,
		typeAnimationDelay = selectionDuration + 800,
		//clip effect 
		revealDuration = 800,
		revealAnimationDelay = 1500;
	
	initHeadline();
	

	function initHeadline() {
		//insert <i> element for each letter of a changing word
		singleLetters($('.cd-headline.letters').find('b'));
		//initialise headline animation
		animateHeadline($('.cd-headline'));
	}

	function singleLetters($words) {
		$words.each(function(){
			var word = $(this),
				letters = word.text().split(''),
				selected = word.hasClass('is-visible');
			for (i in letters) {
				if(word.parents('.rotate-2').length > 0) letters[i] = '<em>' + letters[i] + '</em>';
				letters[i] = (selected) ? '<i class="in">' + letters[i] + '</i>': '<i>' + letters[i] + '</i>';
			}
		    var newLetters = letters.join('');
		    word.html(newLetters).css('opacity', 1);
		});
	}

	function animateHeadline($headlines) {
		var duration = animationDelay;
		$headlines.each(function(){
			var headline = $(this);
			
			if(headline.hasClass('loading-bar')) {
				duration = barAnimationDelay;
				setTimeout(function(){ headline.find('.cd-words-wrapper').addClass('is-loading') }, barWaiting);
			} else if (headline.hasClass('clip')){
				var spanWrapper = headline.find('.cd-words-wrapper'),
					newWidth = spanWrapper.width() + 10
				spanWrapper.css('width', newWidth);
			} else if (!headline.hasClass('type') ) {
				//assign to .cd-words-wrapper the width of its longest word
				var words = headline.find('.cd-words-wrapper b'),
					width = 0;
				words.each(function(){
					var wordWidth = $(this).width();
				    if (wordWidth > width) width = wordWidth;
				});
				headline.find('.cd-words-wrapper').css('width', width);
			};

			//trigger animation
			setTimeout(function(){ hideWord( headline.find('.is-visible').eq(0) ) }, duration);
		});
	}

	function hideWord($word) {
		var nextWord = takeNext($word);
		
		if($word.parents('.cd-headline').hasClass('type')) {
			var parentSpan = $word.parent('.cd-words-wrapper');
			parentSpan.addClass('selected').removeClass('waiting');	
			setTimeout(function(){ 
				parentSpan.removeClass('selected'); 
				$word.removeClass('is-visible').addClass('is-hidden').children('i').removeClass('in').addClass('out');
			}, selectionDuration);
			setTimeout(function(){ showWord(nextWord, typeLettersDelay) }, typeAnimationDelay);
		
		} else if($word.parents('.cd-headline').hasClass('letters')) {
			var bool = ($word.children('i').length >= nextWord.children('i').length) ? true : false;
			hideLetter($word.find('i').eq(0), $word, bool, lettersDelay);
			showLetter(nextWord.find('i').eq(0), nextWord, bool, lettersDelay);

		}  else if($word.parents('.cd-headline').hasClass('clip')) {
			$word.parents('.cd-words-wrapper').animate({ width : '2px' }, revealDuration, function(){
				switchWord($word, nextWord);
				showWord(nextWord);
			});

		} else if ($word.parents('.cd-headline').hasClass('loading-bar')){
			$word.parents('.cd-words-wrapper').removeClass('is-loading');
			switchWord($word, nextWord);
			setTimeout(function(){ hideWord(nextWord) }, barAnimationDelay);
			setTimeout(function(){ $word.parents('.cd-words-wrapper').addClass('is-loading') }, barWaiting);

		} else {
			switchWord($word, nextWord);
			setTimeout(function(){ hideWord(nextWord) }, animationDelay);
		}
	}

	function showWord($word, $duration) {
		if($word.parents('.cd-headline').hasClass('type')) {
			showLetter($word.find('i').eq(0), $word, false, $duration);
			$word.addClass('is-visible').removeClass('is-hidden');

		}  else if($word.parents('.cd-headline').hasClass('clip')) {
			$word.parents('.cd-words-wrapper').animate({ 'width' : $word.width() + 10 }, revealDuration, function(){ 
				setTimeout(function(){ hideWord($word) }, revealAnimationDelay); 
			});
		}
	}

	function hideLetter($letter, $word, $bool, $duration) {
		$letter.removeClass('in').addClass('out');
		
		if(!$letter.is(':last-child')) {
		 	setTimeout(function(){ hideLetter($letter.next(), $word, $bool, $duration); }, $duration);  
		} else if($bool) { 
		 	setTimeout(function(){ hideWord(takeNext($word)) }, animationDelay);
		}

		if($letter.is(':last-child') && $('html').hasClass('no-csstransitions')) {
			var nextWord = takeNext($word);
			switchWord($word, nextWord);
		} 
	}

	function showLetter($letter, $word, $bool, $duration) {
		$letter.addClass('in').removeClass('out');
		
		if(!$letter.is(':last-child')) { 
			setTimeout(function(){ showLetter($letter.next(), $word, $bool, $duration); }, $duration); 
		} else { 
			if($word.parents('.cd-headline').hasClass('type')) { setTimeout(function(){ $word.parents('.cd-words-wrapper').addClass('waiting'); }, 200);}
			if(!$bool) { setTimeout(function(){ hideWord($word) }, animationDelay) }
		}
	}

	function takeNext($word) {
		return (!$word.is(':last-child')) ? $word.next() : $word.parent().children().eq(0);
	}

	function takePrev($word) {
		return (!$word.is(':first-child')) ? $word.prev() : $word.parent().children().last();
	}

	function switchWord($oldWord, $newWord) {
		$oldWord.removeClass('is-visible').addClass('is-hidden');
		$newWord.removeClass('is-hidden').addClass('is-visible');
	}
});

$(function () {
    
    "use strict";
	 /* smooth scroll
  -------------------------------------------------------*/
	  $.scrollIt({

		easing: 'swing',      // the easing function for animation
		scrollTime: 900,       // how long (in ms) the animation takes
		activeClass: 'active', // class given to the active nav element
		onPageChange: null,    // function(pageIndex) that is called when page is changed
		topOffset: -70,
		upKey: 38,                // key code to navigate to the next section
        downKey: 40          // key code to navigate to the previous section

	  });
	
	 var win = $(window);
           
  
    win.on("scroll", function () {
      var wScrollTop  = $(window).scrollTop();    
        
        if (wScrollTop > 150) {
            $(".navbar").addClass("navbar-colored");
        } else {
            $(".navbar").removeClass("navbar-colored");
        }
    });
	
	/* close navbar-collapse when a  clicked */
    $(".navbar-nav a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });
	
	 /* scroll-top-btn */
	var  scrollButton = $('.scroll-top-btn .fa');
    win.on('scroll', function () {
        if ($(this).scrollTop() >= 700) {  
            scrollButton.show();
        } else {
            scrollButton.hide();
        }
    });
	
    /* Click On scroll-top-btn */ 
    scrollButton.on('click', function () {
        $('html,body').animate({ scrollTop : 0 }, 1200);
    });

	/* counter */
	$('.count').counterUp({
        delay: 20,
        time: 1500
    });
     
	// faqs section
    $('.faqs .text-box .box h6').on("click", function(){
		$(this).toggleClass('black orange').siblings().removeClass('orange').addClass('black');
        $(this).next().slideToggle(500);
        $(".faqs .text-box .box p").not($(this).next()).slideUp(500); 
    });
 
	
	/* welcome-slider slider */
	$('.welcome-slider .owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        autoplay: false,
        autoplayTimeout: 2800,
        autoplayHoverPause: true,
        smartSpeed: 650,
		nav:true,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ]
    });
	
	/* team-area slider */
	$('.team-area .owl-carousel').owlCarousel({
        items: 4,
        loop: true,
        margin: 30,
        autoplay: false,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        smartSpeed: 650,
		responsiveClass:true,
        responsive : {
            992 : {
                items: 4
            },
    
            768 : {
                items: 3
            },
			
			576 : {
				items: 2
			},
            
            0 : {
                items: 1
            }
        }
    });
	
	/* why-area slider */
	$('.why-area .owl-carousel').owlCarousel({
        items: 1,
        loop: false,
        margin: 30,
        autoplay: false,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
		mouseDrag: false,
        smartSpeed: 650,
		animateIn: 'fadeIn',
		dotsContainer: '.why-dots'
    });
	
	/* testimonials slider */
	$('.testimonials .owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 2800,
        autoplayHoverPause: true,
        smartSpeed: 650,
		mouseDrag: true,
		nav: true,
		navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]
    });
		 	
	/*  skills-area section  */
    win.on('scroll', function () {
        $(".skills-progress span").each(function () {
            var bottom_of_object = 
            $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = 
            $(window).scrollTop() + $(window).height();
            var myVal = $(this).attr('data-value');
            if(bottom_of_window > bottom_of_object) {
                $(this).css({
                  width : myVal
                });
            }
        });
    });
	
	/* contact-area section */
    $('#contact-form').validator();

    $('#contact-form').on('submit', function (e) {
        if (!e.isDefaultPrevented()) {
            var url = "contact.php";

            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data)
                {
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    if (messageAlert && messageText) {
                        $('#contact-form').find('.messages').html(alertBox);
                        $('#contact-form')[0].reset();
                    }
                }
            });
            return false;
        }
    });
	 
	 
});



$(window).on("load",function (){
	
     $('.load-wrapp').fadeOut(100);
       
   /* isotope */
    $('.grid').isotope({
      // options
      itemSelector: '.items'
    });

    var $grid = $('.grid').isotope({
      // options
    });

    // filter items on button click
    $('.filtering').on( 'click', 'span', function() {

        var filterValue = $(this).attr('data-filter');

        $grid.isotope({ filter: filterValue });

    });

    $('.filtering').on( 'click', 'span', function() {

        $(this).addClass('active').siblings().removeClass('active');

    });

	 
});