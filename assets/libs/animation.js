if ( !window.requestAnimationFrame ) {

  window.requestAnimationFrame = ( function() {

    return window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function( /* function FrameRequestCallback */ callback, /* DOMElement Element */ element ) {
        window.setTimeout( callback, 1000 / 60 );
    };

  })();
}

    var scroll_cache = $(window).scrollTop();

    ;(function animate(){
        if (scroll_cache !== $(window).scrollTop())
        {
            scroll_cache = $(window).scrollTop();
            
            console.log("1");

        }
        requestAnimationFrame( animate );
    })();

// window.requestAnimFrame = (function(){
//     return
//         window.requestAnimationFrame       || 
//         window.webkitRequestAnimationFrame || 
//         window.mozRequestAnimationFrame    || 
//         window.oRequestAnimationFrame      || 
//         window.msRequestAnimationFrame     || 
//         function(/* function */ callback, /* DOMElement */ element){
//             window.setTimeout(callback, 1000 / 60);
//         };
// })();

// (function() {
//     var lastTime = 0;
//     var vendors = ['ms', 'moz', 'webkit', 'o'];
    
//     for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x)
//     {
//         window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
//         window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
//     }
 
//     if (!window.requestAnimationFrame)
//         window.requestAnimationFrame = function(callback, element) {
//             var currTime = new Date().getTime();
//             var timeToCall = Math.max(0, 16 - (currTime - lastTime));
//             var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
//               timeToCall);
//             lastTime = currTime + timeToCall;
//             return id;
//         };
 
//     if (!window.cancelAnimationFrame)
//         window.cancelAnimationFrame = function(id) {
//             clearTimeout(id);
//         };
// }());