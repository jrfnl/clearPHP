(function ($) {
	/**
	 * Add fold-out menu capability
	 */
	// Set initial state
	$('#navigation li.active ul').show();
	$('#navigation li.active span').addClass('open');
	
	// Add on-click functionality
	$('#navigation li').has('ul').on( 'click', function( event ) {
		var target = $( this );
		target.find('ul').toggle( 400 );
		target.find('span').toggleClass('open');
	});

})(jQuery);
