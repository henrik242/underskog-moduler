var legoStuff = 0;

(function($) {

  Underskog.onPageModification(function () {
    if (legoStuff < 3) {
      $(".comment  > div.body > div, div.bulletin").each(function() {
        legoStuff++; 
        this.innerHTML = this.innerHTML.replace(/\b(ego)/ig, "L$&");
      });
    }
  });

})(jQuery);
