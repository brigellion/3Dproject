const slider = (slider, slidesArray, slideActive = 'portfolio-item-active', dotActive = 'dot-active') => {

    const sliderBlock = document.querySelector(slider);
    const slides = document.querySelectorAll(slidesArray);

    if (!sliderBlock || slides.length == 0) {
        alert('Нет слайдера или слайдов');
        return;
    }

    const dotsContainer = document.querySelector('.portfolio-dots');
    let timeInterval = 2000;
    let currentSlide = 0;
    let interval;

    const appendDots = () => {
        if (slides.length >= 1) {
            for (let i = 0; i < slides.length; i++) {
                let li = document.createElement("li");
                (i == 0) ? li.classList.add('dot', dotActive) : li.classList.add('dot');
                dotsContainer.appendChild(li);
            }
            return document.querySelectorAll('.dot');
        } else {
            alert('пустой слайдер');
            return;
        }
    };

    const dots = appendDots();

    const prevSlide = (elems, index, strClass) => {
        elems[index].classList.remove(strClass);
    };
    const nextSlide = (elems, index, strClass) => {
        elems[index].classList.add(strClass);
    };
    const autoSlide = () => {
        prevSlide(slides, currentSlide, slideActive);
        prevSlide(dots, currentSlide, dotActive);
        currentSlide++;
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        nextSlide(slides, currentSlide, slideActive);
        nextSlide(dots, currentSlide, dotActive);
    };
    const startSlide = (timer = 1500) => {
        interval = setInterval(autoSlide, timer);
    };
    const stopSlide = () => {
        clearInterval(interval);
    };

    sliderBlock.addEventListener('click', (e) => {
        e.preventDefault();

        if (!e.target.matches('.dot, .portfolio-btn')) {
            return;
        }

        prevSlide(slides, currentSlide, slideActive);
        prevSlide(dots, currentSlide, dotActive);

        if (e.target.matches('#arrow-right')) {
            currentSlide++;
        } else if (e.target.matches('#arrow-left')) {
            currentSlide--;
        } else if (e.target.classList.contains('dot')) {
            dots.forEach((dot, index) => {
                if (e.target === dot) {
                    currentSlide = index;
                }
            });
        }
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }

        nextSlide(slides, currentSlide, slideActive);
        nextSlide(dots, currentSlide, dotActive);
    });

    sliderBlock.addEventListener('mouseenter', (e) => {
        if (e.target.matches('.dot, .portfolio-btn')) {
            stopSlide();
        }
    }, true);
    sliderBlock.addEventListener('mouseleave', (e) => {
        if (e.target.matches('.dot, .portfolio-btn')) {
            startSlide(timeInterval);
        }
    }, true);


    startSlide(timeInterval);
};

export default slider;