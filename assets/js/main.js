let cursor = document.querySelector('.cursor'),
    cursorScale = document.querySelectorAll('.cursor-scale'),
    mouseX = 0,
    mouseY = 0
    
    
//script for mousehover pointer
gsap.to({}, 0.016, {
     repeat: -1,
 
     onRepeat: function () {
         gsap.set(cursor, {
             css: {
                 left: mouseX,
                 top: mouseY
             }
         })
     }
 });

// let radius = 40;

window.addEventListener("mousemove", function (e) {
     mouseX = e.clientX;
     mouseY = e.clientY;
     tl = gsap.timeline();
     // tl.to(cursor, {
     //      duration: 1,
     //      x: mouseX - radius,
     //      y: mouseY - radius,
     //      ease: Expo.ease
     // })
 });
 
 cursorScale.forEach(link => {
     link.addEventListener('mouseleave', () => {
         cursor.classList.remove('grow');
         cursor.classList.remove('grow-small');
     });
     link.addEventListener('mousemove', () => {
         cursor.classList.add('grow');
         if(link.classList.contains('small')){
             cursor.classList.remove('grow');
             cursor.classList.add('grow-small');
         }
     });
 });


