import styled from 'styled-components';

const CheckoutButton = styled.button`
 background: #FF6B6B;
 padding: 5px 15px;
 border-radius: 7px;
 margin: 2px;
 border-color: transparent;
 &:hover {
  cursor: pointer;
  background: #FFE66D;
  transition: 0.5s;
  border: 1px #CCCC solid;
 }
`;

export default CheckoutButton;
