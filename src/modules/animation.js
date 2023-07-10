/* анимация появление элементов*/
function animation() {
    let targets = document.querySelectorAll('.anim');

    let options = {
        root: null,
        rootMargin: '5px',
        threshold: 0.5
    }
    
    let callback = function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        })
    }
    let observer = new IntersectionObserver(callback, options);
    
    targets.forEach(target => {
        observer.observe(target);
    })
}

export default animation;
