console.log(document);

var divWrapper = document.createElement('div');
divWrapper.classList.add('wrapper');
document.body.appendChild(divWrapper);

var form = document.createElement('form');
divWrapper.appendChild(form);

var title2 = document.createElement('h2');
title2.innerHTML = 'Тест по программированию';
form.appendChild(title2);

/****************************Вопрос 1*****************************/

var p1 = document.createElement('p');
p1.innerHTML = '1. Вопрос №1';
form.appendChild(p1);

var inputCheck = document.createElement('input');
inputCheck.type = 'checkbox';
form.appendChild(inputCheck);
var spanAfterInput = document.createElement('span');
spanAfterInput.innerHTML = ' Вариант ответа №1';
form.appendChild(spanAfterInput);
var brAfterInput = document.createElement('br');
form.appendChild(brAfterInput);

var inputCheck2 = document.createElement('input');
inputCheck2.type = 'checkbox';
form.appendChild(inputCheck2);
var spanAfterInput2 = document.createElement('span');
spanAfterInput2.innerHTML = ' Вариант ответа №2';
form.appendChild(spanAfterInput2);
var brAfterInput2 = document.createElement('br');
form.appendChild(brAfterInput2);

var inputCheck3 = document.createElement('input');
inputCheck3.type = 'checkbox';
form.appendChild(inputCheck3);
var spanAfterInput3 = document.createElement('span');
spanAfterInput3.innerHTML = ' Вариант ответа №3';
form.appendChild(spanAfterInput3);
var brAfterInput3 = document.createElement('br');
form.appendChild(brAfterInput3);

/****************************Вопрос 2*****************************/

var p2 = document.createElement('p');
p2.innerHTML = '2. Вопрос №2';
form.appendChild(p2);

var inputCheck4 = document.createElement('input');
inputCheck4.type = 'checkbox';
form.appendChild(inputCheck4);
var spanAfterInput4 = document.createElement('span');
spanAfterInput4.innerHTML = ' Вариант ответа №1';
form.appendChild(spanAfterInput4);
var brAfterInput4 = document.createElement('br');
form.appendChild(brAfterInput4);

var inputCheck5 = document.createElement('input');
inputCheck5.type = 'checkbox';
form.appendChild(inputCheck5);
var spanAfterInput5 = document.createElement('span');
spanAfterInput5.innerHTML = ' Вариант ответа №2';
form.appendChild(spanAfterInput5);
var brAfterInput5 = document.createElement('br');
form.appendChild(brAfterInput5);

var inputCheck6 = document.createElement('input');
inputCheck6.type = 'checkbox';
form.appendChild(inputCheck6);
var spanAfterInput6 = document.createElement('span');
spanAfterInput6.innerHTML = ' Вариант ответа №3';
form.appendChild(spanAfterInput6);
var brAfterInput6 = document.createElement('br');
form.appendChild(brAfterInput6);



/****************************Вопрос 3*****************************/

var p3 = document.createElement('p');
p3.innerHTML = '3. Вопрос №3';
form.appendChild(p3);

var inputCheck7 = document.createElement('input');
inputCheck7.type = 'checkbox';
form.appendChild(inputCheck7);
var spanAfterInput7 = document.createElement('span');
spanAfterInput7.innerHTML = ' Вариант ответа №1';
form.appendChild(spanAfterInput7);
var brAfterInput7 = document.createElement('br');
form.appendChild(brAfterInput7);

var inputCheck8 = document.createElement('input');
inputCheck8.type = 'checkbox';
form.appendChild(inputCheck8);
var spanAfterInput8 = document.createElement('span');
spanAfterInput8.innerHTML = ' Вариант ответа №2';
form.appendChild(spanAfterInput8);
var brAfterInput8 = document.createElement('br');
form.appendChild(brAfterInput8);

var inputCheck9 = document.createElement('input');
inputCheck9.type = 'checkbox';
form.appendChild(inputCheck9);
var spanAfterInput9 = document.createElement('span');
spanAfterInput9.innerHTML = ' Вариант ответа №3';
form.appendChild(spanAfterInput9);
var brAfterInput9 = document.createElement('br');
form.appendChild(brAfterInput9);

/************************************Submit*****************************/

var inputSubmit = document.createElement('input');
inputSubmit.type = 'submit';
inputSubmit.value = 'Проверить мои результаты';
form.appendChild(inputSubmit);


console.log(divWrapper);




