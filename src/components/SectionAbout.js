import { forwardRef } from 'react';

const SectionAbout = forwardRef((props, ref) => {
    return (
        <section id="about-me" ref={ref} className="container hidden">
            <div className="row">
                <div className="col-md-6 d-flex justify-content-center align-items-center hidden">
                    <div className="circle-extern">
                        <div id="img-me"></div>
                    </div>
                </div>

                <div className="col-md-6 hidden text-white">
                    <div className="container-title">
                        <h1>About Me</h1>
                        <div className="effect-gradient"></div>
                    </div>

                    <p>
                        Olá, sou o Vitor Miguel! Sou desenvolvedor web Full Stack e estudante de Sistemas para Internet na FATEC Lins. Com formação prévia em Informática para Internet e Marketing, busco sempre unir a excelência técnica com uma visão estratégica de comunicação digital.
                    </p>

                    <p>
                        Tenho experiência prática na criação de sistemas e aplicações web de ponta a ponta, utilizando tecnologias como PHP, JavaScript, HTML, CSS e Bootstrap. Atualmente, atuo como freelancer ajudando microempresas a digitalizarem seus negócios com soluções sob medida. No dia a dia, valorizo muito a produtividade, a comunicação clara em equipe e a resolução eficiente de problemas para garantir que cada projeto seja entregue com alta qualidade e dentro do prazo.
                    </p>

                    <a href="/archives/vitor_esteves_cv.pdf" className='text-decoration-none' download="vitor_esteves_cv.pdf">
                        <button className='btn-download text-white px-5 py-2 align-items-center justify-content-center d-flex gap-2 text-center'>Baixar CV <i class="bi bi-cloud-arrow-down fs-5"></i></button>
                    </a>
                </div>
            </div>
        </section>
    );
});

export default SectionAbout;