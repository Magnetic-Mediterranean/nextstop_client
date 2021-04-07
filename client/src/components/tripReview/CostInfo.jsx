import React from 'react';
import styled from 'styled-components';

const CostInfo = (props) => {

  return (
    <CostInfoContainer>
      <div> Cost Breakdown: </div>
      <CostDetails>Cost Info</CostDetails>
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
  background: #4ECDC4;
  border-radius: 8px;
`;