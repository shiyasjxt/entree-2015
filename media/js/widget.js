!(function($){
	$(function(){

		var searchButtonSelector = "#r20_search-link";		
		$("#r20_home-banner-search").keypress(function(e){
			if ( 13 == e.which )
			{
				$(searchButtonSelector).mousedown();
				$(searchButtonSelector).click();
				return false;
			}
		});
		// custom select
		if ( $.fn.customSelect )
		{
			$(".r20_search-field select").customSelect();
		}

	});
})(jQuery);