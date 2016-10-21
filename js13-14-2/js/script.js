'use strict';


$(function () {

    /**----------LocalStorage+JSON+Templ-----------*/

    var html = $('#test11').html();
    var bod = $('.wrapper');


    var test = {
        question: [
            {
                text: '1. Для чего используется конструкция try-catch в javascript?',
                answer: [
                    {text: 'Для обработки возможных ошибок', check: true},
                    {text: 'Для генерирования ошибок.', check: false},
                    {text: 'Для замены условного оператора if', check: false}
                ]
            },

            {
                text: '2. Какой формат передачи данных наиболее распостранен?',
                answer: [
                    {text: 'XML', check: false},
                    {text: 'JSON', check: true},
                    {text: 'TXT ', check: false}
                ]
            },

            {
                text: '3. С помощью какого объекта осуществляется доступ к локальному хранилищу в современных браузерах?',
                answer: [
                    {text: 'localStorage', check: true},
                    {text: 'LocalStorage', check: false},
                    {text: 'Storage', check: false}
                ]
            }
        ]
    };

    var content = tmpl(html, {
        data: test
    });

    bod.append(content);




/**-----------modalWindow-function-----------------*/
   modalWindow();


    localStorage.setItem('test', JSON.stringify(test));
    var page1 = localStorage.getItem('test');
    var myDat = JSON.parse(page1);
    console.log(myDat);


    /**------------get rightAnswers----------------*/

    var rightAnswers = [];
    for (var i = 0; i < myDat.question.length; i++) {
        for (var j = 0; j < myDat.question[i].answer.length; j++) {
            var currentAnswer = myDat.question[i].answer[j].check;
            rightAnswers.push(currentAnswer);
        }
    }
    console.log(rightAnswers);

    /**------------get Answers from checkbox----------------*/

    var givenAnswers = [];
    $('.class_modal').on('click', function () {

        $('input[type="checkbox"]').each(function () {
            if ($(this).prop('checked')) {
                givenAnswers.push(true);
            } else {
                givenAnswers.push(false);
            }
        });
        console.log(givenAnswers);


        /**------------matching answers and checkbox----------------*/

        var $result1 = 'Отличный результат!';
        var $result2 = 'Не правильно, попробуй еще раз.';
        var result1 = JSON.stringify(givenAnswers) === JSON.stringify(rightAnswers);
        if (result1 == true) {
            $('#modalText').append($result1);
        } else {
            $('#modalText').append($result2);

        }
        localStorage.clear();

        console.log(result1);

    });

});







