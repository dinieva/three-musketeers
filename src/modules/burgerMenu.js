/* navbar */ 
function burgerMenu(){
    const navbar = document.querySelector('.header-navbar')
    const mobileMenu = document.querySelector('.mobile-menu')
    
    mobileMenu.addEventListener('click', ()=>{
        navbar.classList.toggle('active')
    });
    /* скрытие навбара после скроллинга */
    window.addEventListener('scroll', ()=>{
        navbar.classList.remove('active')
    });
}

export default burgerMenu;
