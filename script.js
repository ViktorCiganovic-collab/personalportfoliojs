
// Create audio objects
const clickSound = new Audio('./sounds/618188__theplax__mouse-click-3.wav');
const toggleSound = new Audio('./sounds/724434__sadiquecat__smartplug-switch-on.wav');
const refreshSound = new Audio('./sounds/618188__theplax__mouse-click-3.wav');

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
      { name: "TypeScript", icon: "fa-brands fa-js" },
      { name: "React", icon: "fa-brands fa-react" },
      { name: "Next.js", icon: "fa-solid fa-forward" }
    ]
  },
  {
  category: "Back End",
  details: [
    { name: "Node.js", icon: "fa-brands fa-node-js" },
    { name: "Express.js", icon: "fa-brands fa-node-js" },
    { name: "Blazor", icon: "fa-solid fa-code" },
    { name: ".NET Web API", icon: "fa-solid fa-code" },
    { name: "Razor Pages", icon: "fa-solid fa-code" },
    { name: "MVC", icon: "fa-solid fa-layer-group" },
    { name: "REST API Design", icon: "fa-solid fa-code" },
    { name: "Postman", icon: "fa-brands fa-get-pocket" }
  ]
},
  {
    category: "Databases",
    details: [
      { name: "MongoDB", icon: "fa-solid fa-database" },
      { name: "MongoDB Atlas", icon: "fa-solid fa-cloud" },
      { name: "Mongoose", icon: "fa-solid fa-database" },
      { name: "PostgreSQL", icon: "fa-solid fa-database" },
      { name: "SQL", icon: "fa-solid fa-database" },
      { name: "SQL Server", icon: "fa-solid fa-database" },
      { name: "Entity Framework", icon: "fa-solid fa-database" }
    ]
  },
  {
    category: "CMS & Tools",
    details: [
      { name: "WordPress", icon: "fa-brands fa-wordpress" },
      { name: "Webflow", icon: "fa-solid fa-laptop" },
      { name: "Drupal", icon: "fa-brands fa-drupal" },
      { name: "Figma", icon: "fa-brands fa-figma" },
      { name: "jQuery", icon: "fa-brands fa-js" }
    ]
  },
  {
    category: "Cloud & DevOps",
    details: [
      { name: "AWS", icon: "fa-brands fa-aws" },
      { name: "Azure", icon: "fa-brands fa-microsoft" },
      { name: "GitHub", icon: "fa-brands fa-github" },
      { name: "Bash", icon: "fa-solid fa-terminal" }
    ]
  },
  {
    category: "Other Skills",
    details: [
      { name: "Python", icon: "fa-brands fa-python" },
      { name: "Java", icon: "fa-brands fa-java" },
      { name: "Network Fundamentals", icon: "fa-solid fa-network-wired" },
      { name: "Data Visualization", icon: "fa-solid fa-chart-line" },
      { name: "Responsive Design", icon: "fa-solid fa-mobile-alt" }
    ]
  }
];


  let start = 0;
  let itemsPerSlide = 3;
  let end = start + itemsPerSlide;
 

  const showSkills = () => {

  const displayedCategories = technicalSkills.slice(start, end);

 
  skillsWrapper.innerHTML = ''; // Clear any existing content

  
  displayedCategories.map((skill, index) => {

   
    skillsWrapper.innerHTML += `
      <div class="skillsDivMany">
        <h4>${skill.category}</h4>
        ${skill.details.map((detail, detailIndex) => {
         
          return `
            <div class="skills_wrapperForAllItemsDisplayed">
              <i class="${detail.icon}"></i> ${detail.name}
            </div>
          `;
        }).join('')}  <!-- Join to ensure the details are added correctly -->
      </div>     
    `; 
  
  });
}; 


const nextSkillSet = async  () => {

  try {
  refreshSound.currentTime = 0; // rewind to start
  await refreshSound.play(); }
  catch (e) {
    console.error('Audio play failed:', e);
  }

  skillsWrapper.classList.add('transitioning');

  setTimeout(function() {

  start += itemsPerSlide;
  end = start + itemsPerSlide;

  if (start >= technicalSkills.length) {
    start = 0;
    end = itemsPerSlide;
  }

  showSkills();

  skillsWrapper.classList.remove('transitioning');

}, 500);

}

