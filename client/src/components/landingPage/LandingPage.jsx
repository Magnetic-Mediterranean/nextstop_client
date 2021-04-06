import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import DealData from './FeatureDealData';
import FeatureDeal from './FeatureDeal';

const LandingPage = ({ incrementDisplayPage }) => {

  const handleOnSubmit = () => {
    axios.get('/flights')
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
  }

  return (
    <div>
      <h3>Go Anywhere</h3>
      <DealContainer>
        {DealData.map((deal) => <FeatureDeal key={deal.airline + deal.price} data={deal} />)}
      </DealContainer>
      <button onClick={handleOnSubmit}>Search</button>
      <button onClick={incrementDisplayPage}>Click Me</button>
    </div>
  )
}

export default LandingPage;

const DealContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;