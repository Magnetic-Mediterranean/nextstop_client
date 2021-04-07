import React from 'react';
import styled from 'styled-components';
import Experience from './IndividualExperience';

const ExperiencesInfo = (props) => {

  return (
    <ExperiencesContainer>
      <SectionTitle>Experiences:</SectionTitle>

      <Experience />
    </ExperiencesContainer>
  )
}

export default ExperiencesInfo;

const ExperiencesContainer = styled.div`
  width: 100%;
`;

const SectionTitle = styled.div`
  margin-left: 23.828px;
`;

