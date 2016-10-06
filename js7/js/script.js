/**
 * Tabs Application.
 */

/** Init */
var $li = $('ul.tabs-buttons > li');
var $p = $('.tabs-content > p');

/** Document Ready */
$(document).ready(function () {

    /** Click Event Handler */
    $li.on('click', function () {

        /** Deactivate Active Elements */
        $li.filter('.active').removeClass('active');
        $p.filter('.active').removeClass('active');

        /** Activate Actual Elements */
        var $index = $(this).addClass('active').index();
        $p.eq($index).addClass('active');

        /** Prevent Default Action */
        return false;
    });

});


/** ..i commentiruy code, bleat' !! */