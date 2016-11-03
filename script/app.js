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

// $('#signup-form').on('submit', function(event) {
//     // write your code here
//     var password1 = $('input[id=password]').val();
//     var password2 = $('input[id=confirmPassword]').val();

//     if (password1 !== password2) {
//       event.preventDefault();
//       alert('Passwords are not matching.');
//     }
//     else if (password1.length < 10) {
//       event.preventDefault();
//       alert('Password is not 10 characters.');
//     }
// });

var ISSMap = window.setInterval(ISS, 3000);


function ISS() {
    jQuery.getJSON('https://api.wheretheiss.at/v1/satellites/25544').then(
    function(res) {
        var $longitude = res.longitude
        var $latitude = res.latitude
        $(".position").remove();
        $("article h2").after(`<p class="position">Latitude : ${$latitude} Longitude : ${$longitude}</p>`);
        
        var $img = $('img');
        $img.attr('src', `https://maps.googleapis.com/maps/api/staticmap?center=${$latitude},${$longitude}
        &zoom=2
        &size=600x300
        &markers=color:red%7Clabel=I%7C${$latitude},${$longitude}
        &key=AIzaSyBTY9MLqH3iRQuU8ZyGNrxBXVLGEX2zDhI`)
    }
    )
}
    
