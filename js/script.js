let navbarDiv = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if(document.body.scrollTop > 40 || document.documentElement.scrollTop > 40){
        navbarDiv.classList.add('navbar-cng');
    } else {
        navbarDiv.classList.remove('navbar-cng');
    }
});


const navbarCollapseDiv = document.getElementById('navbar-collapse');
const navbarShowBtn = document.getElementById('navbar-show-btn');
const navbarCloseBtn = document.getElementById('navbar-close-btn');
// show navbar
navbarShowBtn.addEventListener('click', () => {
    navbarCollapseDiv.classList.add('navbar-collapse-rmw');
});

// hide side bar
navbarCloseBtn.addEventListener('click', () => {
    navbarCollapseDiv.classList.remove('navbar-collapse-rmw');
});

document.addEventListener('click', (e) => {
    if(e.target.id != "navbar-collapse" && e.target.id != "navbar-show-btn" && e.target.parentElement.id != "navbar-show-btn"){
        navbarCollapseDiv.classList.remove('navbar-collapse-rmw');
    }
});

// stop transition and animatino during window resizing
let resizeTimer;
window.addEventListener('resize', () => {
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove("resize-animation-stopper");
    }, 400);
});

const carousel = document.querySelector('.carousel'); // Select the carousel
const items = document.querySelectorAll('.carousel-item'); // Select all carousel items
const itemWidth = items[0].offsetWidth + 16; // Width of one item including margin
let currentIndex = 0; // Track current slide index

function scrollCarousel(direction) {
    // Update current index based on direction (-1 for prev, +1 for next)
    currentIndex += direction;

    // Clamp index to prevent scrolling beyond bounds
    if (currentIndex < 0) {
        currentIndex = 0;
    } else if (currentIndex >= items.length) {
        currentIndex = items.length - 1;
    }

    // Scroll carousel to the calculated position
    const scrollPosition = currentIndex * itemWidth;
    carousel.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
    });
}

