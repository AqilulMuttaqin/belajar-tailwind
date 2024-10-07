// Navbar Active
window.addEventListener('scroll', function() {
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('nav ul li');

    sections.forEach((section) => {
        let top = window.scrollY;
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach((link) => {
                link.classList.remove('active');
                link.classList.add('hover:text-sky-900');
                if (link.querySelector('a').getAttribute('href') === '#' + id) {
                    link.classList.add('active');
                    link.classList.remove('hover:text-sky-900');
                }
            });
        }
    });
});

var app = document.getElementById('typewriter');
    
var typewriter = new Typewriter(app, {
    loop: true,
    delay: 75,
});

typewriter
    .typeString('Web Developer')
    .pauseFor(1500)
    .deleteAll()
    .typeString('UI/UX Enthusiast')
    .pauseFor(1500)
    .start();