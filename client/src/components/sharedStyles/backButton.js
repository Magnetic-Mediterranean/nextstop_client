import styled from 'styled-components';

const BackButton = styled.button `
  background-color: white;
  font-size: 15px;
  border-radius: 8px;
  border: solid #cccc;
  padding: 0;
  width: 100px;
  height: 50px;
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

 export default BackButton;
