
//-----------------------JS-7------------------/
$(function () {
    var $liElem = $('li');
    var $pElem = $('p');
    var $aElem = $('a');
    var $pElemFirst = $('.first');
    var $pElemSecond = $('.second');
    var $pElemThird = $('.third');
    var $liElemFirst = $('.active_li');
    var $liElemSecond = $('.li_second');
    var $liElemThird = $('.li_third');


$liElem.on('click', function (e) {
    e.preventDefault();
    $liElem.removeClass('active_li');
    $(this).addClass('active_li');
    var $aActive = $(this).find('a');
    $aElem.removeClass('active_a');
    $aActive.addClass('active_a');
    $pElem.css('display', 'none');
});


    $liElemFirst.on('click', function () {
        $pElemFirst.slideToggle();
    });

    $liElemSecond.on('click', function () {
        $pElemSecond.slideToggle();
    });

    $liElemThird.on('click', function () {
        $pElemThird.slideToggle();
    });


});