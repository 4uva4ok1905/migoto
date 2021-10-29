import $ from "jquery";

// MENU
$(".js-openMenu").on("click", function () {
    $(this).toggleClass("is--open")
    $("body").toggleClass("is--menu-open")
    $(".js-mobileMenu").fadeToggle();
});

const $header = $(".js-header");

$(window).scroll(function () {

    const headerHeight = $header.height();

    if ($(this).scrollTop() > headerHeight) {
        $header.addClass("is--hide")
    } else {
        $header.removeClass("is--hide")
    }

    if ($(this).scrollTop() > 600) {
        $header.addClass("is--fixed")
    } else {
        $header.removeClass("is--fixed")
    }
});
