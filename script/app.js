/* Write your code here! */
var $replace = $("<button id='replace' class='myButton'>show announcement</button>")
var $button = $("<button id='btn' class='myButton'>X</button>")
$(".announcement").append($button);
$(".announcement").append($replace);

// $("button").click(function(){
//     $(this).hide();
// })
$(".myButton").click(function(event){
    $(".announcement p, #replace, #btn").toggle();
})

