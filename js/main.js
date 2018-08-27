$('#w-docs-nav ul a, #w-docs-nav ol a, .anchor-nav').click(function (e) {
	e.preventDefault();
	$("html").animate({"scrollTop": $($(this).attr('href')).offset().top - 60}, 1000); //IE,FF
	$("body").animate({"scrollTop": $($(this).attr('href')).offset().top - 60}, 1000); //Webkit
});

$('#w-back-top').click(function () {
	$("html").animate({"scrollTop": 0}, 1000); //IE,FF
	$("body").animate({"scrollTop": 0}, 1000); //Webkit
});

$(window).scroll(function () {
	if ($(document).scrollTop() > 190) {
		$('#w-back-top').removeClass('hide');
	} else {
		$('#w-back-top').addClass('hide');
	}
});

