// Feedback Form
function sendFeedback(){
	var userName = $("#user-name").val();
	var userEmail = $("#user-email").val();
	var pageUrl = $("#page-url").val();
	var Description = $("#description").val();
	var parameters="user-name="+userName+"&user-email="+userEmail+"&page-url="+pageUrl+"&description="+Description;
	
	if ($.trim(Description).length == 0){
		$("#feedback-error").css("display", "block");
		return false;
	}
	else{
		$("#feedback-error").css("display", "none");
		$("#feedback-form").css("display", "none");
		$("#response").html("<h2>Thank you for your feedback.</h2>");
		$.ajax({
			url: "http://www.tutorialrepublic.com/lib/assets/send-feedback.php",
			type: "POST",
			data: parameters,
			success: function(data){
			  //$("#response").html(data);
			}  
		});
	}
}

// Encode URL
function urlEncode(){
	var inputData = $("#data").val();
	$.ajax({
		url: "http://www.tutorialrepublic.com/lib/assets/urlencode.php",
		type: "GET",
		data: { data: inputData },
		success: function(data){
		  $("#data").val(data);
		}
	});
}

// Decode URL
function urlDecode(){
	var inputData = $("#data").val();
	$.ajax({
		url: "http://www.tutorialrepublic.com/lib/assets/urldecode.php",
		type: "GET",
		dataType:"html",
		data: { data: inputData },
		success: function(data){
		  $("#data").val(data);
		}  
	});
}

// General Utility Scripts
$(document).ready(function(){
	// Active Link
	var link = $("#myNav ul li a");
	var str = location.href.toLowerCase();
	link.each(function() {
		if (str.indexOf(this.href.toLowerCase()) > -1) {
			link.removeClass("selected");
			$(this).addClass("selected");
		}
	});
	
	// Tree Menu
	var allShortHand = $('li.tree ul').hide();
	$('.expand-all').click(function() {
		allShortHand.slideDown();
		$(this).parent().find('li.tree').addClass("expand");
		return false;
	});
	$('.collapse-all').click(function() {
		allShortHand.slideUp();
		$(this).parent().find('li.tree').removeClass("expand");
		return false; 
	});
	if ($('li.tree a').hasClass("selected")) {
		$(".selected").parents("ul").show();
		$(".selected").parents("li.tree").addClass("expand");
	}
	$('li.tree .shorthand').click(function() {
		$(this).next("ul").slideToggle();
		$(this).parent("li").toggleClass("expand");
		return false;
    });
	
	// Reference by Order
	$(".toggle").click(function(){
		$(".order-by-alphabet, .order-by-category").toggle();
		$(this).text($(this).text() == 'Order by Alphabet' ? 'Order by Category' : 'Order by Alphabet');
	});
	
	// Report Error Form
	var pageUrl = $(location).attr('href');
	$("input#page-url").val(pageUrl);
	$(".feedback").click(function(){
		$(".report-error").slideDown("slow");
	});
	$(".report-error .close").click(function(){
		$(this).parents(".report-error").slideUp("slow");
	});
	
	// Drop Down Menu
	$(".drop-down > a").click(function () {                
		$(this).siblings("ul").slideToggle(150);
	});
	$(".drop-down ul").hover(function () {
		$(this).show();
		$(".drop-down > a").addClass("active");
	}, function () {
		$(this).delay(100).slideUp(150);
		$(".drop-down > a").removeClass("active");
	});
	$(document).bind("click, mouseout", function (b) {
		var a = $(b.target);
		if (!a.parents().hasClass("drop-down")) {
			$(".drop-down ul").slideUp(150);
		}                
	});
	$("a, input, textarea, button, :focus").bind("focus", function (b) {
		var a = $(b.target);
		if (!a.parents().hasClass("drop-down")) {
			$(".drop-down ul").hide();
		}
	});
	
	// Visibility vs Display Demo
	$(".display-none").click(function(){
		$(this).css("display", "none");
	});
	$(".visibility-hidden").click(function(){
		$(this).css("visibility", "hidden");
	});
	$(".reset-all").click(function(){
		$(".demo-box div").css({"display" : "block", "visibility" : "visible"});
	});
	
	// Highlight Alternate Rows
	$(".codebox ul li:nth-child(2n)").addClass("alt");
	
	// Toggle Codebox Size
	$(".codebox .box-size i").click(function(){
		$(this).parents(".box-size").toggleClass("maximized");
		$(this).parents(".codebox-title").next("ul").toggleClass("scroll");
		if($(this).parents(".box-size").hasClass("maximized")){
			$(this).attr("title", "Minimize");
		}
		else{
			$(this).attr("title", "Maximize");
		}
	});

	
	// String Length Calculator
	$(".calculate-button input").click(function(){
		var myStr = $("textarea").val();
		if($(this).hasClass("with-space")){
			var withSpace = myStr.length;
			alert(withSpace);
		}
		else if($(this).hasClass("trimmed-space")){
			var trimmedSpace = $.trim(myStr).length;
			alert(trimmedSpace);
		}
		else if($(this).hasClass("without-space")){
			var withoutSpace = myStr.replace(/ /g,'').length;
			alert(withoutSpace);
		}
	});

	// Canvas Coordinates Demo
	$("#myCanvas").mousemove(function(event){            
		var relX = Math.round(event.pageX - $(this).offset().left);
		var relY = Math.round(event.pageY - $(this).offset().top);
		var relCoords = "(" + relX + "," + relY + ")";
		$(".canvas-coordinates").text(relCoords);
	});
});