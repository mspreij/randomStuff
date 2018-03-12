// optionally colour the links to remind you dotjs is active and these links are key-triggered
$('#breadcrumbs .next a, #breadcrumbs .prev a').css({color: '#f80'});

// search results, numeric hotkeys work, just don't show
if (window.location.pathname == '/manual-lookup.php') {
    $(document).on('keyup', function(e) {
        var target = $('#quickref_functions a').eq(e.key-1);
        if (target.length==1) document.location = target.prop('href');
    });
}
// documentation, left/right arrows for previous/next page
if (window.location.pathname.substr(0, 11) == '/manual/en/') {
    $(document).on('keyup', function(e) {
        if (e.which === 39) {
            if ($('#breadcrumbs .next a').length)  document.location = $('#breadcrumbs .next a').prop('href');
        }else if(e.which === 37) {
            if ($('#breadcrumbs .prev a').length)  document.location = $('#breadcrumbs .prev a').prop('href');
        }
    });
}

