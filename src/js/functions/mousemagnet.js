let toMagnetize = document.querySelector('.mouse-magnet');
let toMagnetizeWidthHalf = toMagnetize.clientWidth/2;
let toMagnetizeHeightHalf = toMagnetize.clientHeight/2;
let toMagnetizeRect = toMagnetize.getBoundingClientRect();

console.log({toMagnetizeRect});

console.log(toMagnetize.offsetLeft,toMagnetize.offsetTop);

window.addEventListener(
    'mousemove',
    (e) => {
        if (e.clientX > (toMagnetizeRect.left - 5) && e.clientY > (toMagnetizeRect.top - 5) && e.clientY < (toMagnetizeRect.bottom + 5) && e.clientX < (toMagnetizeRect.right + 5)) {
            console.log('nearing XY');
            let translateX = e.clientX - toMagnetizeRect.left  - toMagnetizeWidthHalf - 45;
            let translateY = e.clientY - toMagnetizeRect.top  - toMagnetizeHeightHalf - 50;
            toMagnetize.style.transform = `translateX(${translateX}px) translateY(${translateY}px) rotate(45deg)`;
            toMagnetize.style.transition = 'none';
        }
        else {
            toMagnetize.style.transition = 'all .3s ease-in';
            setTimeout(
                () => {
                    toMagnetize.style.transform = 'rotate(45deg)';

                },
                100
            );
        }
    }
)

function fromTopLeft(x,y){
    return Math.sqrt(Math.pow(x,2) + Math.pow(y,2));
}
