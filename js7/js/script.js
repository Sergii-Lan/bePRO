//-----------------------JS-7------------------/
$(document).ready(function () {
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

            // index = $(this).index();

            // switch (index) {
            //     case 0: {
            //         $pElemFirst.slideToggle();
            //         break;
            //     }
            //     case 1: {
            //         $pElemSecond.slideToggle();
            //         break;
            //     }
            //     case 2: {
            //         $pElemThird.slideToggle();
            //         break;
            //     }
            // }


            $(this).index();
            console.log($(this).index());
            index = $(this).index(this);
            console.log($pElem.index(index));
            $('.main_block').find('p').index().slideToggle();
            // $pElem.slideToggle();
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
});