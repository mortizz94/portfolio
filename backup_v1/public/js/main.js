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

    /* Mobile Bottom Nav Logic REMOVED */


    // ... existing code ...

    /* GitHub Projects Fetcher */
    const projectsContainer = document.getElementById('github-projects');
    if (projectsContainer) {
        fetch('https://api.github.com/users/mortizz94/repos?sort=updated&per_page=6')
            .then(response => response.json())
            .then(repos => {
                if (!Array.isArray(repos)) throw new Error('Invalid response');

                // Clear loading text
                projectsContainer.innerHTML = '';

                repos.forEach(repo => {
                    // Skip forks if desired, or just show all
                    // if (repo.fork) return;

                    const card = document.createElement('div');
                    card.className = 'skill-card';
                    card.style.transitionDelay = '100ms'; // Stagger effect placeholder

                    // Manual Overrides
                    const overrides = {
                        'portfolio': {
                            desc: 'Sitio web personal diseñado para velocidad y minimalismo. Desplegado en Cloudflare.',
                            tags: ['HTML5', 'CSS3', 'JavaScript', 'Cloudflare']
                        }
                    };

                    let description = repo.description ? repo.description : 'Sin descripción disponible.';
                    let tagsHtml = repo.language ? `<span>${repo.language}</span>` : '';

                    if (overrides[repo.name]) {
                        description = overrides[repo.name].desc;
                        tagsHtml = overrides[repo.name].tags.map(t => `<span>${t}</span>`).join('');
                    }

                    card.innerHTML = `
                        <div class="skill-header">
                            <i class="fas fa-code-branch" style="color: var(--accent);"></i>
                            <h3 style="font-size: 1.1rem;">${repo.name}</h3>
                        </div>
                        <p class="project-desc" style="min-height: 60px;">
                            ${description}
                        </p>
                        <div class="skill-tags">
                            ${tagsHtml}
                            <span>${new Date(repo.updated_at).getFullYear()}</span>
                        </div>
                        <div class="project-actions" style="margin-top: 1.5rem; border-top: 1px solid var(--border-color); padding-top: 1.2rem;">
                            <a href="${repo.html_url}" target="_blank" class="btn-primary" style="width: 100%; text-align: center; justify-content: center; font-size: 0.9rem; padding: 0.6rem;">
                                Ver Código <i class="fab fa-github" style="margin-left: 8px;"></i>
                            </a>
                        </div>
                    `;
                    projectsContainer.appendChild(card);
                });
            })
            .catch(err => {
                console.error('Error loading GitHub projects:', err);
                projectsContainer.innerHTML = '<p style="color: #ef4444; grid-column: 1/-1; text-align: center;">No se pudieron cargar los proyectos. Revisa la consola o intenta más tarde.</p>';
            });
    }

    /* Legal Modal Logic */
    const legalContent = {
        'aviso-legal': `
            <h2 id="aviso-legal">Aviso Legal (LSSI)</h2>
            <p>En cumplimiento de la Ley 34/2002, de 11 de julio, de servicios de la sociedad de la información y de comercio electrónico (LSSI), se facilitan a continuación los datos de información general de este sitio web:</p>
            <ul>
                <li><strong>Titular:</strong> Diego Martínez Ortiz</li>
                <li><strong>NIF/DNI:</strong> <span class="placeholder">[INTRODUCIR DNI]</span></li>
                <li><strong>Domicilio:</strong> <span class="placeholder">[INTRODUCIR DIRECCIÓN]</span>, Albacete, España</li>
                <li><strong>Email de contacto:</strong> contact@glutendo.com</li>
            </ul>
        `,
        'privacidad': `
            <h2 id="privacidad">Política de Privacidad (RGPD)</h2>
            <p>De conformidad con el Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD), le informamos que este sitio web <strong>no utiliza formularios de recogida de datos</strong> ni bases de datos persistentes.</p>
            <p>Si usted contacta a través del correo electrónico facilitado, su dirección se utilizará únicamente para responder a su consulta y no será incorporada a ficheros comerciales sin su consentimiento expreso.</p>
        `,
        'cookies': `
            <h2 id="cookies">Política de Cookies</h2>
            <p>Este sitio web puede utilizar cookies técnicas esenciales para su funcionamiento (como las de Cloudflare para seguridad). No utilizamos cookies de terceros, publicitarias ni de análisis de comportamiento sin su consentimiento previo.</p>
            <p>Dado que es un portfolio estático alojado en Cloudflare Pages, las cookies presentes son estrictamente necesarias para la seguridad y el balanceo de carga del servidor.</p>
        `
    };

    const legalModal = document.getElementById('legal-modal');
    const legalBody = document.getElementById('legal-content-body');
    const closeModal = document.querySelector('.close-modal');

    // Open Modal logic
    document.querySelectorAll('a[href^="legal.html"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const href = link.getAttribute('href');
            // Extract hash part "aviso-legal" from "legal.html#aviso-legal"
            const type = href.split('#')[1];

            if (legalContent[type]) {
                legalBody.innerHTML = legalContent[type];
                legalModal.classList.add('active');
                document.body.style.overflow = 'hidden'; // Prevent background scrolling
            }
        });
    });

    // Close Logic
    if (closeModal) {
        closeModal.addEventListener('click', () => {
            legalModal.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    // Close on outside click
    if (legalModal) {
        legalModal.addEventListener('click', (e) => {
            if (e.target === legalModal) {
                legalModal.classList.remove('active');
                document.body.style.overflow = '';
            }

        });
    }

    /* Hamburger Menu Logic */
    const hamburgerBtn = document.querySelector('.hamburger-menu');
    const mobileOverlay = document.querySelector('.mobile-menu-overlay');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (hamburgerBtn && mobileOverlay) {
        // Toggle Menu
        hamburgerBtn.addEventListener('click', () => {
            hamburgerBtn.classList.toggle('active');
            mobileOverlay.classList.toggle('active');
            document.body.style.overflow = mobileOverlay.classList.contains('active') ? 'hidden' : '';
        });

        // Close on Link Click
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburgerBtn.classList.remove('active');
                mobileOverlay.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // Global toggleMenu function backup if onclick is used
    window.toggleMenu = function () {
        if (hamburgerBtn && mobileOverlay) {
            hamburgerBtn.classList.remove('active');
            mobileOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    };


});
