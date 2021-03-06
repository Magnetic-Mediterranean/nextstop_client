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
      <Navbar id='NavBar'>
        <Icon onClick={this.props.goback} >NextStop</Icon>
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
  width: 100%;
  height: 80px;
  position: sticky;
  top: 0px;
  z-index: 2;
  box-shadow: 0 10px 10px -5px #cccc;

`;

const Icon = styled.div`
  bwidth: 100px;
	height: 50px;
  border: solid #cccc;
  display: flex;
  text-align:center;
  background-color: #FFE66D;
  margin-top: 5px;
  margin-left: 30px;
  border-radius: 15px;
  align-items: center;
  padding: 8px;
  &:hover {
    transform: scale(1.1);
  }
  transition: 0.3s ease-in;
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