import React, { forwardRef } from 'react'
import projects from './../data/Projects.json'
import habilitys from './../data/Habilitys.json'

const SectionProject = forwardRef((props, ref) => {
    return (
        <section id="project" ref={ref} className="container hidden section-project">
            <div className="container-title me-auto">
                <h1>Projetos</h1>
                <div className="effect-gradient"></div>
            </div>

            <div className='g-5'>

                {projects.map((project, index) => (
                    <div key={index} className='col-lg-4 col-sm-12 col-md-6'>
                        <div className="project-card p-3 rounded d-flex align-items-start gap-3">
                            <img alt="" src={project.img} className='project-thumb' onError={(e)=>{e.target.onerror=null;e.target.src='/img/logo/vitor.png'}} />
                            <div className='project-info'>
                                <h5 className='mb-1 text-white'>{project.name}</h5>
                                <div className='d-flex gap-2 align-items-center mt-2'>
                                    {(project.skills || []).map((skillAcr, i) => {
                                        const skill = habilitys.find(h => h.acronym === skillAcr)
                                        const bg = skill ? skill.backgroun : 'rgb(60,60,60)'
                                        const color = skill ? skill.color : '#fff'
                                        return (
                                            <div key={i} className='skill-badge d-inline-flex align-items-center justify-content-center'>
                                                <span style={{ background: bg, color: color }} className='rounded-circle badge-icon'>{skillAcr}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div >
        </section >
    )
});

export default SectionProject