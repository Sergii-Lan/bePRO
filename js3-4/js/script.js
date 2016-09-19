console.log(document);

var divWrapper = document.createElement('div');
divWrapper.classList.add('wrapper');
document.body.appendChild(divWrapper);

var title2 = document.createElement('h2');
title2.innerHTML = 'Тест по программированию';
divWrapper.appendChild(title2);

var form = document.createElement('form');
divWrapper.appendChild(form);

/****************************questions - answers*****************************/

var formObject = {
    questions: ["1.Вопрос №1", "2.Вопрос №2", "3.Вопрос №3"],
    answers: ["Вариант ответа №1", "Вариант ответа №2", "Вариант ответа №3"],

    block: function () {

        for (i = 0; i < 3; i++) {
            var p1 = document.createElement('p');
            p1.innerHTML = this.questions[i];
            form.appendChild(p1);

            for (k = 0; k < 3; k++) {
                var inputCheck = document.createElement('input');
                inputCheck.type = 'checkbox';
                form.appendChild(inputCheck);
                var spanAfterInput = document.createElement('span');
                spanAfterInput.innerHTML = this.answers[k];
                form.appendChild(spanAfterInput);
                var brAfterInput = document.createElement('br');
                form.appendChild(brAfterInput);
            }

        }
    }

};

formObject.block();

/************************************Submit*****************************/

var inputSubmit = document.createElement('input');
inputSubmit.type = 'submit';
inputSubmit.value = 'Проверить мои результаты';
form.appendChild(inputSubmit);


console.log(divWrapper);




