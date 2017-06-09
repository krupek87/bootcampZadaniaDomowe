(function($, window, document, undifined) {

  $.fn.toc = function() {

    var spis = $("<div class='toc'></div>").prependTo(".container"),
        tytul = $("<h2>Spis treści</h2>").prependTo(spis),
        ul = $("<ul></ul>").appendTo(spis);

    this.each(function(a) {

      var h2s = $(this).find("h2"),
          li = $("<li>" + "<a href='#" + (++a) + "'>" + h2s.text() + "</a>" + "</li>");

      $(h2s).attr("id", a);

      ul.append(li);

    });

  };

})(jQuery, window, document);
