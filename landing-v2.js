// Initialize particles background
window.addEventListener('DOMContentLoaded', () => {
    tsParticles.load("particles-js", {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: "#ffffff"
            },
            shape: {
                type: "circle"
            },
            opacity: {
                value: 0.5,
                random: false,
                animation: {
                    enable: true,
                    speed: 1,
                    minimumValue: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                animation: {
                    enable: true,
                    speed: 2,
                    minimumValue: 0.1,
                    sync: false
                }
            },
            links: {
                enable: true,
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: false,
                straight: false,
                outModes: {
                    default: "out"
                },
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detectsOn: "canvas",
            events: {
                onHover: {
                    enable: true,
                    mode: "repulse"
                },
                onClick: {
                    enable: true,
                    mode: "push"
                },
                resize: true
            },
            modes: {
                repulse: {
                    distance: 100,
                    duration: 0.4
                },
                push: {
                    quantity: 4
                }
            }
        },
        detectRetina: true
    });
});

// Scroll progress indicator
window.addEventListener('scroll', () => {
    const docElement = document.documentElement;
    const scrollPct = (docElement.scrollTop / (docElement.scrollHeight - docElement.clientHeight)) * 100;
    docElement.style.setProperty('--scroll', `${scrollPct}%`);
});

// Hero section generator functionality
document.getElementById('hero-generate-button').addEventListener('click', () => {
    const button = document.getElementById('hero-generate-button');
    const type = document.getElementById('hero-headcanon-type').value;
    
    // Add loading state
    button.classList.add('loading');
    button.disabled = true;
    button.textContent = '✨ Generating... ✨';
    
    // Simulate generation delay
    setTimeout(() => {
        // Remove loading state
        button.classList.remove('loading');
        button.disabled = false;
        button.textContent = '✨ Generate Headcanon Now! ✨';
        
        // Redirect to main generator page
        window.location.href = 'index.html';
    }, 800);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Intersection Observer for fade-in animations
const fadeInElements = document.querySelectorAll('.bg-gray-50, #how-to-use .text-center');
const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

fadeInElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
    fadeInObserver.observe(element);
});

// Add hover effect to value proposition cards
document.querySelectorAll('#value-proposition .bg-gray-50').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
        card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    });
});

// Dark mode toggle (if needed)
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('dark');
}

// Performance optimization
window.addEventListener('load', () => {
    // Defer non-critical animations
    setTimeout(() => {
        document.querySelectorAll('.animate-later').forEach(element => {
            element.classList.add('animate');
        });
    }, 1000);
}); 