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
                        Olá, meu nome é Vitor Miguel, sou estudante de Sistemas para Internet na FATEC (Faculdade de
                        Tecnologia) de Lins, localizada no interior de São Paulo. Desde sempre tive grande interesse pela
                        área de tecnologia, cursei inicialmente Informática para Internet e, posteriormente, Marketing na
                        Etec de Lins, onde pude aprimorar meu conhecimento nas áreas de desenvolvimento web e estratégias de
                        comunicação digital.
                        <br /><br />
                        Ao longo do meu percurso acadêmico, adquiri uma sólida experiência em desenvolvimento de sistemas e
                        aplicações web, sou focado em desenvolvimento full stack, o que me permite trabalhar tanto no
                        front-end quanto no back-end de projetos. Realizei vários projetos pessoais, sempre buscando
                        entregar soluções eficientes e de qualidade. Além disso, atualmente, trabalho como freelancer para
                        uma microempresa, onde sou responsável pelo desenvolvimento de sites utilizando tecnologias como
                        HTML, CSS, PHP, JavaScript e Bootstrap.
                        <br /><br />
                        A minha experiência prática me proporcionou habilidades essenciais como trabalho em equipe, onde
                        coloco em prática minha capacidade de colaboração e comunicação para atingir os objetivos do grupo.
                        Também sou bastante focado em produtividade, buscando sempre otimizar meus processos para garantir
                        que as entregas sejam feitas de forma eficiente e dentro dos prazos definidos. Além disso, sou muito
                        dedicado à resolução de problemas, habilidade que considero essencial no dia a dia de um
                        desenvolvedor, especialmente quando surgem desafios inesperados durante o desenvolvimento do sistema.
                    </p>
                </div>
            </div>
        </section>
    );
});

export default SectionAbout;