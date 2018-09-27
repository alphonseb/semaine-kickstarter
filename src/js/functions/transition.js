// let transitionBlocks = document.querySelectorAll('.transition div');
let transitionContainer = document.querySelector('.transition');
let isScrolling = false;
let displayed = document.querySelector('.is-displayed');
let nextPage = document.querySelector(`[data-select="${parseInt(displayed.dataset.select) + 1}"]`);
let prevPage = ((parseInt(displayed.dataset.select) - 1) > 0)?document.querySelector(`[data-select="${parseInt(displayed.dataset.select) - 1}"]`):'';
let homepage = document.querySelector('.homepage');
let page2 = document.querySelector('.page2');
let link = document.querySelector('#travel');

console.log(displayed, nextPage);

window.addEventListener(
    'wheel',
    (e) => {
        if(e.wheelDelta < 0){
            transitionForwards();
        }
        else{
            transitionBackwards();
        }
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
                displayed = nextPage;
                displayed.classList.add('is-displayed');
                nextPage = document.querySelector(`[data-select="${parseInt(displayed.dataset.select) + 1}"]`);
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
                prevPage.style.display = 'block';
                displayed.classList.remove('is-displayed');
                displayed = prevPage;
                displayed.classList.add('is-displayed');
                nextPage = document.querySelector(`[data-select="${parseInt(displayed.dataset.select) + 1}"]`);
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
