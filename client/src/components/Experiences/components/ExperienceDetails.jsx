import React from 'react';
import styled from 'styled-components';

const ExperienceDetails = ({ experience }) => {
  return (
    <DetailsContainer>
      <p>{experience.name}</p>
      {experience.shortDescription.length > 400 ? <p>{`${experience.shortDescription.slice(0,400)}...`}</p> : <p>{experience.shortDescription}</p>}
      <p>{`$${Math.floor(experience.price.amount)} / person`}</p>
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
  // text-align: "center";
  flex-direction: column;
  padding: 0px 30px 0px 30px;
  box-shadow: 0 10px 10px -5px #cccc;
  // align-items: center;
  justify-content: center;
`;
