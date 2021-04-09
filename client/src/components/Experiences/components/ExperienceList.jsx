import React from 'react'
import Experience from './Experience.jsx'
import styled from 'styled-components';


const ExperienceList = ({ experiences, handleSelectedExperience , selectedExperienceIds}) => {
  return (
    <Body>
      <ExperienceInfoContainer>
        {experiences.map((experience, index) => {
          const isSelected = selectedExperienceIds.has(experience.id)
            return(
              <Experience
              experience={experience}
              selected={isSelected}
              handleSelectedExperience={handleSelectedExperience} key={`experience ${index}`} />
            )
          })}
      </ExperienceInfoContainer>
      <Footer></Footer>
    </Body>
  )
}

export default ExperienceList;

const ExperienceInfoContainer = styled.div`
  width: 100%;
  margin: 40px 0px;
`;

const Body = styled.div`
  width: 90%;
  height: 100%;
`;

const Footer = styled.div`
  height: 30px;
`;