window.addEventListener('DOMContentLoaded', () => {

    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-viewport');
                entry.target.classList.remove('out-of-viewport');

                // Perform actions when the element is in the viewport
            } else {
                entry.target.classList.remove('in-viewport');
                entry.target.classList.add('out-of-viewport');
                // Perform actions when the element is out of the viewport
            }
        });
    }

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.0000000001
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    const targets = document.querySelectorAll('.target');

    targets.forEach(target => {
        observer.observe(target);

    });












    "use strict";
    // Select all slides
    const slides = document.querySelectorAll(".slide");

    // loop through slides and set each slides translateX
    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${indx * 100}%)`;
    });

    // select next slide button
    const nextSlide = document.querySelector(".btn-next");

    // current slide counter
    let curSlide = 0;
    // maximum number of slides
    let maxSlide = slides.length - 1;
    function nxtSlide() {
        // check if current slide is the last and reset current slide
        if (curSlide === maxSlide) {
            curSlide = 0;
        } else {
            curSlide++;
        }

        //   move slide by -100%
        slides.forEach((slide, indx) => {
            slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
        });
    }
    // add event listener and navigation functionality
    nextSlide.addEventListener("click", nxtSlide);

    // select next slide button
    const prevSlide = document.querySelector(".btn-prev");

    // add event listener and navigation functionality
    prevSlide.addEventListener("click", function () {
        // check if current slide is the first and reset current slide to last
        if (curSlide === 0) {
            curSlide = maxSlide;
        } else {
            curSlide--;
        }

        //   move slide by 100%
        slides.forEach((slide, indx) => {
            slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
        });
    });

    const intervalId = setInterval(nxtSlide, 8000);

    // const carousel = document.querySelector('.carousel');
    // const container = document.querySelector('.carousel-container');

    // let isDragging = false;
    // let startPosition = 0;
    // let translateX = 0;

    // carousel.addEventListener('mousedown', (e) => {
    //     isDragging = true;
    //     startPosition = e.clientX - translateX;
    // });

    // carousel.addEventListener('mouseup', () => {
    //     isDragging = false;
    //     setTransition();
    //     checkBoundary();
    // });

    // carousel.addEventListener('mousemove', (e) => {
    //     if (!isDragging) return;

    //     const currentPosition = e.clientX;
    //     translateX = currentPosition - startPosition;

    //     container.style.transform = `translateX(${translateX}px)`;
    // });

    // function setTransition() {
    //     container.style.transition = 'transform 0.3s ease';
    // }

    // function checkBoundary() {
    //     const itemWidth = document.querySelector('.carousel-item').offsetWidth;
    //     const numberOfItems = document.querySelectorAll('.carousel-item').length;

    //     const maxWidth = itemWidth * (numberOfItems - 1);

    //     if (translateX > 0) {
    //         translateX = 0;
    //     } else if (translateX < -maxWidth) {
    //         translateX = -maxWidth;
    //     }

    //     container.style.transform = `translateX(${translateX}px)`;
    // }









    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.nextElementSibling;
        const icon = item.querySelector('i');

        item.addEventListener('click', () => {
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    const otherAnswer = otherItem.nextElementSibling;
                    const otherIcon = otherItem.querySelector('i');

                    otherAnswer.classList.remove('active');
                    otherIcon.classList.remove('active');
                    otherAnswer.style.maxHeight = "0";
                }
            });

            answer.classList.toggle('active');
            icon.classList.toggle('active');
            if (answer.classList.contains('active')) {
                answer.style.maxHeight = answer.scrollHeight + "px";
            } else {
                answer.style.maxHeight = "0";
            }
        });
    });


})
