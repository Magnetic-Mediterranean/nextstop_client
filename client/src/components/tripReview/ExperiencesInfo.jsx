import React from 'react';
import styled from 'styled-components';
import Experience from './IndividualExperience';

const ExperiencesInfo = ({experiences}) => {

  return (
    <ExperiencesContainer>
      <SectionTitle>Experiences:</SectionTitle>

      {experiences.map((experience, i) =>
        <Experience
          experience={experience}
          key={i}
        />)}
    </ExperiencesContainer>
  )
  }

  export default ExperiencesInfo;

const ExperiencesContainer = styled.div`
width: 100%;
margin: 40px 0px;
`;

const SectionTitle = styled.div`
  margin-left: 23.828px;
  font-size: 20px;
`;