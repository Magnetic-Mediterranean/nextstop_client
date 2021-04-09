import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import DealData from './FeatureDealData';
import FeatureDeal from './FeatureDeal';

const LandingPage = ({ incrementDisplayPage }) => {

  const handleOnSubmit = () => {
    axios.get('/flights')
      .then((data) => console.log(data.data))
      .catch((err) => console.log(err));
  }

  return (
    <PageContainer>
      <Phrases>
        <CatchPhrase>Explore New Places</CatchPhrase>
        <Description>Pack your bags — it's time for an adventure</Description>
      </Phrases>
      <DealContainer>
        {DealData.map((deal) => <FeatureDeal data={deal}
          key={deal.departure + deal.arrival + deal.price}
        />)}
      </DealContainer>
      <br />
    </PageContainer>
  )
}

export default LandingPage;

const PageContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  margin-left: 8.25%;
  margin-right: 8.25%;
`;

const DealContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CatchPhrase = styled.h2`
  font-weight: 700;
  font-size: 26px;
  margin: 0;
`;

const Description = styled.p`
  font-weight: 300;
  font-size: 20px;
  margin: 0;
`;

const Phrases = styled.div`
  margin: 2% 0 2% 0;
`;