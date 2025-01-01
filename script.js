
// Create audio objects
const clickSound = new Audio('43684__stijn__click7a.wav');
const toggleSound = new Audio('348005__samuelcable__turn-light-on.wav');

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
        home: "Viktor Ciganovic",
        about: "Web designer & Front End Developer"
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



function onIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log("Element is in view: ", entry.target); 

           
            if (entry.target.closest('.project')) {
                const images = entry.target.querySelectorAll('.img');
                images.forEach(image => {
                    image.style.opacity = '1'; 
                    image.style.transform = 'scale(1)';                    
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


//Start animation certificates


function observerOptionsProjects(entries, observant) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log("Element is in view: ", entry.target); 

         
            if (entry.target.closest('.certificate')) {
                const images = entry.target.querySelectorAll('.imgCert');
                images.forEach(image => {
                    image.style.opacity = '1'; 
                    image.style.transform = 'scale(1)';                    
                });
            }

            observant.unobserve(entry.target); 
        }
    });
}

const observOptions = {
    threshold: 0.5 // Trigger when 50% of the element is in view
};

const observant = new IntersectionObserver(observerOptionsProjects, observOptions);

// Observe each certificate element
const certificateDivs = document.querySelectorAll('.certificate');
certificateDivs.forEach(certificate => {
    observant.observe(certificate);
});

//end of animation certificates





const toggleButton = document.getElementById('toggle-mode');
const body = document.body;
const icon = toggleButton.querySelector('ion-icon'); 

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);  

    if (savedTheme === 'dark-mode') {
        icon.setAttribute('name', 'sunny')
    } else {icon.setAttribute('name', 'moon')}
}


toggleButton.addEventListener('click', function() {
  
    body.classList.toggle('dark-mode');

        // Save the current theme to localStorage
        const theme = body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
        localStorage.setItem('theme', theme);
    
    // Change the icon based on the current mode
    if (body.classList.contains('dark-mode')) {
        icon.setAttribute('name', 'sunny');  // Set moon icon for dark mode
    } else {
        icon.setAttribute('name', 'moon');  // Set sun icon for light mode
    }

    toggleSound.play().catch(error => console.error("Audio playback failed:", error));
});




document.addEventListener('DOMContentLoaded', function() {
    const email = "viktor_ciganovic@hotmail.com"; 
    const mailLink = document.getElementById('mailLink');

   
    mailLink.href = `mailto:${email}`;

    console.log(mailLink.href);  
});





