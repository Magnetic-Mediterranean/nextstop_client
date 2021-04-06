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
        <Login> Login </Login>
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
  z-index: 2;
  box-shadow: 0 10px 10px -5px #cccc;
`;

const Icon = styled.div`
  border-radius: 50%;
  background-color: #FFE66D;
  text-align: center;
  height: 90px;
  width: 90px;
  line-height: 90px;
  margin-left: 30px;
  margin-top: 2px;
  border: solid #cccc;
`;

const Login = styled.button`
  background-color: white;
  width: 100px;
  height: 50%;
  right: 50px;
  margin-top: 25px;
  border-radius: 8px;
  border: solid #cccc;
  &:focus {
    outline: none;
  }
  position: absolute;
  right: 5%;
  &:hover {
    background-color: #FFE66D;
  }
  transition: 0.2s  ease-in;
`;