const corp = document.querySelectorAll('.corps');

window.addEventListener('scroll', checkCorp);

checkCorp();

function checkCorp() {
    const triggerPoint = (window.innerHeight / 5) * 4;
    corp.forEach(corps => {
        const corpsTop = corps.getBoundingClientRect().top

        if(corpsTop < triggerPoint) {
            corps.classList.add('show')
        } else {
            corps.classList.remove('show')
        }
    })
}

