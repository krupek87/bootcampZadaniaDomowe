(function($) {

    $.fn.bold = function() {
        console.log(this);
        return this.addClass("bold");
    };

	$("div.grid.grid-12").bold();
	$(".nav a[href='http']").bold();
	$("input:radio, input:checkbox").not(":checked").bold();
	$("div#text p:empty").first().bold();
	$(".pagination-item:not(span)").bold();

})(jQuery);