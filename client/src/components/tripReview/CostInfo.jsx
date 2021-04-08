import React from 'react';
import styled from 'styled-components';
import SubContainer from '../sharedStyles/subContainer'

const CostInfo = (props) => {
  const totalCost = Number(props.departingFlight.price) + Number(props.returningFlight.price) + (Number(props.hotel.original_price) * Number(props.numberOfNights)) + Number(props.totalExperienceCost);
  const tax = (totalCost * .20).toFixed(2);
  const total = Number(totalCost) + Number(tax);
  return (
    <CostInfoContainer>
      <SectionTitle> Cost Breakdown: </SectionTitle>
      <SubContainer style={{
        flexDirection: "column",
        height: "300px",
        justifyContent: "center",
      }}>
        <SubDiv style={{
          marginTop: "15px"
        }}>
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
        <SubDiv>
          <NameOfCost>
            {`${props.hotel.name} for ${props.numberOfNights} night(s)`}
          </NameOfCost>
          <CostAmount>
            ${Number(props.hotel.original_price) * Number(props.numberOfNights) }
          </CostAmount>
        </SubDiv>
        <SubDiv>
          <NameOfCost>
            Experiences
          </NameOfCost>
          <CostAmount>
            ${props.totalExperienceCost}
          </CostAmount>
        </SubDiv>
        <SubDiv>
          <NameOfCost>
            Taxes &#38; Fees
          </NameOfCost>
          <CostAmount>
            ${tax}
          </CostAmount>
        </SubDiv>
        <SubDiv>
          <NameOfCost style={{
            fontWeight: "bold",
          }}>
            Total
          </NameOfCost>
          <CostAmount style={{
            fontWeight: "bold",
          }}>
            ${total}
          </CostAmount>
        </SubDiv>
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
  font-size: 20px;
`;

const NameOfCost = styled.div`
  margin-left: 15px;
  flex-grow: 20;
  max-width: 700px;
`;

const CostAmount = styled.div`
  margin-left: 75px;
  flex-grow: 1;
  margin-right: 20px;
  display: flex;
  justify-content: flex-end;
`;

const SubDiv = styled.div`
  display: flex;
  margin: 10px
`;