jQuery(function(){

// 	//mobile menu and desktop menu
	hide_left = jQuery(document).width();

	jQuery("#mobile_menu").css('left', hide_left + "px");
	jQuery("#mobile_menu").hide();

	jQuery("#mobile_menu_btn a").click(function(){
		
		if(jQuery('#mobile_menu').is(':visible')) {
			hide_left = jQuery(document).width();
				jQuery("#mobile_menu").hide();
			// jQuery("#mobile_menu").animate({'left': hide_left + "px"}, 1000, function(){
			// });
		}else{
			show_left = jQuery(document).width() - 250 ;
			jQuery("#mobile_menu").css('left', show_left);
			jQuery("#mobile_menu").slideDown();
			// jQuery("#mobile_menu").animate({'left': show_left+ "px"},1000);
		}
		return false;
	});

// 	jQuery.fn.anchorAnimate = function(settings) {
// 		settings = jQuery.extend({
// 			speed : 1100
// 		}, settings);	
// 		return this.each(function(){
// 			var caller = this
// 			$(caller).click(function (event){
// 				event.preventDefault();
// 				var locationHref = window.location.href;
// 				var elementClick = $(caller).attr("href");
// 				var destination = $(elementClick).offset().top ;
// 				$("#menu_mobile_list").fadeOut() ;
// 				$("html,body").stop().animate({ scrollTop: destination}, settings.speed, function(){
// 					// Detect if pushState is available
// 					if(history.pushState) {
// 						history.pushState(null, null, elementClick);
// 					}
// 				});
// 				return false;
// 			});
// 		});
// 	}
// 	//animate scroll function calll
// 	$("#mobile_menu a").anchorAnimate();
// 	//main menu auto select and animate scroll
// 	// $("#templatemo_main_menu ul").singlePageNav({offset: jQuery('#templatemo_main_menu').outerHeight()});
// 	//define main menu position

// 	var position_type = "relative";
// 	if($(document).scrollTop() > 110){
// 		position_type = "fixed";
// 	}
// 	$("#templatemo_main_menu").css({"position": position_type,"top": 0});

// 	$(window).scroll(function(){
// 		var position_type = "relative";
// 		if($(this).scrollTop() > 110){
// 			position_type = "fixed";
// 		}
// 		$("#templatemo_main_menu").css({"position": position_type, "top": 0});
// 	});

// 	// $(window).resize(function(){
// 	//     if($(this).scrollTop() > ($(this).height()-105)){
// 	//         $("#templatemo_main_menu").css({"position":"fixed","top":"0"});
// 	//     }else{
// 	//         menu_top = $(this).height() - 105;
// 	//         $("#templatemo_main_menu").css({"position":"absolute","top":menu_top});
// 	//     }
// 	// });

// 	//event
// 	$(document).scroll(function(){
// 		document_top = $(document).scrollTop();
// 		event_wapper_top = $("#templatemo_upcomming_event").position().top;
// 		if(document_top<event_wapper_top){
// 			event_animate_num = event_wapper_top - document_top;
// 			event_animate_alpha = (1/event_wapper_top)*(document_top);
// 			$("#templatemo_upcomming_event .event_animate_left").css({'left': -event_animate_num,'opacity':event_animate_alpha});
// 			$("#templatemo_upcomming_event .event_animate_right").css({'left':event_animate_num,'opacity':event_animate_alpha});
// 		}else{
// 			$("#templatemo_upcomming_event .event_animate_left").css({'left': 0,'opacity':1});
// 			$("#templatemo_upcomming_event .event_animate_right").css({'left':0,'opacity':1});
// 		}
		
// 	});
// 	// //pricing
// 	// $(document).scroll(function(){
// 	//     document_top = $(document).scrollTop()-1000;
// 	//     event_wapper_top = $("#templatemo_pricing").position().top-1110;
// 	//     if(document_top<event_wapper_top){
// 	//         degree = (360/event_wapper_top)*(document_top);
// 	//         event_animate_num = event_wapper_top - document_top;
// 	//         event_animate_alpha = (1/event_wapper_top)*(document_top);
// 	//         $("#templatemo_pricing .pricing_icon_wapper span").css({
// 	//                     '-webkit-transform': 'rotate(' + degree + 'deg)',
// 	//                     '-moz-transform': 'rotate(' + degree + 'deg)',
// 	//                     '-ms-transform': 'rotate(' + degree + 'deg)',
// 	//                     '-o-transform': 'rotate(' + degree + 'deg)',
// 	//                     'transform': 'rotate(' + degree + 'deg)',
// 	//         });
// 	//         $("#templatemo_pricing .pricing_icon_wapper").css({
// 	//                     'opacity':event_animate_alpha
// 	//         });
// 	//     }else{
// 	//         $("#templatemo_pricing .pricing_icon_wapper span").css({
// 	//                     '-webkit-transform': 'rotate(' + 360 + 'deg)',
// 	//                     '-moz-transform': 'rotate(' + 360 + 'deg)',
// 	//                     '-ms-transform': 'rotate(' + 360 + 'deg)',
// 	//                     '-o-transform': 'rotate(' + 360 + 'deg)',
// 	//                     'transform': 'rotate(' + 360 + 'deg)',
// 	//         });
// 	//         $("#templatemo_pricing .pricing_icon_wapper").css({
// 	//                     'opacity':1
// 	//         });
// 	//     }
// 	// });
// 	// //blog
// 	// $(document).scroll(function(){
// 	//     document_top = $(document).scrollTop()-2000;
// 	//     event_wapper_top = $("#templatemo_blog").position().top-2110;
// 	//     if(document_top<event_wapper_top){
// 	//         event_animate_num = event_wapper_top - document_top;
// 	//         event_animate_alpha = (1/event_wapper_top)*(document_top);
// 	//         $("#templatemo_blog .event_animate_left").css({'left': -event_animate_num,'opacity':event_animate_alpha});
// 	//         $("#templatemo_blog .event_animate_right").css({'left':event_animate_num,'opacity':event_animate_alpha});
// 	//     }else{
// 	//         $("#templatemo_blog .event_animate_left").css({'left': 0,'opacity':1});
// 	//         $("#templatemo_blog .event_animate_right").css({'left':0,'opacity':1});
// 	//     }
// 	// });
// 	//contact
// 	// $(document).scroll(function(){
// 	//     document_top = $(document).scrollTop()-3000;
// 	//     event_wapper_top = $("#templatemo_contact").position().top-3110;
// 	//     if(document_top<event_wapper_top){
// 	//         event_animate_alpha = (1/event_wapper_top)*(document_top);
// 	//         $("#templatemo_contact p, #templatemo_contact_map_wapper").css({'opacity':event_animate_alpha});
// 	//     }else{
// 	//         $("#templatemo_contact p, #templatemo_contact_map_wapper").css({'opacity':1});
// 	//     }
// 	// });

});
