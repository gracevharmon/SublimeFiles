/* script.js 
   Author:
   Date:
*/


$(document).ready(function(){ // begin document.ready block

	//jquery code here
	$("#firstbutton").click(function(){
		//tell me I'm being clicked
		console.log("clicked!")

		//animate the photobox
		$(".photobox").animate({
			"left":"400px", //this moves it to the right by creating space to the left
			"top":"50px", //this moves it down by creating space up top
			"width":"600px", //increase it to 600px wide

	});
	});
//button that moves it back
	$("#secondbutton").click(function(){
		console.log("clicked on second button");

		$(".photobox").animate({
			"left":"0px", 
			"top":"0px", 
			"width":"200px", 

	});
	});

	$(".container").click(function(){
		console.log("container clicked")
	$(".overlay").show();


	});

$(".closer").click(function(){
	$(".overlay").hide();

});

}); //end document.ready block
