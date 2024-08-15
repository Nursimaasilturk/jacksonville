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
});