// $('ul li img').on('click', function() {
//     var $img = $(this);
//     var imgSource = $img.attr('src');
//     var imgText = $img.attr('alt');
    
//     $('body').append('<div class="overlay"></div>');
//     $('.overlay').append('<img src="' + imgSource +'">');
//     $('.overlay').append('<p>' + imgText + '</p>');
    
//     $('.overlay').on('click', function() {
//         $('.overlay').toggleClass('overlayHide');
//     })
// })
// var $username = $("#username");
// var $password = $("#password");
// var $confirmPassword = $("#confirmPassword")

$('#signup-form').on('submit', function(event) {
    // write your code here
    var password1 = $('input[id=password]').val();
    var password2 = $('input[id=confirmPassword]').val();

    if (password1 !== password2) {
      event.preventDefault();
      alert('Passwords are not matching.');
    }
    else if (password1.length < 10) {
      event.preventDefault();
      alert('Password is not 10 characters.');
    }
});

// jQuery.getJSON('https://maps.googleapis.com/maps/api/geocode/json?address=montreal').then(
//     function(res) {
//         console.log(res.results[0].geometry.location);
//     }
// )

