import React from 'react'
import posts from '../data/data1.json'
function Skills () {
    // const skills = posts.Skills.Area.map((skill, index) => {
    //     return <li key={index}>{skill}</li>
    // })
    const skills = posts.Skills.map((skill, index) => {
        const area = skill.Area
        const skillSet = skill.SkillSet;
        return (
            <>
                <p>{area}</p>
                {skillSet.map((set) => (
                    <li>{set.Name}</li>
                ))}
            </>
        )
    }) 
        
   
  return (
    <div>
        {skills}
    </div>
  )
}

export default Skills