import React from 'react';
import styled from 'styled-components';
import SubContainer from '../sharedStyles/subContainer'

const HotelInfo = (props) => {

  return (
    <HotelInfoContainer>
      <SectionTitle> Hotel Details: </SectionTitle>
      <SubContainer>

      </SubContainer>
    </HotelInfoContainer>
  )
}

export default HotelInfo;

const HotelInfoContainer = styled.div`
  width: 100%;
`;

const SectionTitle = styled.div`
  margin-left: 23.828px;
`;