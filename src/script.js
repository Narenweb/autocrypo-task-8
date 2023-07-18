document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        navbar.classList.add('fixed-navbar');
    })
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active-close');
        navbar.classList.toggle('nav-active');
    })

    //Slider Functionality

    const dots = document.querySelectorAll('.dot');
    const card_container = document.querySelector('.card-container');
    const card = document.querySelector('.card').clientWidth;
    let number = 0;


    dots.forEach((dot, indexposition) => {
        dot.setAttribute("data-number", indexposition);
        dot.addEventListener('click', (event) => {
            let DotNumber = event.target.dataset.number;
            console.log(DotNumber);
            if (DotNumber !== number) {
                const pixels = -(card + 80) * DotNumber;
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


