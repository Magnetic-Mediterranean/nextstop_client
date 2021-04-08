import styled from 'styled-components';

const SubContainer = styled.div`
 display: flex;
 width: 95%;
 height: 100px;
 margin: 10px auto;
 background: white;
 border-radius: 8px;
 box-shadow: 0 10px 10px -5px #cccc;
 &:hover {
  transform: scale(1.02);
}
`;

export default SubContainer;