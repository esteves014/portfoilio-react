import React, { forwardRef } from 'react'
import SectionTitle from './SectionTitle'
import projects from './../data/Projects.json'
import habilitys from './../data/Habilitys.json'

const SectionProject = forwardRef((props, ref) => {
    return (
        <section id="project" ref={ref} className="container hidden section-project">
            <SectionTitle number="04" eyebrow="Portfólio" title="Projetos" subtitle="Alguns dos trabalhos que desenvolvi." />

            <div className='row g-4'>

                {projects.map((project, index) => (
                    <div key={index} className='col-12 col-md-6 col-lg-4'>
                        <article className="project-card h-100 d-flex flex-column">
                            <div className='project-thumb-wrapper'>
                                <img alt={project.name} src={project.img} className='project-thumb' onError={(e)=>{e.target.onerror=null;e.target.src='/img/logo/vitor.png'}} />
                            </div>
                            <div className='project-info p-4 d-flex flex-column flex-grow-1'>
                                <h2 className='h5 mb-3'>{project.name}</h2>
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
                    </div>
                ))}
            </div >
        </section >
    )
});

export default SectionProject
