;( function( $ ) {
	"use strict";

	window.body = $('body');
	window._this = null;

	$.app = {
		
		initSandwich: function()
		{
			this.sandwich.init({
				keyHooks: !0,
				selector: '.js-sandwich-menu',
				wrapper: '.layout-wrapper',
				overlay: '#menu-overlay'
			});
		},

		initSlider: function()
		{
			this.slider.init({
				slider 	: '#slider',
				item 	: '.js-slider-slide',
				timeout : 6000
			});
		},
		
		initSelect: function()
		{
			$('select').selectbox();
		},

		initMask: function()
		{
			$(".js-date-watcher").mask("99/99/9999");
			$(".js-phone-watcher").mask("+ 7 (999) 999-99-99");
			$(".js-cartnumber-watcher").mask("999-999-999");
		},
		
		initFastclick: function()
		{
			FastClick.attach(document.body);
		},

		initPopup: function()
		{
			$.popup.init('.js-open-popup', {
				cssPosition: false,
				wrapper: '.layout-wrapper'
			});
		},
		
		initMagnific: function()
		{ 
			// if ($('.documents').length)
			// {
			// 	$('.documents').find('.documents__item').each(function(){
			// 		$(this).magnificPopup({
			// 			delegate: '.zoom',
			// 			type: 'image',
			// 			gallery: {
			// 				enabled: true,
			// 				navigateByImgClick: true,
			// 				tCounter: '%curr% of %total%'
			// 			}
			// 		});
			// 	});
			// }
			// else
			// {
			// 	$('.zoom').magnificPopup({
			// 		type:'image',
			// 		preloader: true,
			// 		gallery: {
			// 			enabled: true,
			// 			navigateByImgClick: true
			// 		},
			// 		zoom: {
			// 			enabled: true,
			// 			duration: 300,
			// 			easing: 'ease-in-out',
			// 			opener: function(openerElement) {
			// 				return openerElement.is('img') ? openerElement : openerElement.find('img');
			// 			}
			// 		},
			// 		closeOnContentClick: true
			// 	});
			// }
			
			$('.zoom').magnificPopup({
			 	type:'image',
			 	preloader: true,
				gallery: {
					enabled: true
				},
				zoom: {
					enabled: true, // By default it's false, so don't forget to enable it

					duration: 300, // duration of the effect, in milliseconds
					easing: 'ease-in-out', // CSS transition easing function

					// The "opener" function should return the element from which popup will be zoomed in
					// and to which popup will be scaled down
					// By defailt it looks for an image tag:
					opener: function(openerElement) {
						// openerElement is the element on which popup was initialized, in this case its <a> tag
						// you don't need to add "opener" option if this code matches your needs, it's defailt one.
						return openerElement.is('img') ? openerElement : openerElement.find('img');
					}
				},
			 	closeOnContentClick: true
			 });
		},

		initFancyBox: function()
		{
			if (!is_undefined($.fn.fancybox))
			{
				$('.fancybox').fancybox({
					helpers: {
						overlay: {
						  locked: false
						}
					}
				});

				$('.fancybox-media').fancybox({
					openEffect  : 'none',
					closeEffect : 'none',
					helpers : {
						media : {},
						overlay: {
						  locked: false
						}
					}
				});

				$(".iframe").fancybox({
					'transitionIn'		: 'none',
					'transitionOut'		: 'none',
					'autoScale'     	: false,
					'type'				: 'iframe',
					'width'				: 500,
					'height'			: 500,
					'scrolling'   		: 'no'
				});
				
				$(".various").fancybox({
					maxWidth	: 800,
					maxHeight	: 600,
					fitToView	: false,
					width		: '70%',
					height		: '70%',
					autoSize	: false,
					closeClick	: false,
					openEffect	: 'none',
					closeEffect	: 'none',
					helpers: {
						overlay: {
						  locked: false
						}
					}
				});
			}
		},

		slickCarousel: function()
		{
			if ($('.js-carousel').length && $('.js-carousel').find('.slick-slide').length)
			{
				var count = 4, classname = 'carousel';

				$('.js-carousel').each(function(){
					count = 4;
					classname = 'carousel';

					if ($(this).data('viewcount'))
					{
						count = parseInt($(this).data('viewcount'));
					}

					if ($(this).data('classname'))
					{
						classname = $(this).data('classname');
					}

					$(this).slick({
						infinite: true,
						dots: false,
						draggable: true,
						speed: 170,
						slidesToShow: count,
						slidesToScroll: 1,
						prevArrow: '<button type="button" class="'+classname+'__navigation '+classname+'__navigation_prev slick-prev"></button>',
						nextArrow: '<button type="button" class="'+classname+'__navigation '+classname+'__navigation_next slick-next"></button>',
						responsive: [
							{
								breakpoint: 1024,
								settings: {
									slidesToShow: 3,
									slidesToScroll: 3,
									infinite: true,
									dots: true
								}
							},
							{
								breakpoint: 600,
								settings: {
									slidesToShow: 2,
									slidesToScroll: 2
								}
							},
							{
								breakpoint: 480,
								settings: {
									slidesToShow: 1,
									slidesToScroll: 1
								}
							}
						]
					});
				});
			}
		},

		slickSlider: function()
		{
			if ($('.js-slider').length && $('.js-slider').find('.slick-slide').length)
			{
				var count = 4, classname = 'slider';

				$('.js-slider').each(function(){
					count = 4;
					classname = 'slider';

					if ($(this).data('viewcount'))
					{
						count = parseInt($(this).data('viewcount'));
					}

					if ($(this).data('classname'))
					{
						classname = $(this).data('classname');
					}

					$(this).slick({
						infinite: true,
						dots: false,
						draggable: false,
						speed: 300,
						fade: false,
						autoplay: true,
						autoplaySpeed: 4500,
						pauseOnHover: false,
						cssEase: 'ease',
						prevArrow: '<button type="button" class="slider__navigation slider__navigation_prev slick-prev"></button>',
						nextArrow: '<button type="button" class="slider__navigation slider__navigation_next slick-next"></button>'
					});
				});
			}
		},

		disableHover: function()
		{
			var timer;
			window.addEventListener('scroll', function() {
				clearTimeout(timer);
				
				if(!body.hasClass('disable-hover')) {
					body.addClass('disable-hover');
				}

				timer = setTimeout(function(){
					body.removeClass('disable-hover');
				},500);
			}, false);
		},

		initTooltip: function()
		{
			var tooltip, item;

			body.on('click', function(e){
				if (!$(e.target).hasClass('tooltip') && !$(e.target).hasClass('js-tooltip') && $('.tooltip.show').length)
				{
					$('.tooltip.show').removeClass('animate');

					setTimeout(function(){
						$('.tooltip.show').removeClass('show');
					}, 300);
				}
			});

			body.on('click', '.js-tooltip', function(e){
				e.preventDefault();
				
				item = $(this);

				if ((item.data('tooltip') || item.find('.tooltip').length) && !$(e.target).hasClass('tooltip'))
				{
					tooltip = item.data('tooltip');

					if (!item.find('.tooltip').length)
					{
						var span = document.createElement('span');
						span.className = 'tooltip';
						span.innerHTML = tooltip;

						item.append(span);
					}

					if (item.find('.tooltip').hasClass('show'))
					{
						item.find('.tooltip').removeClass('animate');

						setTimeout(function(){
							item.find('.tooltip').removeClass('show');
						}, 200);
					}
					else
					{
						item.find('.tooltip').addClass('show');

						setTimeout(function(){
							item.find('.tooltip').addClass('animate');
						}, 10);
					}
				}
			});
		},

		toggle: function()
		{
			var selector, block, target, button;

			$('.js-toggle-trigger').each(function(){
				if ($($(this).data('toggle')).length)
				{
					selector = $(this).data('toggle');
					button = $(this);
					block = $(selector);

					body.on('click', function(e){
						target = $(e.target);

						if (!target.closest(selector).length && !target.closest('.js-toggle-trigger').length && block.hasClass('active'))
						{
							button.removeClass('animate');
							block.removeClass('transform');

							setTimeout(function(){
								block.removeClass('active');
							}, 135);
						}
					});		
				}
			});

			body.on('click', '.js-toggle-trigger', function(e){
				e.preventDefault();

				if ($(this).data('toggle'))
				{
					block = $($(this).data('toggle'));
					button = $(this);

					if (block.length)
					{
						if (!block.hasClass('active'))
						{
							button.addClass('animate');
							block.addClass('active');

							setTimeout(function(){
								block.addClass('transform');
							}, 5);
						}
						else
						{
							button.removeClass('animate');
							block.removeClass('transform');

							setTimeout(function(){
								block.removeClass('active');
							}, 135);
						}
					}
					
				}

			});
		},
		
		hashJump: function()
		{
			if (window.location.hash)
			{
				var hash = window.location.hash.substr(1), jumpto = null;
				
				if ($('a[name="' +hash+ '"]').length)
				{
					jumpto = $('a[name="' +hash+ '"]').eq(0);
				}
				
				if ($('#' +hash).length)
				{
					jumpto = $('#' +hash).eq(0);
				}

				if (jumpto !== null)
				{
					$('html, body').stop().animate({ scrollTop: jumpto.offset().top }, 'fast');
				}
			}
		},

		updateImage: function()
		{
			body.on('click', '.js-update-image', function(e){
				e.preventDefault();
				$(this).find('img').attr('src', $(this).find('img').attr('src').split('?')[0] + '?u=' + Math.random());
			});
		},

		zoomit: function()
		{
			var wrapper, holder, image;

			body.on('click', '.js-zoom-image', function(e){
				
				e.preventDefault();

				image = $(this).attr('href');

				if ($(this).closest('.js-zoom-wrapper').length)
				{
					wrapper = $(this).closest('.js-zoom-wrapper');
					
					if (wrapper.find('.js-zoom-holder').length)
					{
						holder = wrapper.find('.js-zoom-holder');

						holder.html('');

						wrapper.find('.current').removeClass('current');


						holder.html('<img src="' + image + '" alt="">');

						$(this).addClass('current');
					}
				}

				return !1;
			});
		},

		suggestionsInit: function()
		{
			var api_key = '5ac2fbf1f640b75b78f5d4214ff005ff5303eac8', input = null;

			if ($('.js-suggestions').length)
			{
				$('.js-suggestions').each(function(){
					input = $(this);
					
					if (input.data('type'))
					{
						input.suggestions({
						    serviceUrl: "https://dadata.ru/api/v2",
						    token: api_key,
						    type: input.data('type'),
						    count: 5,
						    onSelect: function(suggestion) {
						        console.log(suggestion);
						    }
						});
					}
				});
			}
		},

		init: function()
		{
			this.disableHover();

			this.initFastclick();

			this.initPopup();
			this.initMask();
			this.initSelect();
			this.initSandwich();

			this.ajaxForm.init();
			this.cart.init();

			browser.init();
		}

	};

})( jQuery );