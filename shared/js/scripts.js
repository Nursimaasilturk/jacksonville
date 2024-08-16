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
		$('#mobile-menu-icon').click(()=>{
			$('.mobile-menu-box').addClass('active');
		});
		$('#close-icon').click(()=>{
			$('.mobile-menu-box').removeClass('active');
		});
		$('.login-dropdown').click(()=>{
			$('.login-dropdown-box').toggleClass('active')
		});
	}
	$(window).scroll(function() {
		var header = $("#header");
		if ($(window).scrollTop() > 0) {
			header.addClass("scrolled");
		} else {
			header.removeClass("scrolled");
		}
	});
	$('.video-box__video-part--btn').click(()=>{
		let video= $('.video-box__video-part--video')[0];
		video.play();
		$('.video-box__video-part--btn').hide();
		video.onended = function(e){
			$('.video-box__video-part--btn').show();
		}
	});

});