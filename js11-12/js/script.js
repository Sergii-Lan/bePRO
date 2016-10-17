
$(function () {
    /**call my plagin(carousel)*/
    $('div.wrapper').carousel();


    /**Шаблонизатор*/

    var html = $('#resume').html();

    var data = {
        name: 'Лановий Сергій Сергійович',
        date: '10.05',
        causes: 'Хочу вивчити фронтенд оскільки:',
        contacts: 'Мої контакти:',
        mob: '0667777777',
        email: 'ndmd@gmail.com',
        vk: 'Мій профіль вконтакті:',
        interests: 'Інтереси:',
        myInterest: 'IT',
        whyIt: 'Актуальний і перспективний напрямок діяльності'
    };

    var content = tmpl(html, data);

    $('body').append(content);
});






