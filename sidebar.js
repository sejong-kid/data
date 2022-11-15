jQuery(function () {
    jQuery(".sub_menu ul.small_menu").hide();
    jQuery(".sub_menu ul.big_menu").click(function () {
        jQuery("ul", this).slideToggle(300);

    });
})