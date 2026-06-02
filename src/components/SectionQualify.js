import React, { forwardRef } from 'react'

const SectionQualify = forwardRef((props, ref) => {
    return (
        <section id="qualify" ref={ref} className="container hidden section-qualify">
            <div className="container-title me-auto">
                <h1>Qualificações</h1>
                <div className="effect-gradient"></div>
            </div>

            <div className="accordion container-fluid" id="accordionPanelsStayOpenExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                        >
                            Experiência
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionPanelsStayOpenExample">
                        <div className="accordion-body">
                            <div className="qualify-item">
                                <h3>Sonnitech</h3>
                                <p>Estagiário de desenvolvimento</p>
                                <p>outubro de 2025 – Atual</p>
                                <ul>
                                    <li>Desenvolvimento Full Stack de aplicações web com Laravel, Vue.js, jQuery e MySQL.</li>
                                    <li>Integração com APIs REST e otimização de consultas ao banco de dados.</li>
                                    <li>Resolução de bugs em produção e suporte à sustentação do sistema.</li>
                                </ul>
                            </div>
                            <div className="qualify-item mt-4">
                                <h3>Cida Magazine</h3>
                                <p>Analista de mídia online</p>
                                <p>março de 2025 – outubro de 2025</p>
                                <ul>
                                    <li>Produção de conteúdo visual e redação publicitária para rádio e redes sociais.</li>
                                    <li>Análise de métricas de engajamento para direcionar campanhas.</li>
                                    <li>Configuração e suporte para transmissões ao vivo.</li>
                                </ul>
                            </div>
                            <div className="qualify-item mt-4">
                                <h3>Jcs Sistemas</h3>
                                <p>Desenvolvedor web</p>
                                <p>julho de 2024 – setembro de 2025</p>
                                <ul>
                                    <li>Desenvolvimento de páginas front-end.</li>
                                    <li>Desenvolvimento de back-end e banco de dados.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                        >
                            Formação
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionPanelsStayOpenExample">
                        <div className="accordion-body">
                            <div className="qualify-item">
                                <h3>Fatec Lins</h3>
                                <p>Curso Superior em Sistema para Internet</p>
                                <p>fevereiro de 2024 – dezembro de 2026</p>
                            </div>
                            <div className="qualify-item mt-4">
                                <h3>Etec Lins</h3>
                                <p>Técnico em Informática para Internet</p>
                                <p>fevereiro de 2021 – dezembro de 2023</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                        >
                            Competências
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionPanelsStayOpenExample">
                        <div className="accordion-body">
                            <div className="qualify-item">
                                <h3>Áreas de atuação</h3>
                                <ul>
                                    <li>Laravel</li>
                                    <li>Vue.js</li>
                                    <li>GitFlow</li>
                                    <li>Docker</li>
                                    <li>MySQL</li>
                                    <li>Desenvolvimento Full Stack</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
});

export default SectionQualify
