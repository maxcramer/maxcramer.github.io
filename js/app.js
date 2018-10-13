function loopExtremmums(min, max, currentNumber){
  if(currentNumber>max){
    return min;
  }
  if(currentNumber<min){
    return max;
  }
  return currentNumber;
}
function slider(el){
  const prev  = el.querySelector('.carousel__button--prev');
  const next = el.querySelector('.carousel__button--next');
  const wrap = el.querySelector('.carousel__wrapper');
  const items = el.querySelectorAll('.carousel__item');
  const itLength = items.length;
  let current = 0;

  prev.addEventListener('click',function(){
    current--;
    current = loopExtremmums(0,itLength-1, current);
    console.log(current, itLength,(current/itLength*-100)+'%');
    wrap.style.transform = 'translateX('+(current/itLength*-100)+'%)';
  });
  next.addEventListener('click',function(){
    current++;
    current = loopExtremmums(0,itLength-1, current);
    wrap.style.transform = 'translateX('+(current/itLength*-100)+'%)';
  });
  // setInterval(function(){
  //   return;
  //   current++;
  //   current = loopExtremmums(0,itLength-1, current);
  //     console.log(current, itLength,(current/itLength*100)+'%');
  //   wrap.style.transform = 'translateX('+(current/itLength*-100)+'%)';
  // },3000);
}
slider(document.querySelector('.carousel'));

// Fucntion taken from https://codepen.io/rleve/pen/iCbgy

(function() {

     'use strict';

    // Feature Test
    if ( 'querySelector' in document && 'addEventListener' in window && Array.prototype.forEach ) {

        // Function to animate the scroll
        var smoothScroll = function (anchor, duration) {

            // Calculate how far and how fast to scroll
            var startLocation = window.pageYOffset;
            var endLocation = anchor.offsetTop-28;
            var distance = endLocation - startLocation;
            var increments = distance/(duration/16);
            var stopAnimation;

            // Scroll the page by an increment, and check if it's time to stop
            var animateScroll = function () {
                window.scrollBy(0, increments);
                stopAnimation();
            };

            // If scrolling down
            if ( increments >= 0 ) {
        // Stop animation when you reach the anchor OR the bottom of the page
                stopAnimation = function () {
                    var travelled = window.pageYOffset;
                    if ( (travelled >= (endLocation - increments)) || ((window.innerHeight + travelled) >= document.body.offsetHeight) ) {
                        clearInterval(runAnimation);
                    }
                };
            }
            // If scrolling up
            else {
                // Stop animation when you reach the anchor OR the top of the page
                stopAnimation = function () {
                    var travelled = window.pageYOffset;
                    if ( travelled <= (endLocation || 0) ) {
                        clearInterval(runAnimation);
                    }
                };
            }

            // Loop the animation function
            var runAnimation = setInterval(animateScroll, 16);

        };

        // Define smooth scroll links
        var scrollToggle = document.querySelectorAll('.scroll');

        // For each smooth scroll link
        [].forEach.call(scrollToggle, function (toggle) {

            // When the smooth scroll link is clicked
            toggle.addEventListener('click', function(e) {

                // Prevent the default link behavior
                e.preventDefault();

                // Get anchor link and calculate distance from the top
                var dataID = toggle.getAttribute('href');
                var dataTarget = document.querySelector(dataID);
                var dataSpeed = toggle.getAttribute('data-speed');

                // If the anchor exists
                if (dataTarget) {
                    // Scroll to the anchor
                    smoothScroll(dataTarget, dataSpeed || 500);
                }

            }, false);

        });

    }

 })();