const showOnlyOne = () => {
    skillsWrapper.innerHTML = '';     
  
    
    const skill = technicalSkills[currentIndex];
    skillsWrapper.innerHTML = `
      <div class="slider">
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
  
    
    const slider = skillsWrapper.querySelector('.slider');
    const skillWrappers = skillsWrapper.querySelectorAll('.skills_wrapper');
    
    
    setTimeout(() => {
      slider.classList.add('show'); 
      skillWrappers.forEach((item) => {
        item.classList.add('visible'); 
      });
    }, 0); 
  
    
    isInViewPort(skillWrappers);
  };
  
  const refreshBtn = document.querySelector('.sliderRefreshBtn');

  const updateSkillsDisplay = () => {
    if (window.innerWidth >= 480) {
      // Show all skills for large screens
      showSkills();
    } else {
      // Show only one skill at a time for small screens
      showOnlyOne();
      refreshBtn.style.display = 'none';
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
  


  function isInViewPort(viewedContent) {
    viewedContent.forEach((item) => {  
      const itemContent = item.innerHTML.trim();
      let matched = false;
  
      technicalSkills.forEach((skill) => {
        skill.details.forEach((detail) => {
          const skillContent = `${detail.icon} ${detail.name}`.trim();
  
          if (itemContent === skillContent) {
            matched = true;
  
            item.classList.add('visible'); // Add the visible class to start transition
          }
        });
      });
  
      if (!matched) {
        item.classList.remove('visible'); // Remove visible class to reset opacity and scale
      }
    });
  }

  const arrayCertifications = [
    {
      type: "front-end-development-libraries",
      url: "https://www.freecodecamp.org/certification/ViktorCiganovic/front-end-development-libraries",
      imgUrl: "https://files.softicons.com/download/social-media-icons/classic-social-media-icons-by-brainleaf/png/128x128/bootstrap-icon.png"
    },
    {
      type: "database",
      url: "https://www.freecodecamp.org/certification/ViktorCiganovic/relational-database-v8",
      imgUrl: "https://api.nuget.org/v3-flatcontainer/easydata.entityframeworkcore.relational/1.5.7/icon"
    },
    {
      type: "javascript",
      url: "https://www.freecodecamp.org/certification/ViktorCiganovic/javascript-algorithms-and-data-structures-v8",
      imgUrl: "https://cdn.iconscout.com/icon/free/png-256/free-javascript-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-vol-4-pack-logos-icons-3031512.png?f=webp&w=128"
    }
  ];
  
  const divisionCertifications = document.querySelector('.certsDivision');
  let certsAreShown = false;
  let currentCertIndex = 0;
  
  const certObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  
  const showAllCerts = () => {
    divisionCertifications.innerHTML = '';
    arrayCertifications.forEach(cert => {
      divisionCertifications.innerHTML += `
        <div class="certificate">
          <a href="${cert.url}" target="_blank">
            <img class="certificationsImages" alt="certification" src="${cert.imgUrl}">
          </a>
        </div>
      `;
    });
  
    document.querySelectorAll('.certificationsImages').forEach(img => {
      certObserver.observe(img);
    });
  
    certsAreShown = true;
  };
  
  const showSingleCert = (index) => {
    const cert = arrayCertifications[index];
    divisionCertifications.innerHTML = `
      <div class="cert-slider">
        <button class="cert-nav-arrow" id="prevCert">&larr;</button>
  
        <div class="certificate single-cert">
          <a href="${cert.url}" target="_blank">
            <img class="certificationsImages" alt="certification" src="${cert.imgUrl}">
          </a>
        </div>
  
        <button class="cert-nav-arrow" id="nextCert">&rarr;</button>
      </div>
    `;
  
    document.querySelectorAll('.certificationsImages').forEach(img => {
      certObserver.observe(img);
    });
  
    document.getElementById('prevCert').onclick = () => {
      currentCertIndex = (currentCertIndex === 0)
        ? arrayCertifications.length - 1
        : currentCertIndex - 1;
      showSingleCert(currentCertIndex);
    };
  
    document.getElementById('nextCert').onclick = () => {
      currentCertIndex = (currentCertIndex === arrayCertifications.length - 1)
        ? 0
        : currentCertIndex + 1;
      showSingleCert(currentCertIndex);
    };
  
    certsAreShown = true;
  };
  
  const updateCertificationsDisplay = () => {
    if (window.innerWidth >= 480) {
      if (!certsAreShown || divisionCertifications.children.length === 1) {
        showAllCerts();
      }
    } else {
      if (!certsAreShown || divisionCertifications.children.length > 1) {
        showSingleCert(currentCertIndex);
      }
    }
  };
  
  document.addEventListener('DOMContentLoaded', updateCertificationsDisplay);
  window.addEventListener('resize', updateCertificationsDisplay);

  const projects = [
    {
      title: "Movie streaming app",
      url: "/",
      imgUrl: "./images/Skärmbild 2024-11-26 095101.png",
      role: "Fullstack Developer",
      technologies: "React, Tailwind, Node.js",
      challenges: "A responsive movie app with search filter function that was created by me with React, react router for the links and state management for the login process."
    },
    {
      title: "Ecommerce Website",
      url: "https://shoeshopper.vercel.app/",
      imgUrl: "./images/eCommercewebsite.png",
      role: "Fullstack Developer",
      technologies: "React, Tailwind, CSS",
      challenges: "A responsive e-commerce web app built with React and Tailwind CSS. It features product browsing, detailed views, and a shopping cart with localStorage persistence. React Router ensures smooth navigation across devices. The design is fully responsive for an optimal shopping experience on mobile and desktop, showcasing my skills in React, state management, and UI design."
    },
    {
      title: "Gym Website",
      url: "https://gym-app-rho-khaki.vercel.app/",
      imgUrl: "./images/gymwebsite.png",
      role: "Frontend Developer",
      technologies: "React, Bootstrap, SCSS",
      challenges: "A team project focused on creating a responsive website for home workout videos, providing users with easy access to a variety of training sessions that can be done from the comfort of their homes."
    },
    {
      title: "Online Calculator",
      url: "https://codepen.io/ViktorCiganovic/full/QWRKoJJ",
      imgUrl: "./images/online_calculator.png",
      role: "Frontend Developer",
      technologies: "HTML, CSS, JavaScript",
      challenges: "Ensured precision in calculations, handled user input validation to prevent errors, and created an intuitive and responsive layout that enhances user interaction."
    },
    {
      title: "Exercise Browser App",
      url: "https://exercise-browser-app.vercel.app",
      imgUrl: "./images/wordpress.png",
      role: "Frontend Developer",
      technologies: "React, Bootstrap, React Router",
      challenges: "Built with React, Bootstrap, and React Router, this app lets users browse and search for fitness exercises. Users can filter results in real-time and view detailed information by navigating to individual exercise pages. It showcases state management with useState, dynamic rendering, and responsive design with Bootstrap."
    },
    {
      title: "Travel Booking Web App",
      url: "https://voyavista-gvcnd9azepede2as.northeurope-01.azurewebsites.net",
      imgUrl: "./images/tripbookingwebsite.png",
      role: "Fullstack Developer",
      technologies: "ASP.NET MVC, Entity Framework, SQL Server, Stripe",
      challenges: "Developed a fullstack web application where customers can view and book trips to various destinations. Utilized Entity Framework and SQL Server for database management, and integrated Stripe for payment processing. The application features a user-friendly interface, allowing customers to view available trips by date and make secure bookings."
    },
    {
      title: "Munamii Cakery",
      url: "https://mynodeapp-bwfy.onrender.com",
      imgUrl: "./images/munami_cakery.png",
      role: "Fullstack Developer",
      technologies: "HTML, Bootstrap, JavaScript, MongoDB Atlas",
      challenges: "Developed a responsive web application for a cakery where customers can browse cakes and cupcakes, and place orders. The application integrates MongoDB Atlas for database management to handle orders and inventory. I ensured the site’s responsiveness, allowing a seamless experience across all devices. The ordering functionality allows users to view product details and submit their orders online, with a simple and efficient interface."
    },
    {
      title: "Music Media Player",
      url: "/",
      imgUrl: "./images/musicplayer.png",
      role: "Frontend Developer",
      technologies: "HTML, CSS, JavaScript",
      challenges: "Developed an interactive and responsive music media player where users can play, pause, shuffle, and skip through songs. The app allows users to control volume, view track details (song name, artist), and enjoy a dynamic playlist. It features a clean interface and smooth transitions. The project uses HTML, CSS, and JavaScript for building a fully-functional music player with features such as a progress bar, volume control, and playlist management."
    }
  ];
  
  

  const imageSection = document.querySelector('.imageSection');

  const generateProjects = () => {
    imageSection.innerHTML = ''; // Clear the previous content
  
    projects.forEach((project) => {
      imageSection.innerHTML += `
         <div class="project">
            <a href="${project.url}" target="_blank">
            <img src="${project.imgUrl}" class="img" alt="Cash Register Project">
            </a>
            <h5 class="titleOfProject">${project.title}</h5>
            <p><strong>Role:</strong>${project.role}</p>
            <p><strong>Technologies:</strong>${project.technologies}</p>
            <p><strong>Challenges:</strong>${project.challenges}</p>
        </div>
      `;
    });
  }; 
  

  var indexofProject = 0;

  const showOneProject = () => {
    const { title, url, imgUrl } = projects[indexofProject];
  
    imageSection.innerHTML = `
      <div class="project-nav">
        
        <div class="project-details">
          <h3 class="oneProjectTitle" class="titleOfProject">${title}</h3>
          <a href="${url}" target="_blank">
            <img src="${imgUrl}" class="projectImgsForPhone" alt="${title}">
          </a>
        </div>
  
      </div>
    `;
  };
  
  const nextProject = async (btn) => {
    const projectContainer = document.querySelector('.imageSection');

    // Add spin class on button
    btn.classList.add('spin');

    // wait until animation is done
    await new Promise(resolve => setTimeout(resolve, 500));

    //Remove spin class so button gets restored
    btn.classList.remove('spin');
  
    // Apply fade-out effect
    projectContainer.classList.add('project-hidden');
  
    try {
      refreshSound.currentTime = 0;
      await refreshSound.play();
    } catch (e) {
      console.error('Audio play failed:', e);
    }
  
    // Wait for fade-out to finish, then switch project and fade back in
    setTimeout(() => {
      indexofProject = (indexofProject + 1) % projects.length;
      showOneProject();
  
      // Re-apply fade-in
      setTimeout(() => {
        projectContainer.classList.remove('project-hidden');
      }, 50); // allow DOM to update before fading back in
    }, 400); 
  };
  
  

  
  const updateProjectsView = () => {
    if (window.innerWidth >= 480) {
      generateProjects();      
    } else {
      showOneProject(); 
    }
  };
  
  window.addEventListener('DOMContentLoaded', updateProjectsView);
  window.addEventListener('resize', updateProjectsView);

   const sections = document.querySelectorAll("section");
let current = 0;
let scrolling = false; // flag koji blokira novi scroll dok traje animacija

window.addEventListener("wheel", (e) => {
  if (scrolling) return; 

  if (e.deltaY > 0) { // scroll down
    if (current < sections.length - 1) {
      current++;
      scrolling = true;
      sections[current].scrollIntoView({ behavior: "smooth" });
      setTimeout(() => scrolling = false, 1000); // čekaj 1s dok animacija završi
    }
  } else { // scroll up
    if (current > 0) {
      current--;
      scrolling = true;
      sections[current].scrollIntoView({ behavior: "smooth" });
      setTimeout(() => scrolling = false, 1000);
    }
  }
});

// animation for skillsbtn
const skillsButton = document.getElementById('skillsBtnslide');

skillsButton.addEventListener('click', () => {
  skillsButton.classList.add('animate')
  setTimeout(() => {
    skillsButton.classList.remove('animate');
  }, 600); 
})