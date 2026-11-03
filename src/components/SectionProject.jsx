import React, { forwardRef } from 'react'
import SectionTitle from './SectionTitle'
import projects from './../data/Projects.json'
import habilitys from './../data/Habilitys.json'

const semesters = [1, 2, 3, 4, 5, 6]
const otherProjects = projects.filter(project => !project.semester)

const ProjectCard = ({ project, wide = false }) => (
    <article className={`project-card h-100 d-flex flex-column ${wide ? 'project-card-wide' : ''}`}>
        <div className='project-thumb-wrapper'>
            {project.img ? (
                <img alt={project.name} src={project.img} className='project-thumb' onError={(e)=>{e.target.onerror=null;e.target.src='/img/logo/vitor.png'}} />
            ) : (
                <div className='project-thumb-empty' role="img" aria-label={`Sem imagem de ${project.name}`}>
                    <i className="bi bi-code-slash"></i>
                </div>
            )}
        </div>
        <div className='project-info p-4 d-flex flex-column flex-grow-1'>
            <h4 className='h5 mb-2'>{project.name}</h4>
            {project.status && <span className='project-status mb-2'>{project.status}</span>}
            {project.description && <p className='project-description'>{project.description}</p>}
            <div className='d-flex flex-wrap gap-2 mt-auto'>
                {(project.skills || []).map((skillAcr, i) => {
                    const skill = habilitys.find(h => h.acronym === skillAcr)
                    const color = skill ? skill.color : 'rgb(140,140,140)'
                    return (
                        <span key={i} className='skill-tag' style={{ '--skill-color': color }}>
                            {skill ? skill.name : skillAcr}
                        </span>
                    )
                })}
            </div>
            {project.link && (
                <a href={project.link} target='_blank' rel='noopener noreferrer' className='btn btn-outline text-white mt-4 align-self-start'>
                    Ver projeto <i className="bi bi-box-arrow-up-right ms-1"></i>
                </a>
            )}
        </div>
    </article>
)

const SectionProject = forwardRef((props, ref) => {
    return (
        <section id="project" ref={ref} className="container hidden section-project">
            <SectionTitle title="Projetos" subtitle="Um projeto de cada semestre do curso, do 1º ao 6º, e outros trabalhos que desenvolvi." />

            {semesters.map(semester => {
                const items = projects.filter(project => project.semester === semester)
                if (items.length === 0) return null

                return (
                    <div key={semester} className="semester-group" id={`semester-${semester}`}>
                        <h3 className="semester-title">
                            <span className="semester-badge">{semester}º semestre</span>
                            <span className="semester-discipline">{items[0].discipline}</span>
                        </h3>
                        <div className='row g-4'>
                            {items.map(project => (
                                <div key={project.name} className='col-12'>
                                    <ProjectCard project={project} wide />
                                </div>
                            ))}
                        </div>
                    </div>
                )
            })}

            {otherProjects.length > 0 && (
                <div className="semester-group" id="semester-others">
                    <h3 className="semester-title">
                        <span className="semester-badge">Extras</span>
                        <span className="semester-discipline">Outros trabalhos</span>
                    </h3>
                    <div className='row g-4'>
                        {otherProjects.map(project => (
                            <div key={project.name} className='col-12 col-md-6 col-lg-4'>
                                <ProjectCard project={project} />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </section>
    )
});

export default SectionProject
