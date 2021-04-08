import styled from 'styled-components';

const BackButton = styled.button `
  padding: 20px;
  background-color: white;
  border-radius: 8px;
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

 export default BackButton;
