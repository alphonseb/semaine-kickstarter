// let transitionBlocks = document.querySelectorAll('.transition div');
let transitionContainer = document.querySelector('.transition');
let isScrolling = false;
let homepage = document.querySelector('.homepage');
let page2 = document.querySelector('.page2');
let link = document.querySelector('#travel');

window.addEventListener(
    'wheel',
    () => {
        transition();
    }
)

link.addEventListener(
    'click',
    (e) => {
        e.preventDefault();
        transition();
        // var stateObj = { foo: "page2" };
        // history.pushState(stateObj, "page 2","page2");
    }
)


function transition(){
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
                homepage.style.display = 'none';
                page2.style.display = 'block';
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
