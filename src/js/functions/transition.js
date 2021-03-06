// let transitionBlocks = document.querySelectorAll('.transition div');
// let transitionContainer = document.querySelector('.transition');
let isScrolling = false;
let displayed = document.querySelector('.is-displayed');
let nextPage = document.querySelector(`[data-select="${parseInt(displayed.dataset.select) + 1}"]`);
let prevPage = ((parseInt(displayed.dataset.select) - 1) > 0)?document.querySelector(`[data-select="${parseInt(displayed.dataset.select) - 1}"]`):'';
let homepage = document.querySelector('.homepage');
let page2 = document.querySelector('.page2');
let link = document.querySelector('#travel');
let nextPageLinks = document.querySelectorAll('.next-page');
let lastY;


window.addEventListener(
    'wheel',
    (e) => {
        if (window.innerWidth > 1024) {
            if(e.wheelDelta < 0 && parseInt(displayed.dataset.select) !== 1){ //Force click on button
                transitionForwards();
            }
            else{
                transitionBackwards();
            }
        }

    }
)

window.addEventListener(
    'touchmove',
    (e  ) => {
        if (window.innerWidth > 1024) {
            let currentY = e.touches[0].clientY;
            if(currentY > lastY){
                transitionBackwards();
             // moved down
            }else if(currentY < lastY){
                transitionForwards();
             // moved up
            }
            lastY = currentY;
        }

    }
)

nextPageLinks.forEach(
    (link) => {
        link.addEventListener(
            'click',
            (e) => {
                e.preventDefault();
                transitionForwards();
            }
        )
    }
)


link.addEventListener(
    'click',
    (e) => {
        e.preventDefault();
        transitionForwards();
        // var stateObj = { foo: "page2" };
        // history.pushState(stateObj, "page 2","page2");
    }
)


function transitionForwards(){
    // transitionContainer.style.display = 'flex';
    if (document.querySelectorAll('.full').length === 0 && !isScrolling) {
        let transitionContainer = document.querySelector(`.transition[data-transition="${displayed.dataset.select}"]`);
        setTimeout(
            () => {
                transitionContainer.classList.add('translate');
                // transitionBlocks.forEach(
                //     (div) => {
                //         div.classList.add('full');
                //     }
                // )

            },
            100
        )

        setTimeout(
            () => {
                displayed.style.display = 'none';
                nextPage.style.display = 'block';
                displayed.classList.remove('is-displayed');
                if (document.querySelector(`audio[data-audio="${parseInt(displayed.dataset.select)}"]`)) {

                    document.querySelector(`audio[data-audio="${parseInt(displayed.dataset.select)}"]`).pause();
                }
                displayed = nextPage;
                displayed.classList.add('is-displayed');
                if (document.querySelector(`audio[data-audio="${parseInt(displayed.dataset.select)}"]`)) {

                    document.querySelector(`audio[data-audio="${parseInt(displayed.dataset.select)}"]`).play();
                }
                if (document.querySelector(`[data-select="${parseInt(displayed.dataset.select) + 1}"]`)) {

                    nextPage = document.querySelector(`[data-select="${parseInt(displayed.dataset.select) + 1}"]`);
                }
                prevPage = ((parseInt(displayed.dataset.select) - 1) > 0)?document.querySelector(`[data-select="${parseInt(displayed.dataset.select) - 1}"]`):'';
                console.log({displayed}, {nextPage}, {prevPage});
            },
            1600
        )

        setTimeout(
            () => {
                transitionContainer.classList.remove('translate');

                // transitionBlocks.forEach(
                //     (div) => {
                //         div.classList.remove('full');
                //     }
                // )
            },
            3100
        )

        isScrolling = true;
        setTimeout(
            () => {
                isScrolling = false
            },
            3100
        )
    }
}

function transitionBackwards(){
    // transitionContainer.style.display = 'flex';
    if (document.querySelectorAll('.full').length === 0 && !isScrolling) {
        let transitionContainer = document.querySelector(`.transition[data-transition="${parseInt(displayed.dataset.select) - 2}"]`);
        setTimeout(
            () => {
                transitionContainer.classList.add('translate');
                // transitionBlocks.forEach(
                //     (div) => {
                //         div.classList.add('full');
                //     }
                // )

            },
            100
        )

        setTimeout(
            () => {
                if (parseInt(displayed.dataset.select)!==1) {

                    displayed.style.display = 'none';
                    prevPage.style.display = 'block';
                    displayed.classList.remove('is-displayed');
                    if (document.querySelector(`audio[data-audio="${parseInt(displayed.dataset.select)}"]`)) {

                        document.querySelector(`audio[data-audio="${parseInt(displayed.dataset.select)}"]`).pause();
                    }
                    displayed = prevPage;
                    if (document.querySelector(`audio[data-audio="${parseInt(displayed.dataset.select)}"]`)) {

                        document.querySelector(`audio[data-audio="${parseInt(displayed.dataset.select)}"]`).play();
                    }
                    displayed.classList.add('is-displayed');
                    nextPage = document.querySelector(`[data-select="${parseInt(displayed.dataset.select) + 1}"]`);

                    prevPage = ((parseInt(displayed.dataset.select) - 1) > 0)?document.querySelector(`[data-select="${parseInt(displayed.dataset.select) - 1}"]`):'';
                }
            },
            1600
        )

        setTimeout(
            () => {
                transitionContainer.classList.remove('translate');

                // transitionBlocks.forEach(
                //     (div) => {
                //         div.classList.remove('full');
                //     }
                // )
            },
            3100
        )

        isScrolling = true;
        setTimeout(
            () => {
                isScrolling = false
            },
            3100
        )
    }
}
