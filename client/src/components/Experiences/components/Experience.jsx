import React from 'react';
import styled from 'styled-components';
import ExperienceAssets from './ExperienceAssets.jsx'
import ExperienceDetails from './ExperienceDetails.jsx'
// import SubContainer from '../../sharedStyles/subContainer.js'

const Experience = ({ experience , selected, handleSelectedExperience}) => {
  return (
    <SubContainer className="card"
    style={{
      height: "300px",
      boxShadow: "none",
    }}>
      {selected ? <CheckedCircle onClick={() => handleSelectedExperience(experience.id)}></CheckedCircle> : <Circle onClick={() => handleSelectedExperience(experience.id)}></Circle>}
      <ExperienceAssets image={experience.picture} name={experience.name} />
      <ExperienceDetails experience={experience} />
    </SubContainer>
  )
}

export default Experience;

const SubContainer = styled.div`
  display: flex;
  width: 95%;
  height: 100px;
  margin: 10px auto;
  max-width: 1300px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 10px 10px -5px #cccc;
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
  &:hover {
    transform: scale(1.01);
    transition: .5s;
  }
`;

// const SubContainer = styled.div`
//     display: flex;
//     flex-direction: row;
//     justify-content: space-between;
//     width: 95%;
//     height: 300px;
//     margin: 10px auto;
// `;

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