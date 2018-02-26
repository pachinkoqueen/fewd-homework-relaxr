/* let's try pseudocode
when the DOM is completely loaded then execute the following functions
if the #more paragraph is hidden then display the #show link 
when user clicks on #show, then slide to display #more paragraph and #hide link and hide the #show link
when a user clicks on #hide link then slide the post closed and display the #show link
*/

$(document).ready(function() {
	$('.bloghidden').hide();
	$('.show').click(function(){
		$('.show').slideUp(1000, function() {
			$('.bloghidden').slideDown(1000).show('.show');
		}).hide('.hide');
	});

	
	$('.hide').click(function(){
		$('.bloghidden').slideUp(1000, function() {
			$('.show').slideDown(1000).show('.show');
		}).hide('.show');
	});

	
	$('.abouthidden').hide();
	$('.learnmore').click(function(){
		$('.learnmore').slideUp(1000, function() {
			$('.abouthidden').slideDown(1000).show('.learnmore');
		}).hide('.show');
	});
});




//first try
// $(document).ready(function() {
// 	$('#show').click(function(){
// 		$('#show').slideUp('slow', function() {
// 			$('.blog').slideDown('slow').removeClass('hidden');
// 		}).addClass('hidden');
// 	});
	
// 	$('#hide').click(function(){
// 		$('.blog').slideUp('slow', function() {
// 			$('#show').slideDown('slow').removeClass('hidden');
// 		}).addClass('hidden');
// 	});
// });


// this shows the read less link
// $('#hide').show();

// this hides the read more link
// $('#show').hide();


// chickenscratch

// $.click()

// $.slideDown()
// $.show()

// $.hide()

// function blogPost() {
// 	$.slidedown().css();
// }


