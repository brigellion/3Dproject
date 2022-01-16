const menu = () => {
    const menu = document.querySelector('menu');
    const menuItems = menu.querySelectorAll('ul>li>a');
    const butScroll = document.querySelector('[href="#service-block"]');
    const body = document.querySelector('body');

    const handleMenu = (e) => {
        menu.classList.toggle('active-menu');
    };

    body.addEventListener('click', (e) => {
        if (!e.target.closest('menu') && menu.classList.contains('active-menu')) {
            e.preventDefault();
            handleMenu();
        }
        if (e.target.closest('.menu')) {
            e.preventDefault();
            handleMenu();
        }
        if (e.target.classList.contains('close-btn')) {
            e.preventDefault();
            handleMenu();
        }
        menuItems.forEach(item => {
            if (item === e.target) {
                handleMenu();
                let hash = item.getAttribute('href');
                let target = document.querySelector(hash);
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                e.preventDefault();
            }
        });
        if (e.target.closest('a') === butScroll) {
            let hash = butScroll.getAttribute('href');
            let target = document.querySelector(hash);
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            e.preventDefault();
        }
    });
};


export default menu;

