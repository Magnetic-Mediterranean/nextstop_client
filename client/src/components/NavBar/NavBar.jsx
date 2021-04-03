import React from 'react';
import styled from 'styled-components';
class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return(
      <Navbar>
        <Icon>NextStop</Icon>
      </Navbar>

    )
  }
}
export default NavBar;

const Navbar = styled.div `
  display: flex;
  flex-direction: row;
  background-color: #4ECDC4;
  width: 102%;
  height: 100px;
  margin-left: -8px;
  margin-top: -8px;
  position: sticky;
  top: 0px;
  box-shadow: 0 10px 10px -5px #cccc;
`;

const Icon = styled.div`
  border-radius: 50%;
  background-color: #FFE66D;
  text-align: center;
  height: 90px;
  width: 90px;
  line-height: 90px;
`;