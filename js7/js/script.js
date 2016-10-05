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
        $pElem.css('display', 'none');
        $(this).index();
        console.log($(this).index());
        $pElem.index();
        index = $(this).index();
        console.log($pElem.index());
        $pElem.slideToggle();
    });


    // $liElemFirst.on('click', function () {
    //     $pElemFirst.slideToggle();
    // });
    //
    // $liElemSecond.on('click', function () {
    //     $pElemSecond.slideToggle();
    // });
    //
    // $liElemThird.on('click', function () {
    //     $pElemThird.slideToggle();
    // });


});