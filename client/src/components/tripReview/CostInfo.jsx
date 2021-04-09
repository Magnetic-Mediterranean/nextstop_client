import React from 'react';
import styled from 'styled-components';
import SubContainer from '../sharedStyles/subContainer'

const CostInfo = (props) => {
  let totalExperienceCost = 0;
  props.experiences.forEach((experience) => {
    totalExperienceCost += Number(experience.price.amount);
  });
  const flightsCost = Number(props.departingFlight.price) + Number(props.returningFlight.price);
  const hotelCost = (Number(props.hotel.original_price) * Number(props.numberOfNights))

  const totalCost = Number(props.departingFlight.price) + Number(props.returningFlight.price) + (Number(props.hotel.original_price) * Number(props.numberOfNights)) + Number(totalExperienceCost);
  console.log('totalCost', totalCost);
  const tax = (totalCost * .20).toFixed(2);
  const tot = Number(totalCost) + Number(tax);
  window.localStorage.setItem('total', tot);
  const total = (Number(totalCost) + Number(tax)).toFixed(2);

  const costObj = {
    flights: `$${flightsCost}`,
    hotel: `$${hotelCost}`,
    experiences: `$${totalExperienceCost}`,
    taxes: `$${tax}`,
    total: `$${total}`,
  }

  window.localStorage.setItem('costDetails', JSON.stringify(costObj));

  return (
    <CostInfoContainer>
      <SectionTitle> Cost Breakdown: </SectionTitle>
      <SubContainer style={{
        flexDirection: "column",
        height: "auto",
        justifyContent: "center",
      }}>
        <SubDiv style={{
          marginTop: "15px"
        }}>
          <NameOfCost>
            {`Departure Flight (${props.departingFlight.airline})`}
          </NameOfCost>
          <CostAmount>
            ${props.departingFlight.price}
          </CostAmount>
        </SubDiv>
        <SubDiv>
          <NameOfCost>
            {`Return Flight (${props.returningFlight.airline})`}
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

        {props.experiences.map((experience) => {
          return         <SubDiv>
          <NameOfCost>
            {experience.name}
          </NameOfCost>
          <CostAmount>
            ${Number(experience.price.amount).toFixed(0)}
          </CostAmount>
        </SubDiv>
        })}
        <SubDiv>
          <NameOfCost>
            Taxes &#38; Fees
          </NameOfCost>
          <CostAmount>
            ${tax}
          </CostAmount>
        </SubDiv>
        <SubDiv style ={{
          borderTop: "1px solid black",
          padding: "10px 0px"
        }}>
          <NameOfCost style={{
            fontWeight: "bold",
            fontSize: "20px",
          }}>
            Total
          </NameOfCost>
          <CostAmount style={{
            fontWeight: "bold",
            fontSize: "20px",
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
  margin: 40px 0px;
`;

const SectionTitle = styled.div`
  margin-left: 10px;
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