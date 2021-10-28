/* script.js 
   Author:
   Date:
*/


$(document).ready(function(){ // begin document.ready block

	// //select the smallphoto class and hover
	$(".smallphoto").hover(function(){


	// 	//change the border of smallphoto
	$(this).css("caption")

	// 	//^adding this with no "" tells it to separate actions by item being involved
	// 	//it said .smallphoto before so it was applying the hover change to all .smallphoto items

	// 	//change the background color of gallery
	//$(".gallery").css({
	 		//"background-color":"khaki",
			//"border":"3px solid black"
	// 	})

		console.log("you're hovering!")

	 });

	 $(".smallphoto").hover(function(){

		$(this).toggleClass("newborder")
		$(".gallery").toggleClass("newbackground")

	});

	//animation example
	 $(".smallphoto").click(function(){

	 $(this).animate({
	 	"width":"400px",
	 	"right":"100px",
	// })

	$("#btn").click(function(){
		$(".takeover").show();

	})

	$("#close").click(function(){
		$(".takeover").hide();
	})

}); //end document.ready block
