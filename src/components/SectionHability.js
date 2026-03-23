import { forwardRef } from 'react';
import habilitys from './../data/Habilitys.json'

const SectionHability = forwardRef((props, ref) => {

    return (
        <section id="hability" ref={ref} className="container hidden">
            <div className="container-title me-auto">
                <h1>Habilitys</h1>
                <div className="effect-gradient"></div>
            </div>
            <div className='row g-5'>

                {habilitys.map((hability, index) => (
                    <div key={index} className='col-lg-3 col-sm-12 col-md-4'>
                        <div className="container-hability px-3 py-3 rounded">
                            <h1 className='title-hability p-5 mb-3 rounded-top' style={{ color: hability.color, backgroundColor: hability.backgroun }}>{hability.acronym}</h1>
                            <h2>{hability.name}</h2>
                            <p>{hability.description}</p>
                            <p className='level_hability px-3 text-center'>Nível de habilidade(1 a 10): {hability.level_hability}</p>
                        </div>
                    </div>
                ))}
            </div >
        </section >
    )
});

export default SectionHability