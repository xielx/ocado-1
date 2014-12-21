jQuery(function(){

// 	//mobile menu and desktop menu
	$ = jQuery ;
    //mobile menu and desktop menu
    hide_left = $(document).width();
    $("#mobile_menu").css({left: hide_left});
    $("#mobile_menu").hide();
    $("#mobile_menu_btn a").click(function(){
        if($('#mobile_menu').is(':visible')) {
            hide_left = $(document).width();
            $("#mobile_menu").animate({left: hide_left}, 1000, function(){
                $("#mobile_menu").hide();
            });
        }else{
            $("#mobile_menu").show();
            show_left = $(document).width() - 250 ;
            $("#mobile_menu").animate({left: show_left}, 1000);
        }
        return false;
    });

	var position_type = "relative";
	if($(document).scrollTop() > 110){
		position_type = "fixed";
	}
	$("#templatemo_main_menu").css({"position": position_type,"top": 0});

	$(window).scroll(function(){
		var position_type = "relative";
		if($(this).scrollTop() > 110){
			position_type = "fixed";
		}
		$("#templatemo_main_menu").css({"position": position_type, "top": 0});
	});

});
