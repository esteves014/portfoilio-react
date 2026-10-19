import React, { useEffect, useState } from 'react'

const links = [
    { key: 'home', label: 'Início' },
    { key: 'about', label: 'Sobre mim' },
    { key: 'qualify', label: 'Qualificações' },
    { key: 'hability', label: 'Habilidades' },
    { key: 'project', label: 'Projetos' },
]

const NavBar = ({ scrollToSection, homeRef, aboutRef, qualifyRef, habilityRef, projectRef }) => {
    const [open, setOpen] = useState(false)
    const [active, setActive] = useState('home')
    const [scrolled, setScrolled] = useState(false)

    const refs = { home: homeRef, about: aboutRef, qualify: qualifyRef, hability: habilityRef, project: projectRef }

    useEffect(() => {
        const sections = [
            ['home', homeRef], ['about', aboutRef], ['qualify', qualifyRef], ['hability', habilityRef], ['project', projectRef],
        ]

        const handleScroll = () => {
            const position = window.scrollY + 140
            let current = 'home'
            sections.forEach(([key, ref]) => {
                if (ref.current && ref.current.offsetTop <= position) current = key
            })
            setActive(current)
            setScrolled(window.scrollY > 10)
        }

        handleScroll()
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [homeRef, aboutRef, qualifyRef, habilityRef, projectRef])

    useEffect(() => {
        if (!open) return

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') setOpen(false)
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [open])

    const goTo = (ref) => {
        setOpen(false)
        scrollToSection(ref)
    }

    return (
        <>
            <div className={`nav-backdrop d-lg-none ${open ? 'show' : ''}`} onClick={() => setOpen(false)} aria-hidden="true"></div>

            <nav className={`navbar navbar-expand-lg fixed-top navbar-dark site-nav ${scrolled || open ? 'scrolled' : ''}`}>
                <div className="container">
                    <button
                        className="navbar-brand btn btn-link text-white span-home p-0"
                        onClick={() => goTo(homeRef)}
                    >
                        Vitor Miguel
                    </button>

                    <button
                        className={`nav-toggle d-lg-none ${open ? 'open' : ''}`}
                        type="button"
                        aria-controls="navbarNav"
                        aria-expanded={open}
                        aria-label={open ? 'Fechar menu' : 'Abrir menu'}
                        onClick={() => setOpen(!open)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    <div className={`navbar-collapse nav-menu ${open ? 'open' : ''}`} id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            {links.map((link, index) => (
                                <li key={link.key} className="nav-item">
                                    <button
                                        className={`nav-link ${active === link.key ? 'active' : ''}`}
                                        aria-current={active === link.key ? 'true' : undefined}
                                        onClick={() => goTo(refs[link.key])}
                                    >
                                        <span className="nav-index d-lg-none">0{index + 1}</span>
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>

                        <a
                            href="/archives/vitor_esteves_cv.pdf"
                            download="vitor_esteves_cv.pdf"
                            className="btn-gradient nav-cta d-lg-none"
                            onClick={() => setOpen(false)}
                        >
                            <i className="bi bi-cloud-arrow-down me-2"></i>Baixar CV
                        </a>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar
