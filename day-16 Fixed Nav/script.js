const nav = document.querySelector('.menu__bar');
const topOfNav = nav.offsetTop;
const logo = document.querySelector('.logo');
const div = document.querySelector('div');
function fixNav() {
    if (window.scrollY >= topOfNav) {
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        nav.classList.add('activate');
        logo.style.maxWidth = 500 + 'px';
        div.classList.add('divActivate');
    } else if (window.scrollY < topOfNav) {
        nav.classList.remove('activate');
        document.body.style.paddingTop = 0;
        logo.style.maxWidth = 0;
        div.classList.remove('divActivate');
    }
}

window.addEventListener('scroll', fixNav);