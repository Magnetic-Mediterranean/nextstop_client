import React from 'react'
import Experience from './Experience.jsx'

const ExperienceList = ({ experiences, handleSelectedExperience , selectedExperienceId}) => {

  return (
    <div>
      {experiences.map((experience, index) => {
        const isSelected = experience.id === selectedExperienceId
          return(
            <Experience experience={experience}
            selected={isSelected}
            handleSelectedExperience={handleSelectedExperience} key={`experience ${index}`} />
          )
        })}
    </div>
  )
}

export default ExperienceList;