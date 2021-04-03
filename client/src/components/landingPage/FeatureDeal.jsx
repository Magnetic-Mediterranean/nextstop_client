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
  color: palevioletred;
  font-size: 1em;
`;

const Img = styled.img`
  width: 300px;
  height: 250px;
  border-radius: 10px;
  object-fit: cover;
`;




