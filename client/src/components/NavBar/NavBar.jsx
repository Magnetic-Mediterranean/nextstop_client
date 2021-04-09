import React from 'react';
import styled from 'styled-components';
import { useAuth0 } from "@auth0/auth0-react";


const NavBar = () => {
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

    return(
      <Navbar id='NavBar'>
        <Icon>NextStop</Icon>
        { isAuthenticated ? <Login onClick={() => logout()}> Log Out </Login> : <Login onClick={() => loginWithRedirect()}> Login </Login>}

      </Navbar>

    )
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