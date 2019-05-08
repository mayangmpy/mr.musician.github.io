$(function () {
    $('.main').jetSlider('onAfterMove', function (newIndex, oldIndex) {
        $('.nav li')
            .removeClass('active')
            .eq(newIndex)
            .addClass('active');

        var current = $('.page').eq(newIndex);
        var el      = current.find('.teletype > span:first-child');
        var cursor  = current.find('.teletype > span:last-child');
        var text    = current.find('.text').html();

        switch(newIndex){
            case 0:
            case 1: delay = 300; break;
            default: delay = 100; break;
        }

        if(! current.hasClass('teletyped')){
            var args = {
                text: [text],
                delay: delay
            };

            switch(newIndex){
                case 1:
                    args['doSomething'] = function(){
                        current.find('img').slideDown();
                    };
                break;
                case 2:
                    args['doSomething'] = function(){
                        current.find('.order-1').slideDown(300, function(){
                            current.find('.order-2').fadeIn(600);
                        });
                    };
                break;
                case 3:
                    var dur = 600;
                    args['doSomething'] = function(){
                        current.find('.order-1').slideDown(dur, function(){
                            current.find('.order-2').slideDown(dur, function(){
                                current.find('.order-3').slideDown(dur, function(){
                                    current.find('.order-4').slideDown(dur);
                                })
                            })
                        })
                    };
                break;
            }

            $(el).teletype(args);
            $(cursor).teletype({
                text: ['_', ' '],
                delay: 0
            });

            current.addClass('teletyped');
        }
    });

    $('#target').teletype({
      text: [
        'Hi, Mr. Musician'
      ],
      delay: 500
    });

    $('#cursor').teletype({
      text: ['_', ' '],
      delay: 0
    });
});
