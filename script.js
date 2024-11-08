
// Create audio objects
const clickSound = new Audio('43684__stijn__click7a.wav');
const typingSound = new Audio(''); 

// Add event listener for down arrows
document.querySelectorAll('.down-arrow').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        // Play the click sound
        clickSound.currentTime = 0; 
        clickSound.play().catch(error => console.error("Audio playback failed:", error));

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        // Smooth scroll to the target section
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Call the typing effect for the header text on page load
document.addEventListener('DOMContentLoaded', function() {
    startTypingEffect(document.getElementById('home'));
});

function startTypingEffect(section) {
    console.log("Typing effect started"); 

    const typingTexts = {
        home: "Welcome to My Portfolio" 
    };

    const text = typingTexts[section.id]; 

    if (!text) {
        console.error("No text found for section ID:", section.id);
        return;
    }

    const typingTextElement = section.querySelector('.typing-text');
    typingTextElement.textContent = ''; 

    let index = 0;
    function type() {
        if (index < text.length) {
            typingTextElement.textContent += text.charAt(index);
            typingSound.currentTime = 0; 
            typingSound.play().catch(error => console.error("Typing sound playback failed:", error)); 
            index++;
            setTimeout(type, 100);
        }
    }
    type();
}

window.addEventListener('scroll', function() {
    var txt = document.querySelectorAll('.aboutTxt');  // Select all .aboutTxt elements
    var windowHeight = window.innerHeight;  // Viewport height
    var scrollTop = window.scrollY;  // Scroll position

    txt.forEach(function(div) {
        var elementOffset = div.getBoundingClientRect().top + scrollTop;  // Position of each div
        if (scrollTop + windowHeight > elementOffset) {
            div.classList.add('visible');  // Add the "visible" class when it's in view
        }
    });
});


window.addEventListener('scroll', function() {
    var skillsDivs = document.querySelectorAll('.skillsDiv');  // Select all .skillsDiv elements
    var windowHeight = window.innerHeight;  // Viewport height
    var scrollTop = window.scrollY;  // Scroll position

    skillsDivs.forEach(function(div) {
        var elementOffset = div.getBoundingClientRect().top + scrollTop;  // Position of each div
        if (scrollTop + windowHeight > elementOffset) {
            div.classList.add('visible');  // Add the "visible" class when it's in view
        }
    });
});






// Intersection Observer for Slide-In from Right Animation
function onIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log("Element is in view: ", entry.target); 

            // Trigger the slide-in-right animation for images inside project divs
            if (entry.target.closest('.project')) {
                const images = entry.target.querySelectorAll('.img');
                images.forEach(image => {
                    image.style.opacity = '1'; // Set opacity to 1 when in view
                    image.classList.add('slide-in-right'); // Apply Slide-In animation
                });
            }

            observer.unobserve(entry.target); // Stop observing once the animation is triggered
        }
    });
}

const observerOptions = {
    threshold: 0.5 // Trigger when 50% of the element is in view
};

const observer = new IntersectionObserver(onIntersection, observerOptions);

// Observe each project element
const projectDivs = document.querySelectorAll('.project');
projectDivs.forEach(project => {
    observer.observe(project);
});




// Get the toggle button, body, and the icon inside the button
const toggleButton = document.getElementById('toggle-mode');
const body = document.body;
const icon = toggleButton.querySelector('ion-icon');  // Select the icon inside the button

// Set up the toggle functionality
toggleButton.addEventListener('click', function() {
    // Toggle the class 'dark-mode' on the body element
    body.classList.toggle('dark-mode');
    
    // Change the icon based on the current mode
    if (body.classList.contains('dark-mode')) {
        icon.setAttribute('name', 'sunny');  // Set moon icon for dark mode
    } else {
        icon.setAttribute('name', 'moon');  // Set sun icon for light mode
    }
});







