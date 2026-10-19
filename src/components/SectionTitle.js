import React from 'react'

const SectionTitle = ({ number, eyebrow, title, subtitle }) => {
    return (
        <header className="section-title">
            <span className="section-eyebrow">
                <span className="section-number">{number}</span>
                {eyebrow}
            </span>
            <h2>{title}</h2>
            {subtitle && <p className="section-subtitle">{subtitle}</p>}
        </header>
    )
}

export default SectionTitle
