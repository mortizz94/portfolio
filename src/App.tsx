
import { useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import GitHubProjects from './components/GitHubProjects';
import Services from './components/Services';
import Innovation from './components/Innovation';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {

  useEffect(() => {
    // Scroll Reveal Observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const targets = document.querySelectorAll('.fade-up, .animate-left, .animate-right');
    targets.forEach(t => observer.observe(t));

    // Back to Top Button Logic
    const handleScroll = () => {
      const btn = document.getElementById('backToTop');
      if (btn) {
        if (window.scrollY > 300) btn.classList.add('visible');
        else btn.classList.remove('visible');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="grid-background"></div>
      <Navbar />
      <Hero />
      <main>
        <Experience />
        <Skills />
        <GitHubProjects />
        <Services />
        <Innovation />
        <Education />
      </main>
      <Footer />

      {/* Back to Top */}
      <a href="#top" className="back-to-top" id="backToTop">
        <ArrowUp size={20} color="#000" />
      </a>
    </>
  );
}

export default App;
