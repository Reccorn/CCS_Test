import { fixWindow } from './fixWindow';

export function setMenu() {
    const btn = document.querySelector('.header__btn');
    const menu = document.querySelector('.header__nav');

    if (window.innerWidth > 1024 || btn.classList.contains('header__btn--inited')) {
        hide();
        return;
    } else {
        btn.classList.add('header__btn--inited');
    }

    function toggle() {
        if (menu.classList.contains('header__nav--active')) {
            hide();
        } else {
            show();
        }
    }

    function hide() {
        fixWindow(false);
        btn.classList.remove('header__btn--active');
        menu.classList.remove('header__nav--active');
    }

    function show() {
        fixWindow(true);
        btn.classList.add('header__btn--active');
        menu.classList.add('header__nav--active');
    }

    btn.addEventListener('click', toggle);
}