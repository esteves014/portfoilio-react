import React, { forwardRef } from 'react'
import SectionTitle from './SectionTitle'
import SkillTags from './SkillTags'
import projects from './../data/Projects.json'

const semesterProjects = projects.filter(project => project.semester).sort((a, b) => a.semester - b.semester)
const otherProjects = projects.filter(project => !project.semester)

export const ProjectThumb = ({ project }) => (
    project.img ? (
        <img
            alt={`Projeto ${project.name}`}
            src={project.img}
            className='project-thumb'
            onError={(e) => { e.target.onerror = null; e.target.src = '/img/logo/vitor.png' }}
        />
    ) : (
        <div className='project-thumb-empty' role="img" aria-label={`Sem imagem de ${project.name}`}>
            <i className="bi bi-code-slash"></i>
        </div>
    )
)

const ProjectCard = ({ project }) => {
    const linkable = Boolean(project.semester)
    const Tag = linkable ? 'a' : 'article'
    const linkProps = linkable ? { href: `#/projeto/${project.slug}`, 'aria-label': `Ver detalhes de ${project.name}` } : {}

    return (
    <Tag {...linkProps} className={`project-card h-100 ${linkable ? '' : 'project-card-static'}`}>
        <div className='project-thumb-wrapper'>
            <ProjectThumb project={project} />
            {project.semester && <span className='project-number' aria-hidden="true">{String(project.semester).padStart(2, '0')}</span>}
        </div>
        <div className='project-info'>
            {project.semester && (
                <h3 className='project-semester'>
                    <span>{project.semester}º semestre</span> · {project.discipline}
                </h3>
            )}
            <h4 className='h5 mb-2'>{project.name}</h4>
            {project.status && <span className='project-status mb-2'>{project.status}</span>}
            {project.description && <p className='project-description'>{project.description}</p>}
            <SkillTags skills={project.skills} />
            {linkable && <span className='project-more'>Ver detalhes <i className="bi bi-arrow-right"></i></span>}
        </div>
    </Tag>
    )
}

const Group = ({ id, badge, label, caption, items }) => (
    <div className="semester-group" id={id}>
        <h3 className="semester-title">
            <span className="semester-badge">{badge}</span>
            <span className="semester-discipline">{label}</span>
        </h3>
        {caption && <p className="semester-caption">{caption}</p>}
        <div className='row g-4'>
            {items.map(project => (
                <div key={project.slug} className='col-12 col-md-6 col-lg-4'>
                    <ProjectCard project={project} />
                </div>
            ))}
        </div>
    </div>
)

const SectionProject = forwardRef((props, ref) => (
    <section id="project" ref={ref} className="container hidden section-project">
        <SectionTitle title="Projetos" subtitle="Um projeto de cada semestre do curso, do 1º ao 6º, e outros trabalhos que desenvolvi. Abra o card de um semestre para ver os detalhes." />

        <div className="row g-4" id="semesters">
            {semesterProjects.map(project => (
                <div key={project.slug} id={`semester-${project.semester}`} className='col-12 col-md-6 col-lg-4'>
                    <ProjectCard project={project} />
                </div>
            ))}
        </div>

        {otherProjects.length > 0 && <Group id="semester-others" badge="Extras" label="Outros trabalhos" caption="Trabalhos feitos fora das disciplinas do curso, como sites para clientes. Por pertencerem aos seus donos, não têm link de acesso." items={otherProjects} />}
    </section>
))

export default SectionProject
