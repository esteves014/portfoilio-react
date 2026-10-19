import { forwardRef } from 'react';
import SectionTitle from './SectionTitle'
import habilitys from './../data/Habilitys.json'

const SectionHability = forwardRef((props, ref) => {

    return (
        <section id="hability" ref={ref} className="container hidden section-hability">
            <SectionTitle number="03" eyebrow="Tecnologias" title="Habilidades" subtitle="Linguagens, frameworks e ferramentas que uso no dia a dia." />
            <div className='row g-4'>

                {habilitys.map((hability, index) => (
                    <div key={index} className='col-12 col-sm-6 col-lg-3'>
                        <div
                            className="skill-card h-100 p-4 d-flex flex-column"
                            style={{ '--skill-color': hability.color, '--skill-bg': hability.backgroun }}
                        >
                            <div className='d-flex align-items-center gap-3 mb-3'>
                                <span className='skill-icon'>{hability.acronym}</span>
                                <h2 className='h5 mb-0'>{hability.name}</h2>
                            </div>
                            <p className='skill-description mb-0'>{hability.description}</p>
                        </div>
                    </div>
                ))}
            </div >
        </section >
    )
});

export default SectionHability
