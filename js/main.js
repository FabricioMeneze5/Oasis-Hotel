$(document).ready(function() {
    $('#phoneId').mask('000 000 000')
    $('#adultsNumber').mask('00')
    $('#childrenNumber').mask('00')

    $('form').validate({
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true
            },
            room: {
                required: true
            },
            adults: {
                required: true
            },
            checkin: {
                required: true
            },
            checkout: {
                required: true
            }
        },
        messages: {
            name: 'Please, your full name.',
            email: 'Please, type a valid email.',
            phone: 'Please, type you phone number',
            room: 'Please, select a room',
        },
        submitHandler: function(form){}
    })

    $('.card-body button').click(function() {
        const destiny = $('#roomId');
        const roomName = $(this).parent().find('h5').text();

        $(destiny).val(roomName);

        $('html').animate({
            scrollTop: destiny.offset().top
        })
    })
})

