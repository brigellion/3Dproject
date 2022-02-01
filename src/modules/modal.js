import { animate } from "./helpers";
const modal = () => {
    const modal = document.querySelector('.popup');
    const buttons = document.querySelectorAll('.popup-btn');

    let idAnimation;
    let opacity = 0;

    const animationShow = function () {
        idAnimation = requestAnimationFrame(animationShow);
        opacity += 0.02;

        modal.style.opacity = opacity;
        if (opacity > 1) {
            cancelAnimationFrame(idAnimation);
        }
    };
    if (document.documentElement.clientWidth < 768) {
        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                modal.style.display = 'block';
            });
        });
    } else {
        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                //idAnimation = requestAnimationFrame(animationShow);
                modal.style.display = 'block';
                animate({
                    duration: 1000,
                    timing(timeFraction) {
                        return timeFraction;
                    },
                    draw(progress) {
                        modal.style.opacity = progress;
                    }
                });
            });
        });
    }

    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            modal.style.display = 'none';
        }
    });
};

export default modal;


//2772