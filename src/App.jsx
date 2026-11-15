import './App.css';
import { useEffect, useRef, useState } from 'react';
import ProjectPage from './components/ProjectPage';
import projects from './data/Projects.json';
import SectionHome from './components/SectionHome';
import SectionAbout from './components/SectionAbout';
import SectionHability from './components/SectionHability';
import SectionProject from './components/SectionProject';
import SectionQualify from './components/SectionQualify';
import SectionContact from './components/SectionContact';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const parseHash = () => {
  const match = window.location.hash.match(/^#\/projeto\/([\w-]+)/);
  return match ? match[1] : null;
};

function App() {
  const [slug, setSlug] = useState(parseHash);
  const returningToProjects = useRef(false);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const habilityRef = useRef(null);
  const projectRef = useRef(null);
  const qualifyRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop - 80,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const onHashChange = () => {
      const next = parseHash();
      if (!next && window.location.hash === '#/projetos') returningToProjects.current = true;
      setSlug(next);
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    const loader = document.getElementById('load');
    if (loader) {
      const timer = setTimeout(() => { loader.style.display = 'none'; }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (slug) {
      const project = projects.find(p => p.slug === slug);
      document.title = `${project ? project.name : 'Projeto'} - Vitor Miguel`;
      window.scrollTo(0, 0);
      return;
    }

    document.title = 'Portfólio - Vitor Miguel';

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          // Filhos animados ficam fora da tela (translateX) e nunca seriam detectados sozinhos no celular
          entry.target.querySelectorAll('.hidden').forEach(el => el.classList.add('show'));
        }
      });
    }, observerOptions);

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    if (returningToProjects.current) {
      returningToProjects.current = false;
      projectRef.current.classList.add('show');
      window.scrollTo({ top: projectRef.current.offsetTop - 80, behavior: 'instant' });
    }

    return () => observer.disconnect();
  }, [slug]);

  if (slug) {
    return (
      <>
        <header className="site-nav scrolled project-nav">
          <div className="container d-flex align-items-center justify-content-between">
            <a href="#/" className="navbar-brand text-white span-home">Vitor Miguel</a>
            <a href="#/projetos" className="nav-link">Projetos</a>
          </div>
        </header>
        <main style={{ marginTop: '80px' }}>
          <ProjectPage slug={slug} />
        </main>
        <Footer onBackToTop={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
      </>
    );
  }

  return (
    <>
      <NavBar
        scrollToSection={scrollToSection}
        homeRef={homeRef}
        aboutRef={aboutRef}
        habilityRef={habilityRef}
        projectRef={projectRef}
        qualifyRef={qualifyRef}
        contactRef={contactRef}
      />

      <main style={{ marginTop: '80px' }}>
        <SectionHome
          ref={homeRef}
          onViewProjects={() => scrollToSection(projectRef)}
          onScrollDown={() => scrollToSection(aboutRef)}
        />
        <SectionAbout ref={aboutRef} />
        <SectionQualify ref={qualifyRef} />
        <SectionHability ref={habilityRef} />
        <SectionProject ref={projectRef} />
        <SectionContact ref={contactRef} />
      </main>

      <Footer onBackToTop={() => scrollToSection(homeRef)} />
    </>
  );
}

export default App;