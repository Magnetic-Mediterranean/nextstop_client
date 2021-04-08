import React from 'react';
import styled from 'styled-components';

const FeatureDeal = ({ data }) => {

  return (
    <div>
      <Img src={data.img} alt={`${data.arrival} attraction picture`} />
      <FlexContainer>
        <P>{data.departure} - {data.arrival}</P>
        <P>${data.price}</P>
        {!data.numberOfStops && (
          <NonStop>NON-STOP</NonStop>
        )}
      </FlexContainer>
    </div>
  )
}

export default FeatureDeal;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;


const P = styled.p`
  font-size: 1em;
  text-align: center;
  margin: 5px;
`;

const NonStop = styled.p`
  color: #4ECDC4;
  margin: 5px;
  font-weigth: bold;
`;

const Img = styled.img`
  width: 300px;
  height: 250px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 10px 10px -5px #cccc;
`;




