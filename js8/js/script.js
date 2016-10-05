console.log($);

$(function () {

    var $firstName = $('.firstname');
    var $lastName = $('.lastname');
    var $address = $('.address');
    var $prompt_block = $('.prompt1, .prompt2, .prompt3');
    var $prompt1 = $('.prompt1');
    var $prompt2 = $('.prompt2');
    var $prompt3 = $('.prompt3');
    var $button = $('[type="button"]');


    $firstName.hover( function () {
        $prompt1.css('opacity', '100')

    }).mouseout( function () {
        $prompt1.animate({
            opacity: '0'
        }, 1000);
    });


    $lastName.hover( function () {
        $prompt2.css('opacity', '100')

    }).mouseout( function () {
        $prompt2.animate({
            opacity: '0'
        }, 1000);
    });


    $address.hover( function () {
        $prompt3.css('opacity', '100');

    }).mouseout( function () {
        $prompt3.animate({
            opacity: '0'
        }, 1000);
    });


    $button.on('click', function () {
        $prompt_block.css('opacity', '100');
    });


});