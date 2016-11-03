$('ul li img').on('click', function() {
    var imgSource = $(this).attr('src');
    var imgText = $(this).attr('alt');
    $(".overlay").toggleClass('overlayHide');
    $(".bigImage").attr('src', imgSource);
    $(".imageCaption").text(imgText);
})

$('.overlay').click(function() {
      $('.overlay').toggleClass('overlayHide');
  })

