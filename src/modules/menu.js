const menu = () => {
    const menuBtn = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    const closeBtn = menu.querySelector('.close-btn');
    const menuItems = menu.querySelectorAll('ul>li>a');
    const butScroll = document.querySelector('[href="#service-block"]');
    console.log(butScroll);

    const handleMenu = (e) => {
        e.preventDefault();
        menu.classList.toggle('active-menu');
    };

    menuBtn.addEventListener('click', handleMenu);
    closeBtn.addEventListener('click', handleMenu);

    menuItems.forEach(menuItem => {
        menuItem.addEventListener('click', (e) => {
            handleMenu();
            let hash = menuItem.getAttribute('href');
            let target = document.querySelector(hash);
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            e.preventDefault();
        });
    });

    butScroll.addEventListener('click', (e) => {
        let hash = butScroll.getAttribute('href');
        let target = document.querySelector(hash);
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        e.preventDefault();
    });
};


export default menu;

