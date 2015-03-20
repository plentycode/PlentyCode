$(function () {
    if (window.location.hash) {
        setTimeout('showContent()', 200);
    }
    $('body').click(function (e) {
        showContent();
    });
    $('.menu-bottom, .plenty-info-box, .plenty-social').click(function (e) {
        e.stopPropagation();
    });
    $('.plenty-icon').click(function () {
        $('.plenty-icon').removeClass('selected');
        $(this).addClass('selected');
    });
    if (screen.width <= 699) {
        $('body').addClass('mobile');
    }
});

function showContent() {
    $('.menu-bottom').toggleClass('open');
    $('.plenty-logo').toggleClass('logo-to-corner');
    $('.plenty-info-box').toggleClass('open');
    $('.plenty-social').toggleClass('hidden');
};