console.log(document);

var divWrapper = document.createElement('div');
divWrapper.classList.add('wrapper');
document.body.appendChild(divWrapper);

var title2 = document.createElement('h2');
title2.innerHTML = 'Тест по программированию';
divWrapper.appendChild(title2);

var form = document.createElement('form');
divWrapper.appendChild(form);

// function header(x, y, z){
//     x = document.createElement(y);
//      z.appendChild(x);
// }

// header('form', 'form', 'divWrapper');

/****************************questions - answers*****************************/

var formObject = {
    questions: ["1.Вопрос №1", "2.Вопрос №2", "3.Вопрос №3"],
    answers: ["Вариант ответа №1", "Вариант ответа №2", "Вариант ответа №3"],

    block: function () {

        for (i = 0; this.questions.length > i; i++) {
            var p1 = document.createElement('p'); // create  parent => p
             this.subblock(p1, 'input'); // create child => input

            p1.innerHTML = this.questions[i];
            form.appendChild(p1);

            for (k = 0; k < 3; k++) { // what is it? krasche rozdiliti


                // spochatku

                // function qwe(a, b, c){
                //     a = document.createElement('input');
                //     a.b = c;
                //     form.appendChild(a);
                // }
                // qwe('inputCheck', 'type', 'checkbox');

                //this.subblock('warp', 'input')
                var label1 = document.createElement('label');
                form.appendChild(label1);
                var inputCheck = document.createElement('input');
                inputCheck.type = 'checkbox';
                label1.appendChild(inputCheck);
                var spanAfterInput = document.createElement('span');
                spanAfterInput.innerHTML = this.answers[k];
                label1.appendChild(spanAfterInput);

                // riznitsa tilki v tipah
                // tak paredavay tip yak argument v function +++ daaaaaa!!! pobeda!!)) zato direction  is right
                //a tam ya pomozhu
                // spochatku this block - da
            }

        }
    },

    subblock: function ($parent, $child) {
        var inputCheck = document.createElement($child); // prinimaen parent p and child input and append child to parent
        $parent.appendChild(inputCheck);
    },


    /************************************Submit*****************************/
    button: function (counter2) {
        for(h = 0; h < counter2 ; h++)
        var inputSubmit = document.createElement('input');
        inputSubmit.type = 'submit';
        inputSubmit.value = 'Проверить мои результаты';
        form.appendChild(inputSubmit);
    }

};


formObject.block(3);
formObject.button(1);// vid 1 do 1, prosto koli nada - bude gnuchko, bazhano


console.log(divWrapper);


/***
 * SCHEMA:
 *
 *
 * var app = {
 *
 *  createElement: function($parent, $child, $counter){
  *     for (1 to $counter) {
  *       create form;
 *        $parent.append(form)
  *     }
  *
  *     return $child;
 *  }
 *
 *  }
 *
 *
 * //---- run ---
 *
 * div.main = app.createElement(doc.body, div.main, 1);
 * form = app.createElement(div.main, new form, 1);
 *
 * app.createElement(form, input, 3);
 * app.createElement(form, checkbox, 3);
 * app.createElement(form, span, 3);
 *
 *
 * // --------------
 * its all your code
 *  - 1 function - vona perekrie vsi varianti
 *  - 3 args: where, who, count
 *
 *
 * po factu - kogo sozdaem i kuda appendim
 * pri neobhodimosti - mozhesh dobavit'' argumetov
 * for additional options
 *
 *
 *

 */

