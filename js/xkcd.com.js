// titel
$('#comic').css({'margin-bottom': '5px'}).
	after($('<div/>').
	css({
		'font-family': 'sans-serif',
		'font-variant': 'normal',
		'color': 'navy',
		'background': '#eef',
		'border': '1px blue inset',
		'padding': '8px',
		'width': '640px',
		'margin': '5px auto'
	}).
	text($('#comic img').prop('title')));

// keys (left, right, f[irst], r[andom], l[ast])
var navKeys = $('.comicNav').first().find('a');
$(document).on('keyup', function(e) {
	if (e.which === 39) {
		document.location = navKeys.eq(3).prop('href');
	}else if(e.which === 37) {
		document.location = navKeys.eq(1).prop('href');
	}else if(e.which === 82) {
		document.location = navKeys.eq(2).prop('href');
	}else if(e.which === 70) {
		document.location = navKeys.eq(0).prop('href');
	}else if(e.which === 76) {
		document.location = navKeys.eq(4).prop('href');
	}else{
		// alert(e.which);
	}
});
