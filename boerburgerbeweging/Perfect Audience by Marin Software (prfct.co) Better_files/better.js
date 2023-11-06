// Initialise the donuts.
$(function() {
	$('.data-attributes span').peity('donut')
});

// Initialise the popups.
$('#open-trackers-popup').magnificPopup({
	src:'#trackers-list',
	type:'inline'
});
