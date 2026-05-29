
/* ================= ACTIVE NAVBAR ================= */

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".navbar a");

window.onscroll = () => {

    sections.forEach(sec => {

        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if(top >= offset && top < offset + height){

            navLinks.forEach(link => {
                link.classList.remove("active");
            });

            let activeLink = document.querySelector(
                ".navbar a[href*=" + id + "]"
            );

            if(activeLink){
                activeLink.classList.add("active");
            }

        }

    });

};


/* ================= SCROLL REVEAL ================= */

ScrollReveal({

    distance: '60px',
    duration: 2000,
    delay: 200,
    reset: false

});


ScrollReveal().reveal(
    '.home-content, .heading',
    {
        origin: 'top'
    }
);


ScrollReveal().reveal(
    '.project-card, .skill-box, .certificate-card, .education-box, .experience-box',
    {
        origin: 'bottom',
        interval: 200
    }
);


ScrollReveal().reveal(
    '.home-image, .research-card',
    {
        origin: 'right'
    }
);


/* ================= TYPING EFFECT ================= */

var typed = new Typed(".multiple-text", {

    strings: [

        "Python Full Stack Developer",

        "Data Analytics Enthusiast",

        "Machine Learning Learner"

    ],

    typeSpeed: 70,
    backSpeed: 50,
    backDelay: 1200,
    loop: true

});
