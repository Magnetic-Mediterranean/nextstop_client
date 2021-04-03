import React from 'react';
import styled from 'styled-components';
import DealData from './FeatureDealData';
import FeatureDeal from './FeatureDeal';

const LandingPage = ({incrementDisplayPage}) => {
  return (
    <div>
      <h3>Go Anywhere</h3>
      <DealContainer>
      {DealData.map((deal) => <FeatureDeal data={deal}/>)}
      </DealContainer>
    <button onClick={incrementDisplayPage}>Click Me</button>
    </div>
  )
}

export default LandingPage;

const DealContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;