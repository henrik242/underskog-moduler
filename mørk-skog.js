(function ($) {

    // MØRK SKOG™
    // Foreslå endringer på https://github.com/henrik242/mork-skog

    function mørke() {
        if (!autoMørke || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            // dark mode

            $('body').css({
                'background': 'black',
                'color': 'white'
            });
            $("body a").css({
                'color': 'lightgray'
            });
            $('.body').css({
                'background': '#111',
                'color': 'white'
            });
            $('.post').css({
                'background': 'black',
                'color': 'white'
            });
            $('h2').css({
                'color': 'white'
            });
            $(".tabbed_menu").css({
                "background": "black"
            });
            $(".user_settings>li .user_settings_text").css({
                "color": "lightgrey"
            });
        }
    }

    mørke();
    Underskog.onPageModification(function () {
        mørke();
    });
})(jQuery);