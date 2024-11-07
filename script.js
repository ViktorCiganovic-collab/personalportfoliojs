
// // Create audio objects
// const clickSound = new Audio('43684__stijn__click7a.wav');
// const typingSound = new Audio(''); 



// // Add event listener for down arrows
// document.querySelectorAll('.down-arrow').forEach(anchor => {
//     anchor.addEventListener('click', function(e) {
//         e.preventDefault();

//         // Play the click sound
//         clickSound.currentTime = 0; // Reset sound to the start
//         clickSound.play().catch(error => console.error("Audio playback failed:", error));

//         const targetId = this.getAttribute('href');
//         const targetElement = document.querySelector(targetId);
        
//         // Smooth scroll to the target section
//         targetElement.scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });

// // Call the typing effect for the header text on page load
// document.addEventListener('DOMContentLoaded', function() {
//     startTypingEffect(document.getElementById('home'));
// });

// function startTypingEffect(section) {
//     console.log("Typing effect started"); // Log when the function starts

//     const typingTexts = {
//         home: "Welcome to My Portfolio" // Key matches the ID without #
//     };

//     const text = typingTexts[section.id]; 

//     // Check if text is undefined
//     if (!text) {
//         console.error("No text found for section ID:", section.id);
//         return; // Exit the function if no text found
//     }

//     const typingTextElement = section.querySelector('.typing-text');
//     typingTextElement.textContent = ''; // Clear existing text

//     let index = 0;
//     function type() {
//         if (index < text.length) {
//             typingTextElement.textContent += text.charAt(index);
//             typingSound.currentTime = 0; // Reset sound to start
//             typingSound.play().catch(error => console.error("Typing sound playback failed:", error)); // Play typing sound
//             index++;
//             setTimeout(type, 100); // Adjust speed here (100 ms per character)
//         }
//     }
//     type();
// }


// $(document).ready(function() {
//     $(".arrow_to_projectsections").click(function(e) {
//         e.preventDefault(); // Prevent default anchor behavior

//         $(".img").css('opacity', 0.5); // Reset opacity to default
//         $(".img").each(function(index) {
//             $(this).delay(index * 200).animate({ opacity: 1 }, 1000, function() {
//                 $(this).addClass('rotate'); // Add rotate class after fade-in
//             });
//         });
//     });

//     // Optional: Reset the rotation class after animation is done
//     $(".img").on('animationend', function() {
//         $(this).removeClass('rotate'); // Remove the rotate class to allow for re-triggering
//     });
// });


// // Function to trigger the animation when the element enters the viewport
// function onIntersection(entries, observer) {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add('bounce-in-right');
//             observer.unobserve(entry.target); // Stop observing once the class is added
//         }
//     });
// }

// // Set up the intersection observer
// const observerOptions = {
//     threshold: 0.5  // Trigger when 50% of the element is in view
// };

// const observer = new IntersectionObserver(onIntersection, observerOptions);

// // Select all the divs in the #technical_skills section
// const technicalSkillDivs = document.querySelectorAll('#technical_skills > div');

// // Observe each div to detect when it enters the viewport
// technicalSkillDivs.forEach(div => {
//     observer.observe(div);
// });


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

