import React from 'react';
import styled from 'styled-components';
import SubContainer from '../sharedStyles/subContainer'

const CostInfo = (props) => {

  return (
    <CostInfoContainer>
      <div> Cost Breakdown: </div>
      <SubContainer>Cost Info</SubContainer>
    </CostInfoContainer>
  )
}

export default CostInfo;

const CostInfoContainer = styled.div`
  width: 100%;
`;
