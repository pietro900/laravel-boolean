require('./bootstrap');

var $ = require('jquery');


$('.faq-body-question').click(function functionName() {
    $(this).find('i').toggleClass('fa-plus fa-minus');
    if ($(this).find('.risposta').hasClass('aperta')) {
        $(this).find('.risposta').removeClass('aperta');
    } else {
        $(this).find('.risposta').addClass('aperta');
    }

    $(document).click(function(event) {
        var target = $(event.target);
        if(!target.hasClass('domanda') && !target.hasClass('risposta')){
            $('.risposta').removeClass('aperta');
            $('i').removeClass('fa-minus');
            $('i').addClass('fa-plus');
        }
    });
});
