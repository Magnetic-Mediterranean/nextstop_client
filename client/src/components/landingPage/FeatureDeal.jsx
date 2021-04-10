import React from "react";
import styled from "styled-components";

const FeatureDeal = ({ data }) => {
  return (
    <div>
      <Img src={data.img} alt={`${data.arrival} attraction picture`} />
      <FlexContainer>
        <Flight>
          {data.departure} to {data.arrival}
        </Flight>
        <P>${data.price}</P>
        {!data.numberOfStops && <NonStop>NON-STOP</NonStop>}
      </FlexContainer>
    </div>
  );
};

export default FeatureDeal;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Flight = styled.p`
  font-size: 1em;
  margin: 5px;
  font-weight: 500;
`;

const P = styled.p`
  font-size: 1em;
  margin: 5px;
  font-weight: 100;
`;

const NonStop = styled.p`
  color: #4ecdc4;
  margin: 5px;
  font-weigth: 100;
`;

const Img = styled.img`
  width: 275px;
  height: 250px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 10px 10px -5px #cccc;
  &:hover {
    transform: scale(1.01);
    transition: 0.5s;
  }
`;
