var legoStuff = 0;

(function($) {

  Underskog.onPageModification(function () {
    if (legoStuff < 3) {
      $(".comment  > div.body > div, .bulletin > div > h2 > .tittel, .bulletin > div > .body > div").each(function() {
        legoStuff++;
        if (this.innerHTML.match(/\bego/i)) {
          this.innerHTML = this.innerHTML.replace(/\b(ego)/ig, "L$&");
        }
      });
    }
  });

})(jQuery);
