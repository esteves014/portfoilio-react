import React from 'react'

const SectionTitle = ({ title, subtitle }) => {
    return (
        <header className="section-title">
            <h2>{title}</h2>
            {subtitle && <p className="section-subtitle">{subtitle}</p>}
        </header>
    )
}

export default SectionTitle
