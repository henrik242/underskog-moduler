(function ($) {

    // MYRKSKOG™
    // Foreslå endringer på https://github.com/henrik242/myrkskog

    function mørke() {
        if (!autoMørke || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            $('html').css({
                 'scrollbar-color': 'gray black',
            });
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
            $(".tabbed_menu, .header, .doc_sidebar").css({
                "background": "black"
            });
            $(".byline, .user_settings_text, .editing_bar, .thread_excerpt, #user_unread_count, .login_count, .activity_item_block, .sidebar, .shout_actions, div, .count, body #menu a, body #footer a").css({
                "color": "lightgray"
            });
            $(".dropdown_box, .dropdown_container, .annotation, #menu, .submenu, .tabs, .page_selector a, .site_search_dropdown, #tip_inbox ul li, .message_conversation_item, .form .textile_field .textile_field_uploading, .form .textile_field .textile_field_uploading .textile_field_images, .togglebar, .search_result_group h4, #conference_selector_list>ul>li, .filter_tabs ul, .selectized_input .selectize-control, .selectize-dropdown, body.infinitely_scrolled #footer").css({
                "background": "#222",
                "border-color": "#444"
            });
            $(".sale_type, .tabs_tab.selected, .current_page, .current_tab, .header .tab, .filter_tabs ul li.tab.current, #comments_search_results .search_result").css({
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
            $(".highlight, .important, .spoiler_text, #new_comment_notification .count, .calendar th, .big_warning, .big_hooray").css({
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
            $('.doc_sidebar p span, .doc_sidebar_close, .field_hint strong').css({
                "background": "#444", "color": "#ccf"
            });
            $('.calendar td.weekendDay a').css({
                "color": "#ffc6c4"
            });
            $('.header, .tabbed_menu').css({
                "border-bottom": "solid 1px #333"
            });
            $('.activity_item_list ul li a.username, a.object_link.comment_link, .tabbed_menu>ul li.tab a, .action a, .kudos_top_list h4 a').css({
                "color": "lightgray"
            });
            $("#profile_image_preview ul").css({ 'background': '#555' });
            $("#profile_image_preview ul li em").css({ 'color': '#ccc' });
            $(".table_of_contents > h3").css({
                "color": "black",
            });
        }
    }

    mørke();
    Underskog.onPageModification(function () {
        mørke();
    });
})(jQuery);