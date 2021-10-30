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
    const scrollTop = $(this).scrollTop();

    if (scrollTop > headerHeight) {
        $header.addClass("is--hide")
    } else {
        $header.removeClass("is--hide")
    }

    if (scrollTop > 600) {
        $header.addClass("is--fixed")
    } else {
        $header.removeClass("is--fixed")
    }

    $(".js-counter:not(.is--finish)").each(function () {
        if (scrollTop > $(this).offset().top - window.innerHeight) {
            $(this).addClass("is--finish");
            startCounter($(this))
        }
    });
});


function startCounter($el) {
    const total = $el.data("count");

    let countInterval = null;
    let countInit = 0;

    countInterval = setInterval(function () {
        if (countInit >= parseInt(total)) {
            clearInterval(countInterval)

            $el.text(total)
        } else {
            countInit += 51;

            $el.text(countInit)
        }
    }, 25);
}
