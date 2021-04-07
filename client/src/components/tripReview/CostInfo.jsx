import React from 'react';
import styled from 'styled-components';
import SubContainer from '../sharedStyles/subContainer'

const CostInfo = (props) => {

  return (
    <CostInfoContainer>
      <SectionTitle> Cost Breakdown: </SectionTitle>
      <SubContainer></SubContainer>
    </CostInfoContainer>
  )
}

export default CostInfo;

const CostInfoContainer = styled.div`
  width: 100%;
`;

const SectionTitle = styled.div`
  margin-left: 23.828px;
`;