/*
Google search results become numbered -> keyboard shortcuts to that page (so far only 1-9 work, though links
  *are* numbered higher than that when results-per-page >= 10)
'e' focuses the search input, 'n' goes to next page
add malware/paid-subscription sites to filter_results
*/

$('#hdtbSum').css({
	"background": '#eee'
});

var filter_results = [
	'softonic.com',
	'experts-exchange.com'
];

if ($('#search').length) {
	var links = $('#rso .g .rc h3 a');
	var c = 1; // independent counter because we're filtering stuff out
	links.each(function() {
		var a = $(this);
		// filter results
		for (i in filter_results) {
			if (a.attr('href').indexOf(filter_results[i]) > 0) {
				a.closest('.g').remove();
				return;
			}
		}
		// mark link label with shortcut key
		a.html('<span style="font-size: .8em; color: #080;">[' + c++ + ']</span> ' + $(this).html());
	});
	var links = $('#rso .g .rc h3 a'); // re-set links, some may have been filtered out and it threw off the links.eq() below
	$(document).on('keyup', function(e) {
		if ($(document.activeElement).is("input, textarea")) return false; // ignore actual text entry
		var key = e.which;
		if (key >= 96 && key <= 105) key -= 48; // 96-105 = keypad
		if (key >= 48 && key <= 57) { // 48-57 are numeric 0-9
			if (key == 48) key += 10; // make 0 the last instead of the first,
			key -= 49; // and subtract one too key 1 becomes index 0, key 0 index 9
			// links.eq(key).css({backgroundColor: 'red'}); // target practice
			// this sadly requires telling the browser to allow popups from this site
			var href = links.eq(key).attr('href');
			if (e.altKey) {
				document.location.href = href;
			}else{
				// this sadly requires telling the browser to allow popups from this site
				window.open(href, '_blank');
			}
		}
		// jump to search box
		if (key == 69) { // 'e' for edit (or something)
			$('input[name=q]').focus();
		}
		// 'n' for next page
		if (e.key == 'n') {
			document.location.href = $('#pnnext').attr('href');
		}
		return true; // pacify jslint
	});
}

// and if Google is being RETARDED again and keeps redirecting you to google.nl or google.fu or something despite clicking "use google.com" like
// mad and sending 9 cookies totalling 1KB and being logged in and everything, visit   https://www.google.com/ncr
// that worked, that one time. keywords: fucking retarded google.
// NB: "I have to re-browse to google.com/ncr about 4 times on average before I really end up there."