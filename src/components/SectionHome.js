import { forwardRef, useEffect } from 'react';
import socials from './../data/Socials.json'

const SectionHome = forwardRef(({ onViewProjects, onScrollDown }, ref) => {
    useEffect(() => {
        const buttons = document.querySelectorAll('#home .btn-outline');

        const handleMouseMove = (e, button) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const diffX = x - centerX;
            const diffY = y - centerY;
            const distance = Math.sqrt(diffX * diffX + diffY * diffY);

            if (distance < 1) return;

            const dirX = (diffX / distance);
            const dirY = (diffY / distance);

            button.style.boxShadow = `
                0 8px 32px rgba(53, 0, 139, 0.2),
                inset 0 1px 1px rgba(255, 255, 255, 0.2),
                ${dirX * 25}px ${dirY * 25}px 35px rgba(146, 0, 190, 0.4),
                ${dirX * 12}px ${dirY * 12}px 15px rgba(64, 0, 167, 0.2)
            `;
        };

        const handleMouseLeave = (button) => {
            button.style.boxShadow = `
                0 8px 32px rgba(53, 0, 139, 0.2),
                inset 0 1px 1px rgba(255, 255, 255, 0.2)
            `;
        };

        const listeners = Array.from(buttons).map(button => {
            const onMouseMove = (e) => handleMouseMove(e, button);
            const onMouseLeave = () => handleMouseLeave(button);
            button.addEventListener('mousemove', onMouseMove);
            button.addEventListener('mouseleave', onMouseLeave);
            return { button, onMouseMove, onMouseLeave };
        });

        return () => {
            listeners.forEach(({ button, onMouseMove, onMouseLeave }) => {
                button.removeEventListener('mousemove', onMouseMove);
                button.removeEventListener('mouseleave', onMouseLeave);
            });
        };
    }, []);

    return (
        <section id="home" ref={ref} className="section-home container-fluid position-relative overflow-hidden">
            <div className="home-glow home-glow-1" aria-hidden="true"></div>
            <div className="home-glow home-glow-2" aria-hidden="true"></div>

            <div className="home-content text-center position-relative">
                <span className="home-badge">
                    <span className="home-badge-dot"></span> Desenvolvedor Full Stack
                </span>

                <h1 className="home-title">
                    Olá, eu sou <span className="span-home">Vitor Miguel</span>
                </h1>

                <p className="home-lead">
                    Crio sistemas e aplicações web de ponta a ponta com Laravel, Vue.js, PHP e MySQL,
                    ajudando empresas a digitalizarem seus negócios.
                </p>

                <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
                    <button type="button" className="btn-gradient" onClick={onViewProjects}>
                        Ver projetos <i className="bi bi-arrow-right ms-1"></i>
                    </button>
                    <a href="/archives/vitor_esteves_cv.pdf" download="vitor_esteves_cv.pdf" className="btn btn-outline text-white">
                        <i className="bi bi-cloud-arrow-down me-1"></i> Baixar CV
                    </a>
                </div>

                <div className="d-flex justify-content-center gap-3 mt-4" role="group" aria-label="Redes sociais">
                    {socials.map(social => social.url ? (
                        <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="home-social" aria-label={social.name} title={social.name}>
                            <i className={`bi ${social.icon}`}></i>
                        </a>
                    ) : (
                        <span key={social.name} className="home-social" aria-label={social.name} title={social.name}>
                            <i className={`bi ${social.icon}`}></i>
                        </span>
                    ))}
                </div>
            </div>

            <button type="button" className="home-scroll" onClick={onScrollDown} aria-label="Rolar para Sobre mim">
                <i className="bi bi-chevron-down"></i>
            </button>
        </section>
    );
});

export default SectionHome;
