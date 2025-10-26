// Initialize AOS
AOS.init({
    duration: 800,
    once: true
});

// Typing animation with improved effects
document.addEventListener('DOMContentLoaded', () => {
    const typedText = document.querySelector('.typed-text');
    const words = ['Full Stack Developer', 'Problem Solver', 'Innovator', 'Team Player'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    let deletingSpeed = 50;
    let pauseDuration = 2000;

    function typeEffect() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            typedText.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = deletingSpeed;
        } else {
            typedText.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }

        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            typingSpeed = pauseDuration;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typingSpeed = 500;
        }

        setTimeout(typeEffect, typingSpeed);
    }

    typeEffect();
});

// Mobile Menu Toggle
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Theme Toggle
document.querySelector('.theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark');
    document.querySelector('.navbar').classList.toggle('dark');
    
    // Store theme preference in localStorage
    const isDark = document.body.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Load theme preference from localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark');
    document.querySelector('.navbar').classList.add('dark');
}

// Smooth scrolling with active link highlighting
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
            
            // Remove active class from all links
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.classList.remove('active');
            });
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Close mobile menu if open
            navLinks.classList.remove('active');
        }
    });
});

// Add skills with improved styling
const skills = [
    {
        name: "HTML",
        category: "Frontend"
    },
    {
        name: "CSS",
        category: "Frontend"
    },
    {
        name: "JavaScript",
        category: "Frontend"
    },
    {
        name: "Node.js",
        category: "Backend"
    },
    {
        name: "React.js",
        category: "Frontend"
    },
    {
        name: "MongoDB",
        category: "Database"
    },
    {
        name: "SQL",
        category: "Database"
    },
    {
        name: "Python",
        category: "Backend"
    },
    {
        name: "C++",
        category: "Programming"
    },
    {
        name: "DSA",
        category: "Programming"
    }
];

const skillsGrid = document.querySelector('.skills-grid');

skills.forEach(skill => {
    const skillElement = document.createElement('div');
    skillElement.className = `skill-card ${skill.category.toLowerCase()}`;
    skillElement.innerHTML = `
        <span class="skill-name">${skill.name}</span>
        <span class="skill-category">${skill.category}</span>
    `;
    skillsGrid.appendChild(skillElement);
});

// Add projects with improved layout
const projects = [
    {
        name: "Feedback System",
        description: "A web-based feedback system for collecting and managing user feedback efficiently.",
        tech: ["Node.js", "MongoDB", "React.js"],
        github: "https://github.com/Dmtejas/FeedBack_System",
        live: "https://feedback-system-2-a35e.onrender.com/",
        image: "https://via.placeholder.com/400x300"
    }
];

const projectsGrid = document.querySelector('.projects-grid');

projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    projectCard.innerHTML = `
        <div class="project-image">
            <img src="${project.image}" alt="${project.name}">
        </div>
        <div class="project-info">
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <div class="project-tech">
                ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join(' ')}
            </div>
            <div class="project-links">
                <a href="${project.github}" target="_blank" class="project-link github">
                    <i class="fab fa-github"></i> GitHub
                </a>
                <a href="${project.live}" target="_blank" class="project-link live">
                    <i class="fas fa-external-link-alt"></i> Live Demo
                </a>
            </div>
        </div>
    `;
    projectsGrid.appendChild(projectCard);
});

// Contact form with improved validation
const contactForm = document.getElementById('contact-form');
const formInputs = contactForm.querySelectorAll('input, textarea');

formInputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.classList.add('focused');
    });
    
    input.addEventListener('blur', () => {
        if (!input.value) {
            input.classList.remove('focused');
        }
    });
});

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Validate form
    let isValid = true;
    formInputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });
    
    if (isValid) {
        // Here you would typically send the form data to a server
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
        formInputs.forEach(input => {
            input.classList.remove('focused');
        });
    }
});

// Parallax effect for hero section
const hero = document.querySelector('.hero');
const heroImage = document.querySelector('.profile-image');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    heroImage.style.transform = `translateY(${scrolled * -0.2}px)`;
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe all sections
const sections = document.querySelectorAll('section');
sections.forEach(section => {
    observer.observe(section);
});

// Add copy to clipboard functionality for email
const email = document.querySelector('.info-item span');
if (email && email.textContent.includes('tejasdm@example.com')) {
    email.addEventListener('click', () => {
        navigator.clipboard.writeText('tejasdm@example.com');
        email.textContent = 'Copied!';
        setTimeout(() => {
            email.textContent = 'tejasdm@example.com';
        }, 2000);
    });
}

// Add hover effects to skill cards
const skillCards = document.querySelectorAll('.skill-card');
skillCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Add loading animation for images
const images = document.querySelectorAll('img');
images.forEach(img => {
    img.style.opacity = 0;
    img.style.transition = 'opacity 0.5s ease-in';
    
    img.addEventListener('load', () => {
        img.style.opacity = 1;
    });
});
