
$(document).ready(function() {

    $('section#screenshots a').on('click', function() {
        $('div#modal img').attr('src',$(this).attr('data-image-url'));
    });

});
