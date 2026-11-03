import React, { forwardRef, useState } from 'react'
import SectionTitle from './SectionTitle'
import qualifications from './../data/Qualifications.json'

const tabs = [
    { key: 'experience', label: 'Experiência', icon: 'bi-briefcase' },
    { key: 'education', label: 'Formação', icon: 'bi-mortarboard' },
]

const SectionQualify = forwardRef((props, ref) => {
    const [activeTab, setActiveTab] = useState('experience')

    return (
        <section id="qualify" ref={ref} className="container hidden section-qualify">
            <SectionTitle title="Qualificações" subtitle="Minha experiência profissional e formação acadêmica." />

            <div className="qualify-tabs" role="tablist">
                {tabs.map(tab => (
                    <button
                        key={tab.key}
                        type="button"
                        role="tab"
                        aria-selected={activeTab === tab.key}
                        className={`qualify-tab ${activeTab === tab.key ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab.key)}
                    >
                        <i className={`bi ${tab.icon} me-2`}></i>{tab.label}
                    </button>
                ))}
            </div>

            <ol className="timeline" role="tabpanel">
                {qualifications[activeTab].map((item, index) => (
                    <li key={`${activeTab}-${index}`} className={`timeline-item ${item.current ? 'current' : ''}`}>
                        <div className="timeline-card">
                            <div className="d-flex flex-wrap justify-content-between align-items-start gap-2 mb-2">
                                <div>
                                    <h2 className="h5 mb-1">{item.title}</h2>
                                    <span className="timeline-place">{item.place}</span>
                                </div>
                                <span className="timeline-period">
                                    <i className="bi bi-calendar3 me-1"></i>{item.period}
                                </span>
                            </div>
                            {item.items && (
                                <ul className="timeline-list mb-0">
                                    {item.items.map((text, i) => <li key={i}>{text}</li>)}
                                </ul>
                            )}
                        </div>
                    </li>
                ))}
            </ol>

            <div className="qualify-competencies">
                <h2 className="h6 mb-3">Também trabalho com</h2>
                <div className="d-flex flex-wrap gap-2">
                    {qualifications.competencies.map((name, i) => (
                        <span key={i} className="competency-tag">{name}</span>
                    ))}
                </div>
            </div>
        </section>
    )
});

export default SectionQualify
