import React from 'react';
import styled from 'styled-components';
import SubContainer from '../sharedStyles/subContainer'

const CostInfo = (props) => {

  return (
    <CostInfoContainer>
      <SectionTitle> Cost Breakdown: </SectionTitle>
      <SubContainer style={{
        flexDirection: "column",
        height: "300px",
      }}>
        <SubDiv>
          <NameOfCost>
            {props.departingFlight.airline}
          </NameOfCost>
          <CostAmount>
            ${props.departingFlight.price}
          </CostAmount>
        </SubDiv>
        <SubDiv>
          <NameOfCost>
            {props.returningFlight.airline}
          </NameOfCost>
          <CostAmount>
            ${props.returningFlight.price}
          </CostAmount>
        </SubDiv>
        {/* <SubDiv>
          <NameOfCost>
            {props.hotel.name}
          </NameOfCost>
          <CostAmount>
            ${props.hotel.original_price}
          </CostAmount>
        </SubDiv> */}

      </SubContainer>
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

const NameOfCost = styled.div`
  margin-left: 15px;
  flex-grow: 20;
`;

const CostAmount = styled.div`
  margin-left: 75px;
  flex-grow: 1;
  margin-right: 20px;
`;

const SubDiv = styled.div`
  display: flex;
  margin: 10px

`;
