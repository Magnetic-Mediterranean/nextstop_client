import React from 'react'
import Experience from './Experience.jsx'

const ExperienceList = ({ experiences, handleSelectedExperience , selectedExperienceIds}) => {
  return (
    <div>
      {experiences.map((experience, index) => {
        const isSelected = selectedExperienceIds.has(experience.id)
          return(
            <Experience
            experience={experience}
            selected={isSelected}
            handleSelectedExperience={handleSelectedExperience} key={`experience ${index}`} />
          )
        })}
    </div>
  )
}

export default ExperienceList;