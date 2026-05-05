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

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Add active link styling
const style = document.createElement('style');
style.textContent = `.nav-menu a.active { color: var(--primary-color); font-weight: 600; }`;
document.head.appendChild(style);

// Button event listeners
const primaryBtn = document.querySelector('.btn-primary');
const secondaryBtn = document.querySelector('.btn-secondary');

if (primaryBtn) {
    primaryBtn.addEventListener('click', () => {
        const contactSection = document.querySelector('#contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

if (secondaryBtn) {
    secondaryBtn.addEventListener('click', () => {
        const servicesSection = document.querySelector('#services');
        if (servicesSection) {
            servicesSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// Fade-in animation for cards on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.about-card, .service-card, .contact-item').forEach(card => {
    card.style.opacity = '0';
    observer.observe(card);
});

// Mobile menu toggle (if you add a hamburger menu later)
const createMobileMenu = () => {
    const navbar = document.querySelector('.navbar');
    const navWrapper = document.querySelector('.nav-wrapper');
    
    if (window.innerWidth <= 768) {
        // Mobile menu setup can be added here
        console.log('Mobile view');
    }
};

window.addEventListener('resize', createMobileMenu);
createMobileMenu();
