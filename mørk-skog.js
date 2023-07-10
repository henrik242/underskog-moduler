(function ($) {

    // MØRK SKOG™
    // Foreslå endringer på https://github.com/henrik242/mork-skog

    function mørke() {
        if (!autoMørke || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            // dark mode

            $('body, .body, .post, .post_context').css({
                'background': 'black',
                'color': 'white'
            });
            $("a").css({
                'color': 'lightblue'
            });
            $('h2').css({
                'color': 'white'
            });
            $(".tabbed_menu").css({
                "background": "black"
            });
            $(".byline, .user_settings_text, .editing_bar, .thread_excerpt").css({
                "color": "lightgrey"
            });
            $(".dropdown_box, .dropdown_container").css({
                "background": "#222",
                "border-color": "darkgrey"
            });
        }
    }

    mørke();
    Underskog.onPageModification(function () {
        mørke();
    });
})(jQuery);