let indicatorsLeft = document.querySelectorAll('.sLeft');
let indicatorsRight = document.querySelectorAll('.sRight');

let infosLeft = document.querySelectorAll('.firstInfo');
let infosRight = document.querySelectorAll('.secondInfo');

showText(indicatorsLeft, infosLeft);
showText(indicatorsRight, infosRight);

function showText(indicators, infos){
    indicators.forEach(
        (indicator) => {
            indicator.addEventListener(
                'mouseenter',
                () => {
                    infos.forEach(
                        (info) => {
                            info.style.display = 'block';
                        }
                    )
                },
                false
            )

            indicator.addEventListener(
                'mouseleave',
                () => {
                    infos.forEach(
                        (info) => {
                            info.style.display = 'none';
                        }
                    )
                },
                false
            )
        }
    )
}
