(function ($) {

    // MYRKSKOG™
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
            $("h1 a").css({
                'color': 'black',
                'text-shadow': '0 0 4px #ccc, 0 0 4px #ccc'
            });
            $('h2').css({
                'color': 'white'
            });
            $(".tabbed_menu").css({
                "background": "black"
            });
            $(".byline, .user_settings_text, .editing_bar, .thread_excerpt, #user_unread_count, .login_count, .activity_item_block, .sidebar, .shout_actions, div, .count").css({
                "color": "lightgray"
            });
            $(".dropdown_box, .dropdown_container, .annotation, #menu, .submenu, .tabs, .page_selector a, .site_search_dropdown, .message_conversation_item").css({
                "background": "#222",
                "border-color": "darkgray"
            });
            $(".sale_type, .tabs_tab.selected, .current_page, .current_tab, .message_conversation_item_selected").css({
                "background": "gray",
            });
            $(".panel_hide, .panel_move_up, .panel_move_down").css({
                "opacity": "1.0",
            });
            $(".highlight").css({
                "color": "black",
            });
            $(".user_message").css({
                "background": "#2f4860",
            });
        }
    }

    mørke();
    Underskog.onPageModification(function () {
        mørke();
    });
})(jQuery);
