import { forwardRef } from 'react';
import qualifications from './../data/Qualifications.json'
import projects from './../data/Projects.json'

const highlights = [
    { value: '2+', label: 'anos de experiência em desenvolvimento web' },
    { value: qualifications.experience.length, label: 'experiências profissionais' },
    { value: projects.length, label: 'projetos em destaque' },
]

const SectionAbout = forwardRef((props, ref) => {
    return (
        <section id="about-me" ref={ref} className="container hidden">
            <div className="row align-items-center g-5">
                <div className="col-md-5 d-flex justify-content-center align-items-center hidden">
                    <div className="circle-extern">
                        <div id="img-me" role="img" aria-label="Foto de Vitor Miguel"></div>
                    </div>
                </div>

                <div className="col-md-7 hidden text-white">
                    <div className="container-title">
                        <h1>Sobre mim</h1>
                        <div className="effect-gradient"></div>
                    </div>

                    <p className="about-lead">
                        Olá, sou o <strong>Vitor Miguel</strong>, desenvolvedor web Full Stack e estudante de
                        Sistemas para Internet na FATEC Lins.
                    </p>

                    <p className="about-text">
                        Crio sistemas e aplicações web de ponta a ponta. Hoje sou estagiário de desenvolvimento
                        na Sonnitech e também atuo como freelancer, ajudando microempresas a digitalizarem seus
                        negócios com soluções sob medida. Minha formação em Informática para Internet e Marketing
                        me ajuda a unir qualidade técnica com uma visão estratégica de comunicação digital.
                    </p>

                    <p className="about-text">
                        Valorizo produtividade, comunicação clara em equipe e resolução eficiente de problemas
                        para entregar cada projeto com qualidade e dentro do prazo.
                    </p>

                    <div className="row g-3 my-4">
                        {highlights.map((item, index) => (
                            <div key={index} className="col-4">
                                <div className="about-highlight h-100">
                                    <span className="about-highlight-value span-home">{item.value}</span>
                                    <span className="about-highlight-label">{item.label}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <a href="/archives/vitor_esteves_cv.pdf" className='btn-download text-white text-decoration-none px-5 py-2 d-inline-flex align-items-center gap-2' download="vitor_esteves_cv.pdf">
                        Baixar CV <i className="bi bi-cloud-arrow-down fs-5"></i>
                    </a>
                </div>
            </div>
        </section>
    );
});

export default SectionAbout;
