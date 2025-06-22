var tl = gsap.timeline()


tl.to(".body-wrapper ", {

    y: "100vh",
    scale: 0.45,
    duration: 0

})

tl.to(".body-wrapper", {

    y: `-200vh`,
    duration: 1,
    delay: 1,
    scale:.6

})

tl.to(".body-wrapper", {
    y: "0vh",
    rotate: -360,
    scale: 1,
    duration: 0.8
})


let box = document.querySelector('.effect-box')


box.addEventListener('mousemove', () => {

    gsap.to('.effect-box h1', {

        transform: ' translateX(134%)',
        duration: 0.5,
  

    })
    gsap.to('.effect-box img', {

        transform: ' translateX(58%)',
        duration: 0.5,
  

    })



})

box.addEventListener('mouseout', () => {

    gsap.to('.effect-box h1', {

        transform: ' translateX(-34%)',
        duration: 1,
        

    })
    gsap.to('.effect-box img', {

        transform: ' translateX(-120%)',
        duration: 0.5,
  

    })


})
let card1 = document.querySelector('.card1');
let card2 = document.querySelector('.card2');
let card3 = document.querySelector('.card3');
let card4 = document.querySelector('.card4');

// Flag to track whether animations are active
let isAnimationActive = false;

// Function to handle card animations
function animateCards(targetCard, animations) {
    gsap.killTweensOf([card2, card3, card4]);

    animations.forEach(({ element, transform }) => {
        gsap.to(element, {
            transform,
            duration: 0.8, // Animation duration
            ease: "power1.out",
        });
    });
}

// Function to reset card positions
function resetCards() {
    gsap.killTweensOf([card2, card3, card4]);

    gsap.to('.card2', { transform: 'translateX(45%)', duration: 0.6, ease: "sine.inOut" });
    gsap.to('.card3', { transform: 'translateX(90%)', duration: 0.6, ease: "sine.inOut" });
    gsap.to('.card4', { transform: 'translateX(135%)', duration: 0.6, ease: "sine.inOut" });
}

// Function to reset all cards for small screens
function resetAllCardsToDefault() {
    gsap.killTweensOf([card2, card3, card4]);

    gsap.to('.card2', { transform: 'translateX(0%)', duration: 0.6, ease: "sine.inOut" });
    gsap.to('.card3', { transform: 'translateX(0%)', duration: 0.6, ease: "sine.inOut" });
    gsap.to('.card4', { transform: 'translateX(0%)', duration: 0.6, ease: "sine.inOut" });
}

// Function to add event listeners
function addEventListeners() {
    if (!isAnimationActive) {
        isAnimationActive = true;

        card1.addEventListener('mousemove', card1Mousemove);
        card2.addEventListener('mousemove', card2Mousemove);
        card3.addEventListener('mousemove', card3Mousemove);

        card1.addEventListener('mouseout', resetCards);
        card2.addEventListener('mouseout', resetCards);
        card3.addEventListener('mouseout', resetCards);
        card4.addEventListener('mouseout', resetCards);
    }
}

// Function to remove event listeners
function removeEventListeners() {
    if (isAnimationActive) {
        isAnimationActive = false;

        card1.removeEventListener('mousemove', card1Mousemove);
        card2.removeEventListener('mousemove', card2Mousemove);
        card3.removeEventListener('mousemove', card3Mousemove);

        card1.removeEventListener('mouseout', resetCards);
        card2.removeEventListener('mouseout', resetCards);
        card3.removeEventListener('mouseout', resetCards);
        card4.removeEventListener('mouseout', resetCards);
    }
}

// Mousemove handlers
function card1Mousemove() {
    animateCards(card1, [
        { element: '.card2', transform: 'translateX(95%)' },
        { element: '.card3', transform: 'translateX(140%)' },
        { element: '.card4', transform: 'translateX(185%)' },
    ]);
}

function card2Mousemove() {
    animateCards(card2, [
        { element: '.card3', transform: 'translateX(140%)' },
        { element: '.card4', transform: 'translateX(185%)' },
    ]);
}

function card3Mousemove() {
    animateCards(card3, [
        { element: '.card4', transform: 'translateX(185%)' },
    ]);
}

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth <= 800) {
        resetAllCardsToDefault();
        removeEventListeners();
    } else {
        resetCards(); // Reset for consistency
        addEventListeners();
    }
});

// Initial setup
if (window.innerWidth > 800) {
    addEventListeners();
} else {
    resetAllCardsToDefault();
}
