import { forwardRef } from 'react';

const SectionHability = forwardRef((props, ref) => {

    const habilitys = [{
        'acronym': 'HTML',
        'name': 'HTML',
        'description': 'Linguagem de marcação de Hipertexto.',
        'backgroun': 'rgb(96, 0, 0)',
        'color': 'rgb(182, 0, 0)'
    }, {
        'acronym': 'JS',
        'name': 'JavaScript',
        'description': 'Linguagem de programação interpretada de alto nível, essencial para o desenvolvimento web.',
        'backgroun': 'rgb(96, 0, 0)',
        'color': 'rgb(182, 0, 0)'
    }, {
        'acronym': 'CSS',
        'name': 'CSS',
        'description': 'Linguagem de estilo essencial utilizada para definir a aparência, layout e design de documentos HTML.',
        'backgroun': 'rgb(96, 0, 0)',
        'color': 'rgb(182, 0, 0)'
    }, {
        'acronym': 'RC',
        'name': 'React',
        'description': 'React é uma biblioteca de UI que cuida das manipulações diretas do DOM.',
        'backgroun': 'rgb(96, 0, 0)',
        'color': 'rgb(182, 0, 0)'
    }, {
        'acronym': 'LR',
        'name': 'Laravel',
        'description': 'LAravel é uma biblioteca de Backend que cuida das manipulações diretas de dados.',
        'backgroun': 'rgb(96, 0, 0)',
        'color': 'rgb(182, 0, 0)'
    }, {
        'acronym': 'BT',
        'name': 'Bootstrap',
        'description': 'LAravel é uma biblioteca de Backend que cuida das manipulações diretas de dados.',
        'backgroun': 'rgb(96, 0, 0)',
        'color': 'rgb(182, 0, 0)'
    }, {
        'acronym': 'VJ',
        'name': 'Vue.js',
        'description': 'LAravel é uma biblioteca de Backend que cuida das manipulações diretas de dados.',
        'backgroun': 'rgb(96, 0, 0)',
        'color': 'rgb(182, 0, 0)'
    }];

    return (
        <section id="hability" ref={ref} className="container hidden">
            <div className="container-title me-auto">
                <h1>Habilitys</h1>
                <div className="effect-gradient"></div>
            </div>
            <div className='row'>

                {habilitys.map((hability, index) => (
                    <div key={index} className='col-lg-3 col-sm-12 col-md-4'>
                        <div className='bg-html'><h1 className='title-html'>{hability.acronym}</h1></div>
                        <h2>{hability.name}</h2>
                        <p>{hability.description}</p>
                    </div>
                ))}
            </div>
        </section >
    )
});

export default SectionHability