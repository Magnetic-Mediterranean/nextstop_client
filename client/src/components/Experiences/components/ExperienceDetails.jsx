import React from 'react';
import styled from 'styled-components';

const ExperienceDetails = ({ experience }) => {
  return (
    <DetailsContainer>
      <p>{experience.name}</p>
      {experience.shortDescription.length > 400 ? <p>{`${experience.shortDescription.slice(0,400)}...`}</p> : <p>{experience.shortDescription}</p>}
      <p>{`$${Math.floor(experience.price.amount)} / night`}</p>
    </DetailsContainer>
  )
}

export default ExperienceDetails;

const DetailsContainer = styled.div`
  display: flex;
  width: 70%;
  height: 300px;
  background: white;
  border-radius: 8px;
  flex-direction: column;
  padding-left: 15px;
  box-shadow: 0 10px 10px -5px #cccc;
  align-items: center;
  justify-content: center;
`;
