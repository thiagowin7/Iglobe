$(function() {
    var atual_fs, next_fs, prev_fs;

    $('.next').click(function(){
        atual_fs = $(this).parent();
        next_fs = $(this).parent().next();


        $('#progress li').eq($('fieldset').index(next_fs)).addClass('ativo')
        atual_fs.hide(800);
        next_fs.show(800);
        $('body,html').animate({
            scrollTop:0
        }, 700);
    })

    $('.prev').click(function(){
        atual_fs = $(this).parent();
        prev_fs = $(this).parent().prev();


        $('#progress li').eq($('fieldset').index(atual_fs)).removeClass('ativo')
        atual_fs.hide(800);
        prev_fs.show(800);
    })

    $('#formulario input[type=submit]').click(function() {
        return false;
    });
});