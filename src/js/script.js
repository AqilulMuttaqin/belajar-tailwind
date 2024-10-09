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
                link.classList.remove('px-3');
                link.classList.add('px-2');
                link.classList.add('hover:text-sky-900');
                if (link.querySelector('a').getAttribute('href') === '#' + id) {
                    link.classList.add('active');
                    link.classList.add('px-3');
                    link.classList.remove('hover:text-sky-900');
                }
            });
        }
    });
});

var toggle = document.querySelector('#toggle');
var html = document.querySelector('html');
var lightIcon = document.querySelector('#light-icon');
var darkIcon = document.querySelector('#dark-icon');

toggle.addEventListener('click', function() {
    if (toggle.checked) {
        html.classList.remove('light');
        html.classList.add('dark');
        darkIcon.classList.remove('hidden');
        lightIcon.classList.add('hidden');
    } else {
        html.classList.remove('dark');
        html.classList.add('light');
        lightIcon.classList.remove('hidden');
        darkIcon.classList.add('hidden');
    }
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