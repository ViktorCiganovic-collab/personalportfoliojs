
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
    var txt = document.querySelectorAll('.aboutTxt');  
    var windowHeight = window.innerHeight; 
    var scrollTop = window.scrollY;  

    txt.forEach(function(div) {
        var elementOffset = div.getBoundingClientRect().top + scrollTop;  
        if (scrollTop + windowHeight > elementOffset) {
            div.classList.add('visible');  
        }
    });
});


window.addEventListener('scroll', function() {
    var skillsDivs = document.querySelectorAll('.skillsDiv');  
    var windowHeight = window.innerHeight;  
    var scrollTop = window.scrollY;  

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



const skillsWrapper = document.querySelector('.skillsDivisions');
const prevBtn = document.getElementById('prevBtn'); 
const nextBtn = document.getElementById('nextBtn');
var currentIndex = 0;

var technicalSkills = [
    {
      category: "Front End",
      details: [
        { name: "HTML", icon: "fa-brands fa-html5" },
        { name: "CSS", icon: "fa-brands fa-css3-alt" },
        { name: "Bootstrap", icon: "fa-brands fa-bootstrap" },
        { name: "Tailwind", icon: "fa-brands fa-css3-alt" },
        { name: "JavaScript", icon: "fa-brands fa-js" },
        { name: "C#", icon: "fa-brands fa-microsoft" },
        { name: "Python", icon: "fa-brands fa-python" },
        { name: "React", icon: "fa-brands fa-react" },
        { name: "Java", icon: "fa-brands fa-java" }
      ]
    },
    {
      category: "Back End",
      details: [
        { name: "Node.js server", icon: "fa-brands fa-node-js" },
        { name: "MongoDB", icon: "fa-solid fa-database" },
        { name: "Mongoose", icon: "fa-solid fa-database" },
        { name: "PostgreSQL", icon: "fa-solid fa-database" },
        { name: "SQL", icon: "fa-solid fa-database" },
        { name: "Entity Framework", icon: "fa-solid fa-database" }
      ]
    },
    {
      category: "Other Skills",
      details: [
        { name: "GitHub", icon: "fa-brands fa-github" },
        { name: "Bash", icon: "fa-solid fa-terminal" },
        { name: "Data Visualization", icon: "fa-solid fa-chart-line" },
        { name: "Azure Fundamentals", icon: "fa-solid fa-cloud-sun" },
        { name: "React native", icon: "fa-brands fa-react" }
      ]
    }
  ]

  const showSkills = () => {

  skillsWrapper.innerHTML = ''; // Clear any existing content
  technicalSkills.map((skill, index) => {

    // Start by adding the category
    skillsWrapper.innerHTML += `
      <div class="skillsDiv">
        <h4>${skill.category}</h4>
        ${skill.details.map((detail, detailIndex) => {
          // Now we are iterating over the details array
          return `
            <div class="skills_wrapper">
              <i class="${detail.icon}"></i> ${detail.name}
            </div>
          `;
        }).join('')}  <!-- Join to ensure the details are added correctly -->
      </div>
    `;
  
  });

}

const showOnlyOne = () => {
    skillsWrapper.innerHTML = ''; // Clear any existing content    

    // Get the first skill and display it
    const skill = technicalSkills[currentIndex];
    skillsWrapper.innerHTML = `
      <div class="slider">
        <!-- Slider buttons positioned on the sides -->
        <button class="sliderBtns" id="prevBtn" onclick="previousSkill()"><</button>
  
        <div class="skillsDiv">
          <h4>${skill.category}</h4>
          ${skill.details.map((detail) => {
            return `
              <div class="skills_wrapper">
                <i class="${detail.icon}"></i> ${detail.name}
              </div>
            `;
          }).join('')}
        </div>
  
        <button class="sliderBtns" id="nextBtn" onclick="nextSkill()">></button>
      </div>
    `;
  };


  const updateSkillsDisplay = () => {
    if (window.innerWidth >= 480) {
      // Show all skills for large screens
      showSkills();
    } else {
      // Show only one skill at a time for small screens
      showOnlyOne();
    }
  };
  
  // Event listeners for window load and resize
  window.addEventListener('load', updateSkillsDisplay);
  window.addEventListener('resize', updateSkillsDisplay);
  
  // Initially display the skills
  updateSkillsDisplay();

  const nextSkill = () => {

    currentIndex = currentIndex === technicalSkills.length - 1 ? 0 : currentIndex + 1;
    
    showOnlyOne();

  }


  const previousSkill = () => {

    currentIndex = currentIndex === 0 ? technicalSkills.length - 1 : currentIndex - 1;
    showOnlyOne();

  }
  
  