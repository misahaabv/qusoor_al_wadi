document.querySelector(".cta-btn").addEventListener("click", function () {
    alert("Thank you for your interest! We will contact you soon.");
});

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Handle header transparency on scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            header.classList.add('transparent');
        } else {
            header.classList.remove('transparent');
        }
    });

    // Scroll Animation
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const fadeElements = document.querySelectorAll('.fade-in');

    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                fadeObserver.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, observerOptions);

    fadeElements.forEach(element => {
        fadeObserver.observe(element);
    });

    // Add a welcome message to the console
    console.log('Welcome to my website! The JavaScript is working.');

    // Carousel functionality
    const track = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.carousel-slide');
    const dotsContainer = document.querySelector('.carousel-dots');

    let currentSlide = 0;
    const slideCount = slides.length;
    const slidesPerView = 3;

    // Create dots (one dot per set of three slides)
    for (let i = 0; i < Math.ceil(slideCount / slidesPerView); i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(i * slidesPerView));
        dotsContainer.appendChild(dot);
    }

    const dots = document.querySelectorAll('.dot');

    function updateDots() {
        const currentDotIndex = Math.floor(currentSlide / slidesPerView);
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentDotIndex);
        });
    }

    function goToSlide(n) {
        currentSlide = n;
        const slideWidth = 100 / slidesPerView;
        track.style.transform = `translateX(-${currentSlide * slideWidth}%)`;
        updateDots();
    }

    // Auto slide every 5 seconds
    setInterval(() => {
        currentSlide = (currentSlide + slidesPerView) % slideCount;
        if (currentSlide + slidesPerView > slideCount) {
            currentSlide = 0;
        }
        goToSlide(currentSlide);
    }, 5000);
});
