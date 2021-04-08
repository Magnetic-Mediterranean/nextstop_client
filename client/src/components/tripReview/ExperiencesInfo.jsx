import React from 'react';
import styled from 'styled-components';
import Experience from './IndividualExperience';

const ExperiencesInfo = (props) => {

  return (
    <ExperiencesContainer>
      Will map to Experiences Info Here
      <Experience />
    </ExperiencesContainer>
  )
}

export default ExperiencesInfo;

const ExperiencesContainer = styled.div`
  width: 100%;
`;
