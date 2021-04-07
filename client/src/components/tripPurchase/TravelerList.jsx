import React from 'react';
import styled from 'styled-components';
import TravelerInfo from './TravelerInfo';

const TravelerList = (props) => {
  const { travellers } = props;
  return (
    <TravelerListContainer>
      {travellers.map((traveler) =>
        <TravelerInfo
          travelerNumber={traveler}
          compileTravelData={props.compileTravelData}
          key={traveler}
        />)}
    </TravelerListContainer>
  )
}

export default TravelerList;

const TravelerListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
