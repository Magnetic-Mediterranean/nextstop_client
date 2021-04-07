import React from 'react';
import styled from 'styled-components';

const FeatureDeal = ({ data }) => {

  return (
    <div>
      <Img src={data.img} alt={`${data.arrival} attraction picture`} />
      <P>{data.departure} - {data.arrival}</P>
      <P>${data.price}</P>
      { !data.numberOfStops && (
        <P>NON-STOP</P>
      )}
    </div>
  )
}

export default FeatureDeal;

const P = styled.p`
  font-size: 1em;
  text-align: center;
`;

const Img = styled.img`
  width: 300px;
  height: 250px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 10px 10px -5px #cccc;
`;




