$(function () {
    setTimeout(function () {
        $('.name').animate({
            opacity:"1",
            top:"15%"
        },1000);

    },6000);
    setTimeout(function () {
        $('.happy').animate({
            opacity:"1",
            top:"15%"
        },1000);

    },6000);
    setTimeout(function () {
        $('.button-style1').animate({
            opacity:"1",
            top:"70%"
        },1500);
        $('.button-style2').animate({
            opacity:"1",
            top:"85%"
        },1000);
    },9000);
	// $(window).click(function(){
	// 	$('audio')[0].play();
	// });
	// window.audio=$('audio')[0].play();
})



// $(document).ready(function () {
//         $(".button-style2").mouseenter(function () {
//             var x = Math.floor(Math.random() * 1000);
//             var y = Math.floor(Math.random() * 500);
//             $(".button-style2").animate({
//                 left: x,
//                 top: y
//             });
//         });
    
       
//     });

function hover() {
    
    var dislike = document.getElementById('hover');
    console.log(dislike);
      var x = Math.floor(Math.random() * 1250);
      var y = Math.floor(Math.random() * 600);
  
      
      dislike.style.position = 'absolute'; 
      dislike.style.left = x + 'px'; 
      dislike.style.top = y + 'px'; 
      dislike.style.transition = 'all .2s linear';
  
  }