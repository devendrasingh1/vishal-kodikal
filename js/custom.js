(function($) {
	"use strict";
	$('.nav_toggle').on('click', function(){
		$(".navigation_menu").addClass("menu_open");
	});
	$('.close_toggle').on('click', function(){
		$(".navigation_menu").removeClass("menu_open");
	});
	$('.navigation_menu > ul > li > a').on('click', function(){
		$(".navigation_menu").removeClass("menu_open");
	});
	//dropdown menu
	$(".navigation_menu ul li ul.sub_menu").parents("li").addClass("dropdown_toggle");
	$(".dropdown_toggle").append("<span class='caret_down'></span>");
	$(".navigation_menu ul li").children(".caret_down").on("click",function(){
		$(this).toggleClass("caret_up");
		$(this).prev("ul").slideToggle();
	});
	$(".megamenu_wrapper").parents("li").addClass("mega_dropdown");
	$(".mega_dropdown > a").append("<span class='mega_toggle'><i class='fa fa-angle-down'></span>");
	
	//mega menu js script
	var win_w = $(window).outerWidth();
	if(win_w < 992){
		$(".mega_dropdown").on('click', function(){
			$(this).children(".megamenu_wrapper").slideToggle(300);
		});
	}
	//fix header on scroll
	var win_scroll = $(window).scrollTop();
	$(window).on('bind scroll', function(e) {
		if ($(window).scrollTop() > 300) {
			$('.navigation_header').addClass('fixed_menu');
		} else {
			$('.navigation_header').removeClass('fixed_menu');
		}	
	}); 
	//slider
	$(".main_slider").owlCarousel({
		singleItem:true,
		items:1,
		loop:true,
		margin:0,
		autoplay:true,
		autoplayTimeout:3000,
		autoplaySpeed:1500,
		smartSpeed:1500,
		dots:true,
		nav:false,
		animateIn: 'fadeIn',
		animateOut: 'fadeOut'
	});
    //slider
	$(".testimonial_slider").owlCarousel({
		singleItem:true,
		items:1,
		loop:true,
		margin:0,
		autoplay:true,
		autoplayTimeout:3000,
		autoplaySpeed:1500,
		smartSpeed:1500,
		dots:true,
		nav:false,
		animateIn: 'fadeIn',
		animateOut: 'fadeOut'
	});
	//Brand slider
	$(".brands_slider").owlCarousel({
		singleItem:true,
		items:6,
		loop:true,
		margin:5,
		autoplay:true,
		autoplayTimeout:3000,
		autoplaySpeed:1500,
		smartSpeed:1500,
		dots:true,
		nav:false,
		responsiveClass: true,
		responsive : {
			0 : {
				items: 1
			},
			375 : {
				items: 2
			},
			481 : {
				items: 3
			},
			768 : {
				items: 3
			},
			992 : {
				items: 5
			},
			1200 : {
				items:6
			}
		}
	});
	//onclick popup js
	$('.popup_icon').on('click', function() {
		$('.popup_wrapper').removeClass("open_popup");
		var popup_show = $(this).attr('data-show');
		$('#'+ popup_show).addClass("open_popup");	
	});
	$('.popup_wrapper').on('click', function(){
		$(this).removeClass("open_popup");
	});
	$('.close_btn').on('click', function(){
		$('.popup_wrapper').removeClass("open_popup");
	});
	$('.popup_inner_content').on('click', function(e){
		e.stopPropagation();
	});	
	//load event
	$(window).on('load', function() {
		$(".ayu_loader").delay(600).fadeOut("slow");
		//Window full height
		var hdr_h = $('.navigation_header').outerHeight();
		var win_h = $(window).outerHeight();
		if(win_w > 991){
		  $(".full_height_dv").css("height",win_h);
		}
	});
	//tabs Menu
	$('.tabs_menu > li').on('click', function(){
		var tab_data = $(this).attr("data-tab");
		$('.tabs_menu > li').removeClass("active");
		$(this).addClass("active");	
		$(".tab_content").removeClass("active");
		$("#"+tab_data).addClass("active");
	});
	//Datepicker js
	if($(".datepicker").length > 0){
		$(".datepicker").datepicker({
		  minDate:0,
		  dateFormat: "dd-mm-yy"
		});
	}
	//wow animation js
	new WOW().init();
	//smooth scroll body on click
	$('a[href]').click(function(){
		$('html, body').animate({
		scrollTop: $( $.attr(this, 'href') ).offset().top
		}, 1000);
		return false;
	});
	//open blog sidebar
	if(win_w < 992){
		$(".sidebar_open_btn").on('click', function(e){
			$(".blog_sidebar").addClass("open");
			e.stopPropagation();
		});
		$("body").on('click', function(){
			$(".blog_sidebar").removeClass("open");
		});
		$(".blog_sidebar").on("click", function(e){
			e.stopPropagation();
		});
		$(".sidebar_close_btn").on('click', function(){
			$(".blog_sidebar").removeClass("open");
		});
	}
})(jQuery);