import React from 'react'
import SkillTags from './SkillTags'
import { ProjectThumb } from './SectionProject'
import projects from './../data/Projects.json'

const ProjectPage = ({ slug }) => {
    const pages = projects.filter(p => p.semester)
    const index = pages.findIndex(p => p.slug === slug)
    const project = pages[index]

    if (!project) {
        return (
            <section className="container project-page text-center">
                <h1 className="project-page-title">Projeto não encontrado</h1>
                <a href="#/projetos" className="btn btn-outline mt-4">Voltar aos projetos</a>
            </section>
        )
    }

    const next = pages[(index + 1) % pages.length]
    const prev = pages[(index - 1 + pages.length) % pages.length]
    const links = [
        project.link && { href: project.link, label: 'Acessar projeto', icon: 'bi-box-arrow-up-right' },
        project.github && { href: project.github, label: 'Ver no GitHub', icon: 'bi-github' },
    ].filter(Boolean)

    return (
        <article className="container project-page">
            <a href="#/projetos" className="project-back"><i className="bi bi-arrow-left"></i> Todos os projetos</a>

            <header className="project-banner">
                <span className="project-banner-number" aria-hidden="true">{String(project.semester).padStart(2, '0')}</span>
                <div className="project-banner-content">
                    <span className="semester-badge">{project.semester}º semestre</span>
                    <h1 className="project-page-title">{project.name}</h1>
                    {project.description && <p className="project-page-lead">{project.description}</p>}
                    <SkillTags skills={project.skills} />
                </div>
            </header>

            <ul className="project-meta">
                <li><span>Disciplina</span><strong>{project.discipline}</strong></li>
                <li><span>Semestre</span><strong>{project.semester}º</strong></li>
                <li><span>Situação</span><strong>{project.status || 'Concluído'}</strong></li>
            </ul>

            <div className="project-body">
                {project.img && (
                    <div className="project-hero">
                        <ProjectThumb project={project} />
                    </div>
                )}

                {project.highlights && (
                    <ul className="project-highlights">
                        {project.highlights.map(item => (
                            <li key={item.label}>
                                <strong>{item.value}</strong>
                                <span>{item.label}</span>
                            </li>
                        ))}
                    </ul>
                )}

                {project.about && (
                    <section className="project-block">
                        <h2 className="project-block-title">Sobre o projeto</h2>
                        {[].concat(project.about).map(paragraph => <p key={paragraph}>{paragraph}</p>)}
                    </section>
                )}

                {project.features && (
                    <section className="project-block">
                        <h2 className="project-block-title">O que ele faz</h2>
                        <ul className="project-features">
                            {project.features.map(item => (
                                <li key={item}><i className="bi bi-check2-circle" aria-hidden="true"></i><span>{item}</span></li>
                            ))}
                        </ul>
                    </section>
                )}

                {project.gallery && project.gallery.length > 0 && (
                    <section className="project-block">
                        <h2 className="project-block-title">Telas do projeto</h2>
                        <div className="project-gallery">
                            {project.gallery.map(item => (
                                <figure key={item.src}>
                                    <img src={item.src} alt={item.caption || project.name} loading="lazy" />
                                    {item.caption && <figcaption>{item.caption}</figcaption>}
                                </figure>
                            ))}
                        </div>
                    </section>
                )}

                {project.implementation && (
                    <section className="project-block">
                        <h2 className="project-block-title">Como foi feito</h2>
                        <ol className="project-steps">
                            {project.implementation.map((step, i) => (
                                <li key={step.title}>
                                    <span className="project-step-number">{String(i + 1).padStart(2, '0')}</span>
                                    <h3>{step.title}</h3>
                                    <p>{step.text}</p>
                                </li>
                            ))}
                        </ol>
                    </section>
                )}

                {project.limits && (
                    <section className="project-block">
                        <h2 className="project-block-title">Limitações e próximos passos</h2>
                        <ul className="project-limits">
                            {project.limits.map(item => <li key={item}>{item}</li>)}
                        </ul>
                    </section>
                )}

                {links.length > 0 && (
                    <div className="project-links">
                        {links.map(l => (
                            <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                                <i className={`bi ${l.icon} me-2`}></i>{l.label}
                            </a>
                        ))}
                    </div>
                )}
            </div>

            <nav className="project-pager" aria-label="Outros projetos">
                <a href={`#/projeto/${prev.slug}`}>
                    <span><i className="bi bi-arrow-left"></i> Anterior</span>
                    <strong>{prev.name}</strong>
                </a>
                <a href={`#/projeto/${next.slug}`} className="text-end">
                    <span>Próximo <i className="bi bi-arrow-right"></i></span>
                    <strong>{next.name}</strong>
                </a>
            </nav>
        </article>
    )
}

export default ProjectPage
