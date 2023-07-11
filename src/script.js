document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.getElementById('navbar');
    const phoneImg = document.querySelector('.phone-img');

    window.addEventListener('scroll', () => {
        const position = window.scrollY;
        if (position) {
            navbar.classList.add('fixed-navbar');
            phoneImg.classList.remove('img-hidden');
            navbar.classList.remove('nav-active');
            hamburger.classList.remove('active-close');
        }
        else {
            navbar.classList.remove('fixed-navbar');


        }
    })
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active-close');
        navbar.classList.toggle('nav-active');
        phoneImg.classList.add('img-hidden');
    })

    //Slider Functionality

    const dots = document.querySelectorAll('.dot');
const card_container = document.querySelector('.card-container');
const card = document.querySelector('.card').clientWidth;
let number = 0;

dots.forEach((dot, indexposition) => {
    dot.setAttribute("data-number", indexposition);
    dot.addEventListener('click', (e) => {
        let DotNumber = e.target.dataset.number;
        if (DotNumber !== number) {
            const pixels = -(card + 60) * DotNumber;
            card_container.style.transform = 'translateX(' + pixels + 'px)';

            const activeCards = document.querySelectorAll('.active');
            activeCards.forEach((card) => {
                card.classList.remove("active");
            });

            const activeDots = document.querySelectorAll('.activedot');
            activeDots.forEach((dot) => {
                dot.classList.remove("activedot");
            });

            const activeCard = document.querySelector(`[data-id="${DotNumber}"]`);
            const activedot = document.querySelector(`[data-number="${DotNumber}"]`);

            if (activeCard !== null && activedot !== null) {
                activeCard.classList.add("active");
                activedot.classList.add("activedot");
                number = DotNumber;
            }

        }
    });
});

});


