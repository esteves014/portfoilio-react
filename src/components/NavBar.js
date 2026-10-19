import React from 'react'

const NavBar = ({ scrollToSection, homeRef, aboutRef, qualifyRef, habilityRef, projectRef }) => {
    return (
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
                                Início
                            </button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link btn btn-link text-white" onClick={() => scrollToSection(aboutRef)}>
                                Sobre mim
                            </button>
                        </li>

                        <li className="nav-item">
                            <button className="nav-link btn btn-link text-white" onClick={() => scrollToSection(qualifyRef)}>
                                Qualificações
                            </button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link btn btn-link text-white" onClick={() => scrollToSection(habilityRef)}>
                                Habilidades
                            </button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link btn btn-link text-white" onClick={() => scrollToSection(projectRef)}>
                                Projetos
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar