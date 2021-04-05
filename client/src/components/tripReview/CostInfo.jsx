import React from 'react';
import styled from 'styled-components';

const CostInfo = (props) => {

  return (
    <CostInfoContainer>
      <div> Cost Breakdown: </div>
      <CostDetails>Hotel Info</CostDetails>
    </CostInfoContainer>
  )
}

export default CostInfo;

const CostInfoContainer = styled.div`
  width: 100%;
`;

const CostDetails = styled.div`
  width: 95%;
  height: 100px;
  margin: 10px auto;
  background: white;
  border-radius: 3px;
`;