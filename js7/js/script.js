
//-----------------------JS-7------------------/
$(function () {
    var $liElem = $('li');
    var $pElem = $('p');
    var $aElem = $('a');
    // var $aFirst = $('.li_first a');
    // var $aSecond = $('.li_second a');
    // var $aThird = $('.li_third a');
    var $pElemFirst = $('.first');
    var $pElemSecond = $('.second');
    var $pElemThird = $('.third');
    var $liElemFirst = $('.active_li');
    var $liElemSecond = $('.li_second');
    var $liElemThird = $('.li_third');
    var $mainBlock = $('div.main-block');

    console.log($mainBlock);

$liElem.on('click', function (e) {
    e.preventDefault();
    $liElem.removeClass('active_li');
    $(this).addClass('active_li');
    var $aActive = $(this).find('a');
    $aElem.removeClass('active_a');
    $aActive.addClass('active_a');


});


    $liElemFirst.on('click', function (e) {
        e.preventDefault();
        $pElem.css('display', 'none');
        $pElemFirst.slideToggle();
    });

    $liElemSecond.on('click', function (e) {
        e.preventDefault();
        $pElem.css('display', 'none');
        $pElemSecond.slideToggle();
    });

    $liElemThird.on('click', function (e) {
        e.preventDefault();
        $pElem.css('display', 'none');
        $pElemThird.slideToggle();
    });

});