
// Create audio objects
const clickSound = new Audio('219015__michaelkoehler__button-click-microswitch.wav');
const typingSound = new Audio('611515__eben-frostey__key-punch.mp3'); // Replace with your typing sound file


// Add event listener for down arrows
document.querySelectorAll('.down-arrow').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        // Play the click sound
        clickSound.currentTime = 0; // Reset sound to the start
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
    console.log("Typing effect started"); // Log when the function starts

    const typingTexts = {
        home: "Welcome to My Portfolio" // Key matches the ID without #
    };

    const text = typingTexts[section.id]; // Now this will match

    // Check if text is undefined
    if (!text) {
        console.error("No text found for section ID:", section.id);
        return; // Exit the function if no text found
    }

    const typingTextElement = section.querySelector('.typing-text');
    typingTextElement.textContent = ''; // Clear existing text

    let index = 0;
    function type() {
        if (index < text.length) {
            typingTextElement.textContent += text.charAt(index);
            typingSound.currentTime = 0; // Reset sound to start
            typingSound.play().catch(error => console.error("Typing sound playback failed:", error)); // Play typing sound
            index++;
            setTimeout(type, 100); // Adjust speed here (100 ms per character)
        }
    }
    type();
}


$(document).ready(function() {
    $(".arrow_to_projectsections").click(function(e) {
        e.preventDefault(); // Prevent default anchor behavior

        $(".img").css('opacity', 0.5); // Reset opacity to default
        $(".img").each(function(index) {
            $(this).delay(index * 200).animate({ opacity: 1 }, 1000, function() {
                $(this).addClass('rotate'); // Add rotate class after fade-in
            });
        });
    });

    // Optional: Reset the rotation class after animation is done
    $(".img").on('animationend', function() {
        $(this).removeClass('rotate'); // Remove the rotate class to allow for re-triggering
    });
});
