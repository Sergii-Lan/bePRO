

(function ($) {

    $.fn.carousel = function () {

        var leftUIEl = $('.carousel-arrow-left'),
            rightUIEl = $('.carousel-arrow-right'),
            elementsList = $('.carousel-list'),

            pixelsOffset = 275,
            currentLeftValue = 0,
            elementsCount = elementsList.find('li').length,
            minimumOffset = -((elementsCount - 3) * pixelsOffset),
            maximumOffset = 0;
        
        /** click on right button*/
        leftUIEl.click(function () {
            if (currentLeftValue != maximumOffset) {
                currentLeftValue += 275;
                elementsList.animate({left: currentLeftValue + "px"}, 500);
            }
        });
        
        /** click on left button*/
        rightUIEl.click(function () {
            if (currentLeftValue != minimumOffset) {
                currentLeftValue -= 275;
                elementsList.animate({left: currentLeftValue + "px"}, 500);
            }
        });
    }
})(jQuery);