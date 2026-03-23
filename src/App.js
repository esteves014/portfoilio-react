// src/App.js
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import { useEffect, useRef } from 'react';
import SectionHome from './components/SectionHome';
import SectionAbout from './components/SectionAbout';
import SectionHability from './components/SectionHability';

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const habilityRef = useRef(null);

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
      <nav className="navbar navbar-expand-lg fixed-top bg-black navbar-dark">
        <div className="container">
          <button
            className="navbar-brand btn btn-link text-white span-home p-0"
            onClick={() => scrollToSection(homeRef)}
          >
            Vitor Miguel
          </button>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <button className="nav-link btn btn-link text-white" onClick={() => scrollToSection(homeRef)}>
                  Home
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link btn btn-link text-white" onClick={() => scrollToSection(aboutRef)}>
                  About Me
                </button>
              </li>

              <li className="nav-item">
                <button className="nav-link btn btn-link text-white" onClick={() => scrollToSection(habilityRef)}>
                  Hability
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main style={{ marginTop: '80px' }}>
        <SectionHome ref={homeRef} />
        <SectionAbout ref={aboutRef} />
        <SectionHability ref={habilityRef} />
      </main>
    </>
  );
}

export default App;