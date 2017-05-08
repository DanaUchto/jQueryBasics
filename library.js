$(document).ready(function() {
	
	$(".rectangle").animate ({
		width: "800px", 
		height: "800px",
		opacity: 0.8
	}, 6000,function() {
		$(".rectangle").animate({
			width: "200px",
			height: "100px",
			opacity: 0.3
		},5000, function() {
			$("p").css("color", "purple");

		});

	});

	


	$("h1").css("font-family", "Comic Sans MS");
	$("p").css("color", "darkgreen");


	$(".anitext").click(function(){
		$("p").css("font-family", "Comic Sans MS")

	});


	$(".rectangle").click(function() {
		$("h1").css("color", "red")
	});





});

