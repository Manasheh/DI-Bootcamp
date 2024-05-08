import React from 'react'
import posts from '../data/data1.json'
function Experiences() {
    const experiences = posts.Experiences
    // console.log(experiences);
    const ex = experiences.map((ex, i) => {
        return (
            <>
                <p>{ex.companyName}</p>
                <img src={ex.logo} alt="" width={100} height={100}/>
                {ex.roles.map((role) => {
                    return (
                        <>
                            <p>{role.title}</p>
                            <p>{role.startDate} - {role.endDate}, {role.location}</p>
                            <p>{role.description}</p>
                        </>
                    )
                })}
            </>
        )
    })
  return (
    <div>{ex}</div>
  )
}

export default Experiences