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


