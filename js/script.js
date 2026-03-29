// Initialize AOS (Animate on Scroll)
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100
    });

    // Initialize form handling
    initializeform();

    // Smooth scroll navigation
    initializeSmoothScroll();

    // Bootstrap form validation
    initializeFormValidation();
});

// Initialize smooth scroll navigation
function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#"
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    document.querySelector('.navbar-toggler').click();
                }
            }
        });
    });
}

// Bootstrap form validation
function initializeFormValidation() {
    const forms = document.querySelectorAll('.needs-validation');
    
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', function(event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });
}

// Contact form handling
function initializeform() {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                company: document.getElementById('company').value,
                message: document.getElementById('message').value
            };

            // Validate form
            if (!contactForm.checkValidity()) {
                contactForm.classList.add('was-validated');
                return;
            }

            // Show success message (for now, since we don't have a backend)
            displayFormMessage('success', 'Thank you for your message! We\'ll get back to you soon.');

            // Clear form
            contactForm.reset();
            contactForm.classList.remove('was-validated');

            // Log form data (can be sent to backend later)
            console.log('Form submitted with data:', formData);

            // Optional: Send to backend (requires backend setup)
            // sendFormToBackend(formData);
        });
    }
}

// Display form message
function displayFormMessage(type, message) {
    const formMessage = document.getElementById('formMessage');
    formMessage.textContent = message;
    formMessage.className = type;

    // Auto-hide message after 5 seconds
    setTimeout(() => {
        formMessage.className = '';
    }, 5000);
}

// Optional: Send form data to backend (uncomment and configure when ready)
/*
function sendFormToBackend(formData) {
    fetch('/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            displayFormMessage('success', 'Thank you for your message! We\'ll get back to you soon.');
            document.getElementById('contactForm').reset();
        } else {
            displayFormMessage('error', 'Error sending message. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        displayFormMessage('error', 'Error sending message. Please try again.');
    });
}
*/

// Navbar shadow on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
    }
});

// Refresh AOS when window is resized
window.addEventListener('resize', function() {
    AOS.refresh();
});
