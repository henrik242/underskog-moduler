(function ($) {

    // MYRKSKOG™
    // Foreslå endringer på https://github.com/henrik242/myrkskog

    function mørke() {
        if (!autoMørke || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            // dark mode

            $('body').css({
                'background': 'black',
                'color': 'white'
            });
            $("h1 a").css({
                'color': 'black',
                'text-shadow': '0 0 4px #ccc, 0 0 4px #ccc'
            });
            $('h1, h2, h2 a, h3, h3 a').css({
                'color': '#eee'
            });
            $(".tabbed_menu, .header").css({
                "background": "black"
            });
            $(".byline, .user_settings_text, .editing_bar, .thread_excerpt, #user_unread_count, .login_count, .activity_item_block, .sidebar, .shout_actions, div, .count, body #menu a, body #footer a").css({
                "color": "lightgray"
            });
            $(".dropdown_box, .dropdown_container, .annotation, #menu, .submenu, .tabs, .page_selector a, .site_search_dropdown, #tip_inbox ul li, .message_conversation_item, .form .textile_field .textile_field_uploading, .form .textile_field .textile_field_uploading .textile_field_images, .togglebar, .search_result_group h4, #conference_selector_list>ul>li, .filter_tabs ul, .selectized_input .selectize-control").css({
                "background": "#222",
                "border-color": "#444"
            });
            $(".sale_type, .tabs_tab.selected, .current_page, .current_tab, .header .tab, .filter_tabs ul li.tab.current").css({
                "background": "#333",
                "border-color": "#444"
            });
            $(".message_conversation_item_selected").css({
                "background": "darkgray",
                "border-color": "#444"
            });
            $(".panel_hide, .panel_move_up, .panel_move_down").css({
                "opacity": "1.0",
            });
            $(".highlight, .important").css({
                "color": "black",
            });
            $(".user_message").css({
                "background": "#0d2640",
            });
            $(".poll_results, pre").css({
                "background": "linear-gradient(#333 0px, #111 100px)",
            });
            $(".post").css({
                "color:": "white",
                "background": "linear-gradient(#222 0px, #060606 100px)",
            });
            $(".snip_marker").css({
                "filter": "invert(1)"
            });
            $('input[type="text"], textarea, #nudge_fetch_circle').css({
                "background": "#222",
                "color": "white",
                "border-color": "#444"
            });
            $('p a[style*="background: rgb(213, 255, 213)"]').css({
                "color": "#222"
            });
            $('.header, .tabbed_menu').css({
                "border-bottom": "solid 1px #333"
            });
            $('.activity_item_list ul li a.username').css({
                "color": "lightgray"
            });
        }
    }

    mørke();
    Underskog.onPageModification(function () {
        mørke();
    });
})(jQuery);