import React from 'react';
import styled from 'styled-components';
import TravelerInfo from './TravelerInfo';

const TravelerList = (props) => {

  return (
    <TravelerListContainer>
      <div> Who's traveling?</div>
      <TravelerInfo />
    </TravelerListContainer>
  )
}

export default TravelerList;

const TravelerListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
