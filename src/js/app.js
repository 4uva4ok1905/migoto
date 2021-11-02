import $ from "jquery";
import * as AOS from "aos/dist/aos";

require("@fancyapps/fancybox")

// ANIMATION SCROLL
AOS.init({
    offset: 250,
    duration: 750,
    easing: 'ease-in-sine',
    delay: 100,
});

// FANCYBOX
const data_fancybox = $("[data-fancybox]");

if (data_fancybox.length > 0) {
    data_fancybox.fancybox({
        touch: false,
        protect: true
    });
}

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

    // COUNTER ON SCROLL
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

// FORM
$("form").on("submit", function (e) {
    e.preventDefault();

    const _this = $(this);
    const data = _this.serialize()

    $.ajax({
        type: "POST",
        url: "https://fero.com.ua/mail.php",
        data: data,
        success: function (json) {

            _this.find(".is--error").removeClass("is--error");

            if (json['success']) {
                _this.trigger("reset");
                $('[type="date"], [type="time"]').trigger("change");
            } else {
                if (json['error']) {
                    for (let i in json['error']) {
                        const element = _this.find('[name="' + i + '"]')

                        element.addClass("is--error")
                    }
                }

            }
        }
    });
})

$('[type="date"], [type="time"]').change(function () {
    if (!$(this).val()) {
        $(this).val("");
        $(this).parent().addClass("is--empty")
    } else {
        $(this).parent().removeClass("is--empty")
    }
}).blur(function () {
    if (!$(this).val()) {
        $(this).val("");
    }
}).trigger("change");

$('.js-scroll').on("click", function (e) {
    e.preventDefault();

    $(".js-openMenu").removeClass("is--open");
    $("body").removeClass("is--menu-open");
    $(".js-mobileMenu").fadeOut();

    const tag = $($(this).data("to"));
    $('html,body').animate({scrollTop: tag.offset().top}, 'slow');
})
