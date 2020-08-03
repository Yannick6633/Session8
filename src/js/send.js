// Envoi email

$('#sending_form').click(function(e){
    e.preventDefault();
    var data = {
        email: $('#mail-email').val(),
        name: $('#mail-name').val(),
        message: $('mail-message').val()
    };

    // AJAX
    
    $.ajax({
        url: "mail.php",
        type: 'POST',
        data: data,
        success: function(data) {
            $('#js_alert_success').css({'display' : 'block'});
            setTimeout(function(){
                $('#js_alert_success').css({'display' : 'none'});
                $('#mail-email').val("");
                $('#mail-name').val("");
                $('#message').val("");
            }, 3000);
        },
        error: function(data) {
            $('#js_alert_danger').css({'display' : 'block'});
            setTimeout(function(){
                $('#js_alert_danger').css({'display' : 'none'});
                $('#mail-email').val("");
                $('#mail-name').val("");
                $('#mail-message').val("");
            }, 3000);
        }
    });
});
