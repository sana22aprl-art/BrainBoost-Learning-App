// App.js - Main landing page functionality

// Modal handling
const classModal = document.getElementById('classModal');
const getStartedBtn = document.getElementById('getStartedBtn');
const startLearningBtn = document.getElementById('startLearningBtn');
const closeModal = document.getElementById('closeModal');
const classCards = document.querySelectorAll('.class-card');

// Open modal
function openClassModal() {
    classModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeClassModal() {
    classModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Event listeners for opening modal
if (getStartedBtn) {
    getStartedBtn.addEventListener('click', openClassModal);
}

if (startLearningBtn) {
    startLearningBtn.addEventListener('click', openClassModal);
}

// Event listener for closing modal
if (closeModal) {
    closeModal.addEventListener('click', closeClassModal);
}

// Close modal when clicking outside
if (classModal) {
    classModal.addEventListener('click', (e) => {
        if (e.target === classModal) {
            closeClassModal();
        }
    });
}

// Handle class selection
classCards.forEach(card => {
    card.addEventListener('click', function() {
        const selectedClass = this.getAttribute('data-class');
        localStorage.setItem('selectedClass', selectedClass);
        window.location.href = 'subjects.html';
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
    }
});

// Add animation to feature cards on scroll
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease';
    observer.observe(card);
});
