const modal = () => {
    const modal = document.querySelector('.popup');
    const buttons = document.querySelectorAll('.popup-btn');
    const closeBtn = modal.querySelector('.popup-close');

    let idAnimation;
    let opacity = 0;

    const animationShow = function () {
        idAnimation = requestAnimationFrame(animationShow);
        opacity += 0.02;
        modal.style.display = 'block';
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
                idAnimation = requestAnimationFrame(animationShow);
            });
        });
    }


    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        opacity = 0;
        cancelAnimationFrame(idAnimation);
    });
};

export default modal;