import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import DealData from './FeatureDealData';
import FeatureDeal from './FeatureDeal';

const LandingPage = ({ incrementDisplayPage }) => {

  const handleOnSubmit = () => {
    incrementDisplayPage();
    axios.get('/flights')
    .then((data) => console.log(data.data))
    .catch((err) => console.log(err));
  }

  return (
    <div>
      <CatchPhrase>Go Anywhere</CatchPhrase>
      <DealContainer>
        {DealData.map((deal) => <FeatureDeal data={deal} />)}
      </DealContainer>
      {/* <button onClick={handleOnSubmit}>Search</button> */}
      {/* <button onClick={incrementDisplayPage}>Click Me</button> */}
    </div>
  )
}

export default LandingPage;

const DealContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const CatchPhrase = styled.h2`
  font-weight: bold;
  letter-spacing: 3px;
  text-align: center;
`;