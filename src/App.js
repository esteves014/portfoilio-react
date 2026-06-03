import './App.css';
import { useEffect, useRef } from 'react';
import SectionHome from './components/SectionHome';
import SectionAbout from './components/SectionAbout';
import SectionHability from './components/SectionHability';
import SectionProject from './components/SectionProject';
import SectionQualify from './components/SectionQualify';
import NavBar from './components/NavBar';

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const habilityRef = useRef(null);
  const projectRef = useRef(null);
  const qualifyRef = useRef(null);
  

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop - 80,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    document.title = 'Portfólio - Vitor Miguel';

    const loader = document.getElementById('load');
    if (loader) {
      setTimeout(() => {
        loader.style.display = 'none';
      }, 500);
    }

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, observerOptions);

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <NavBar
        scrollToSection={scrollToSection}
        homeRef={homeRef}
        aboutRef={aboutRef}
        habilityRef={habilityRef}
        projectRef={projectRef}
        qualifyRef={qualifyRef}
      />

      <main style={{ marginTop: '80px' }}>
        <SectionHome ref={homeRef} />
        <SectionAbout ref={aboutRef} />
        <SectionQualify ref={qualifyRef} />
        <SectionHability ref={habilityRef} />
        <SectionProject ref={projectRef} />
      </main>
    </>
  );
}

export default App;