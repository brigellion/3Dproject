import timer from "./modules/timer";
import menu from "./modules/menu";
import modal from "./modules/modal";
import validator from "./modules/validator";
import tabs from "./modules/tabs";
import slider from "./modules/slider";

timer('10 march 2022');
menu();
modal();
validator();
tabs();


const buildSlider = () => {
    const sliderBlock = document.querySelector('.portfolio-content');
    const slides = document.querySelectorAll('.portfolio-item');

    if (!sliderBlock || slides.length == 0) {
        return;
    } else {
        slider(sliderBlock, slides);
    }
};

buildSlider();


