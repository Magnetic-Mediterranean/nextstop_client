import styled from 'styled-components';

const CheckoutButton = styled.button `
  padding: 20px;
  background-color: #4ECDC4;
  border-radius: 8px;
  font-size: 15px;
  border: solid #cccc;
  width: 100px;
  height: 30px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: #FFE66D;
  }
  transition: 0.2s  ease-in;
`

export default CheckoutButton;
