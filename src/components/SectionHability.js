import { forwardRef } from 'react';
import habilitys from './../data/Habilitys.json'

const SectionHability = forwardRef((props, ref) => {

    return (
        <section id="hability" ref={ref} className="container hidden section-hability">
            <div className="container-title me-auto">
                <h1>Habilidades</h1>
                <div className="effect-gradient"></div>
            </div>
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
                            <p className='skill-description'>{hability.description}</p>
                            <div className='mt-auto'>
                                <div className='d-flex justify-content-between skill-level-label'>
                                    <span>Nível</span>
                                    <span>{hability.level_hability}/10</span>
                                </div>
                                <div
                                    className='skill-level'
                                    role='meter'
                                    aria-label={`Nível em ${hability.name}`}
                                    aria-valuemin={0}
                                    aria-valuemax={10}
                                    aria-valuenow={hability.level_hability}
                                >
                                    <div className='skill-level-fill' style={{ width: `${hability.level_hability * 10}%` }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div >
        </section >
    )
});

export default SectionHability
