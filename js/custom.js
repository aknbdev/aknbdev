(function ($) {

    "use strict";

    // COLOR MODE
    $('.color-mode').click(function () {
        $('.color-mode-icon').toggleClass('active')
        $('body').toggleClass('dark-mode')
    })

    // HEADER
    $(".navbar").headroom();

    // PROJECT CAROUSEL
    $('.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        nav: true
    });

    // SMOOTHSCROLL
    $(function () {
        $('.nav-link, .custom-btn-link').on('click', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 49
            }, 1000);
            event.preventDefault();
        });
    });

    // TOOLTIP
    $('.social-links a').tooltip();

})(jQuery);

function copyElementText(id) {
    var text = document.getElementById(id).innerText;
    var elem = document.createElement("textarea");
    const element = document.getElementById(id);
    element.title = "copied";
    document.body.appendChild(elem);
    elem.value = text;
    elem.select();
    document.execCommand("copy");
    // alert(text + " copied");
    document.body.removeChild(elem);
}
