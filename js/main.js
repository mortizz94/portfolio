document.addEventListener('DOMContentLoaded', () => {

    /* Scroll Reveal Animation */
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.fade-up');
    revealElements.forEach(el => observer.observe(el));




    /* Navbar Glass Effect */
    const navPill = document.querySelector('.nav-floating-pill');

    /* Back to Top Logic */
    const backToTopBtn = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        // Nav Effect
        if (window.scrollY > 50) {
            navPill.style.background = 'rgba(10, 11, 16, 0.95)';
            navPill.style.boxShadow = '0 10px 40px rgba(0,0,0,0.6)';
            navPill.style.padding = '0.4rem 1.5rem'; // Slightly smaller
        } else {
            navPill.style.background = 'rgba(10, 11, 16, 0.7)';
            navPill.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
            navPill.style.padding = '0.6rem 2rem'; // Original larger size
        }

        // Back to Top Visibility
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    // Smooth scroll for Back to Top (optional override if CSS scroll-behavior isn't enough)
    backToTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    /* Social Share Logic */
    const shareBtn = document.getElementById('shareBtn');
    if (shareBtn) {
        shareBtn.addEventListener('click', async (e) => {
            e.preventDefault();
            const shareData = {
                title: 'Diego M. Ortiz | Senior Operations Lead',
                text: 'Echa un vistazo al portfolio de Diego Martínez Ortiz.',
                url: window.location.href
            };

            if (navigator.share) {
                try {
                    await navigator.share(shareData);
                } catch (err) {
                    console.log('Error sharing:', err);
                }
            } else {
                // Fallback: Copy to clipboard
                try {
                    await navigator.clipboard.writeText(window.location.href);
                    alert('Enlace copiado al portapapeles!');
                } catch (err) {
                    console.error('Failed to copy matches');
                }
            }
        });
    }

    /* Mobile Bottom Nav Logic */
    const navItems = document.querySelectorAll('.mobile-bottom-nav .nav-item');
    const sections = document.querySelectorAll('section, header#top, footer#contact');

    function setActiveNav() {
        let current = '';
        const scrollPosition = window.scrollY + (window.innerHeight / 2); // Center of viewport

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        // Special case for 'home' / top
        if (window.scrollY < 100) current = 'top';

        navItems.forEach(item => {
            item.classList.remove('active');
            const href = item.getAttribute('href').substring(1);
            if (href === current) {
                item.classList.add('active');
            }
            // Map specific sections to nav items (e.g., 'operational-core' -> Exp icon)
            if (current === 'operational-core' && href === 'operational-core') item.classList.add('active');
            if ((current === 'education' || current === 'innovation') && href === 'skills') item.classList.add('active');
        });
    }

    window.addEventListener('scroll', setActiveNav);

    // Smooth scroll offset for fixed bottom nav
    navItems.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 20, // Small buffer
                    behavior: 'smooth'
                });
            }

            // Manual active set for instant feedback
            navItems.forEach(n => n.classList.remove('active'));
            link.classList.add('active');
        });
    });

});
