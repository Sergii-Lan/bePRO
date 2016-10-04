console.log($);
//-----------------------JS-7------------------/
$(function () {
    var $liElem = $('li');
    var $pElem = $('p');
    var $aElem = $('a');
    var $aFirst = $('.li_first a');
    var $aSecond = $('.li_second a');
    var $aThird = $('.li_third a');
    var $pElemFirst = $('.first');
    var $pElemSecond = $('.second');
    var $pElemThird = $('.third');
    var $liElemFirst = $('.li_first');
    var $liElemSecond = $('.li_second');
    var $liElemThird = $('.li_third');

    $liElemFirst.on('click', function (e) {
        e.preventDefault();
        console.log('onclick');
        $liElem.css('background', 'white');
        $(this).css('background', 'blue');
        $(this).css('color', 'white');
        $pElem.css('display', 'none');
        $pElemFirst.slideToggle();
        $aElem.css('color','black');
        $aFirst.css('color','white');
    });

    $liElemSecond.on('click', function (e) {
        e.preventDefault();
        console.log('onclick');
        $liElem.css('background', 'white');
        $(this).css('background', 'blue');
        $pElem.css('display', 'none');
        $pElemSecond.slideToggle();
        $aElem.css('color','black');
        $aSecond.css('color','white');
    });

    $liElemThird.on('click', function (e) {
        e.preventDefault();
        console.log('onclick');
        $liElem.css('background', 'white');
        $(this).css('background', 'blue');
        $pElem.css('display', 'none');
        $pElemThird.slideToggle();
        $aElem.css('color','black');
        $aThird.css('color','white');
    });

    //-----------------------------JS-8----------------------/




});