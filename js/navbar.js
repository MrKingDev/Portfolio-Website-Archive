const isScrolling = () => {
    const headerEl = document.querySelector('.navbar')
    const mobileEl = document.querySelector('.mobile-nav')
    let windowPosition = window.scrollY > 250
    headerEl.classList.toggle('active', windowPosition)
    mobileEl.classList.toggle('active', windowPosition)

}
window.addEventListener('scroll', isScrolling)

const nav_hamburger = document.querySelector('.nav-hamburger');
const nav_mobile = document.querySelector('.mobile-nav');
nav_hamburger.addEventListener('click', function () {
    this.classList.toggle('is-active');
    nav_mobile.classList.toggle('is-active');
})