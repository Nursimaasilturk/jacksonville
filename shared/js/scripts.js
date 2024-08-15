$(function(){
	$('#header').load('shared/header.html',function(){
		initializeEventListeners();
	});
	$('#footer').load('shared/footer.html');
	function initializeEventListeners(){
		$('.categories .categories__item').click(function(){
			$('.categories .categories__item').find('a').removeClass('active');
			var child = $(this).find('a');
			child.addClass('active');	
		});
	}
	$(window).scroll(function() {
		var header = $("#header");
		if ($(window).scrollTop() > 0) {
			console.log(true);
			header.addClass("scrolled");
		} else {
			header.removeClass("scrolled");
		}
	});
});