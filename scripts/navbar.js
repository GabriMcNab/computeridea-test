//Show navbar when scrolling up

;(function(document, window, index) {
  'use strict';

  const navbar = document.querySelector('.nav');

  if (!navbar) return true;

  let elHeight = 0,
      elTop = 0,
      dHeight = 0,
      wHeight = 0,
      wScrollCurrent = 0,
      wScrollBefore = 0,
      wScrollDiff = 0;

  window.addEventListener('scroll', function() {
      elHeight = navbar.offsetHeight;
      dHeight = document.body.offsetHeight;
      wHeight = window.innerHeight;
      wScrollCurrent = window.pageYOffset;
      wScrollDiff = wScrollBefore - wScrollCurrent;
      elTop = parseInt(window.getComputedStyle(navbar).getPropertyValue('top')) + wScrollDiff;

      if (wScrollCurrent <= 0)
          navbar.style.top = '0px';

      else if (wScrollDiff > 0)
          navbar.style.top = (elTop > 0 ? 0 : elTop) + 'px';

      else if (wScrollDiff < 0) {
          if (wScrollCurrent + wHeight >= dHeight - elHeight)
              navbar.style.top = ((elTop = wScrollCurrent + wHeight - dHeight) < 0 ? elTop : 0) + 'px';

          else
              navbar.style.top = (Math.abs(elTop) > elHeight ? -elHeight : elTop) + 'px';
      }

      wScrollBefore = wScrollCurrent;
  });

}(document, window, 0));