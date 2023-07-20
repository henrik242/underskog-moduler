(function ($) {

    function brei() {
        bredde = parseInt(bredde);
        bredde = (isNaN(bredde)) ? 400 : bredde;
        if (window.matchMedia && window.matchMedia('(min-width: 1280px)').matches) {
            $(".wrapper").width((860 + bredde) + "px"); // 860
            $("#centreColumn").width((626 + bredde) + "px"); // 626
            $(".comment").width((606 + bredde) + "px");
            //$(".post_list .post").width((606 + bredde) + "px");
            $(".thread_excerpt").css({"max-width": (350 + bredde) + "px"}); // 350
            $(".frontpage_maincontent, .post_list").width((440 + bredde) + "px"); // 440
        }
    }

    brei();
    Underskog.onPageModification(function () {
        brei();
    });
})(jQuery);