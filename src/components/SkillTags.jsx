import React from 'react'
import habilitys from './../data/Habilitys.json'

const SkillTags = ({ skills = [] }) => (
    <div className='d-flex flex-wrap gap-2'>
        {skills.map((acronym) => {
            const skill = habilitys.find(h => h.acronym === acronym)
            return (
                <span key={acronym} className='skill-tag' style={{ '--skill-color': skill ? skill.color : 'rgb(140,140,140)' }}>
                    {skill ? skill.name : acronym}
                </span>
            )
        })}
    </div>
)

export default SkillTags
