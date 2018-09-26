let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;
let mouseX, mouseY;
let toParallax = document.querySelectorAll('.mouse-parallax');
let toParallaxSlower = document.querySelectorAll('.mouse-parallax-slow');

window.addEventListener(
    'mousemove',
    onMouseMove
)

function onMouseMove( event ) {
    mouseX = ( event.clientX - windowHalfX ) / 2;
    mouseY = ( event.clientY - windowHalfY ) / 2;

    let translateX = -mouseX*0.05;
    let translateY = -mouseY*0.05;

    let slowtranslateX = mouseX*0.02;
    let slowtranslateY = mouseY*0.02;

    toParallax.forEach(
        (element) => {
            element.style.transform = `translateX(${translateX}px) translateY(${translateY}px)`;
        }
    )
    toParallaxSlower.forEach(
        (element) => {
            element.style.transform = `translateX(${slowtranslateX}px) translateY(${slowtranslateY}px)`;
        }
    )
}
