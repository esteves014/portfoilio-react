import React from 'react'
import socials from './../data/Socials.json'

const Footer = ({ onBackToTop }) => {
    return (
        <footer className="site-footer">
            <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">
                <span className="footer-text">© {new Date().getFullYear()} Vitor Miguel. Todos os direitos reservados.</span>

                <div className="d-flex align-items-center gap-2">
                    {socials.filter(social => social.url).map(social => (
                        <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="home-social" aria-label={social.name} title={social.name}>
                            <i className={`bi ${social.icon}`}></i>
                        </a>
                    ))}
                    <button type="button" className="home-social footer-top" onClick={onBackToTop} aria-label="Voltar ao topo" title="Voltar ao topo">
                        <i className="bi bi-arrow-up"></i>
                    </button>
                </div>
            </div>
        </footer>
    )
}

export default Footer
