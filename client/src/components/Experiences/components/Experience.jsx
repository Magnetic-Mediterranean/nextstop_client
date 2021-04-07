import React from 'react';
import styled from 'styled-components';
import ExperienceAssets from './ExperienceAssets.jsx'
import ExperienceDetails from './ExperienceDetails.jsx'
// import SubContainer from '../../sharedStyles/subContainer.js'

const Experience = ({ experience , selected, handleSelectedExperience}) => {
  console.log('selected', selected)
  return (
    <SubContainer className="card">
      {selected ? <CheckedCircle onClick={() => handleSelectedExperience(experience.id)}></CheckedCircle> : <Circle onClick={() => handleSelectedExperience(experience.id)}></Circle>}
      <ExperienceAssets image={experience.picture} name={experience.name} />
      <ExperienceDetails experience={experience} />
    </SubContainer>
  )
}

export default Experience;

const SubContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 95%;
    height: 300px;
    margin: 10px auto;

`;

const Circle = styled.span`
height: 25px;
min-height: 25px;
width: 25px;
min-width: 25px;
background-color: #CDCDCD;
border-radius: 50%;
margin: 5px;
`;

const CheckedCircle = styled.span`
height: 25px;
min-height: 25px;
width: 25px;
min-width: 25px;
background-color: #4ECDC4;
border-radius: 50%;
margin: 5px;
`;