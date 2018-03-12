if ($('.noarticletext').length) {
	$(document).on('keyup', function(e) {
		if ($(document.activeElement).is("input, textarea")) return false; // ignore actual text entry
		var key = e.which;
		if (key == 83) {
			var query = $('#firstHeading').text(); // maybe useful sometime?
			var link = $('.noarticletext li').filter(function(e, q) {return $(q).text().trim().substr(0, 6)=='Search';}).find('a').attr('href');
			document.location.href = link;
		}
		return true; // pacify jslint
	});
}