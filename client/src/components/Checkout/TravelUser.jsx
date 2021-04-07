import React from 'react';
import styled from 'styled-components';

class TravelUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FirstName: '',
      MiddleName: '',
      LastName: '',
      PhoneNumber: '',
      Gender: '',
      Month: '',
      Day: '',
      Year: ''
    }
    this.NameOnChange = this.NameOnChange.bind(this);
  }
  NameOnChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  render() {
    return(
      <TravelContainer>
        <Title>
          <BackButton>Back</BackButton>
          <Logo> Trip Checkout </Logo>
          <CheckoutButton>Checkout</CheckoutButton>
        </Title>
        <WhosTraveling> Who's Traveling? </WhosTraveling>
        <FML>
          <FN >First Name*</FN>
          <MN >Middle Name*</MN>
          <LN >Last Name*</LN>
        </FML>
        <FMLInput>
          <FMLBar style={
            {
              position: 'relative',
              left: '10%',
            }
          } name='FirstName' value={this.state.FirstName} onChange={this.NameOnChange}required />
          <FMLBar style={
            {
              position: 'relative',
              left: '22%',
            }
          } name='MiddleName' value={this.state.MiddleName} onChange={this.NameOnChange}required />
          <FMLBar style={
            {
              position: 'relative',
              left: '34.25%',
            }
          } name='LastName' value={this.state.LastName} onChange={this.NameOnChange} required />
        </FMLInput>
        <FML id='phoneNumText'>
          <FN style={{width:'300px'}}>Phone Number*</FN>
        </FML>
        <FMLInput id='PhoneNumInput'>
          <FMLBar type='tel' pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" style={
              {
                position: 'relative',
                left: '10%',
              }
            } name='PhoneNumber' value={this.state.PhoneNumber} onChange={this.NameOnChange}required />
        </FMLInput>
        <FML id='GenderText'>
          <FN>Gender*</FN>
        </FML>
        <FMLInput id='GenderPicker' style={{position:'relative', left: '9.5%', marginTop:'15px'}}>
          <input type="radio" name="Gender" value="Male" onChange={this.NameOnChange}/> <label style={{margin:'0px 5px'}}>Male</label>
          <input type="radio" name="Gender" value="Female" onChange={this.NameOnChange}/> <label style={{margin:'0px 5px'}}>Female</label>
        </FMLInput>
        <FML id='DOB'>
          <FN>Date of birth*</FN>
        </FML>
        <FMLInput id='MDY'>
          <FMLBar placeholder='Month' style={
            {
              position: 'relative',
              left: '10%',
            }
          } name='Month' value={this.state.Month} onChange={this.NameOnChange}required></FMLBar>
          <FMLBar placeholder='Day' style={
            {
              position: 'relative',
              left: '11%',
            }
          } name='Day' value={this.state.Day} onChange={this.NameOnChange}required></FMLBar>
          <FMLBar placeholder='Year' style={
            {
              position: 'relative',
              left: '12%',
            }
          } name='Year' value={this.state.Year} onChange={this.NameOnChange}required></FMLBar>
        </FMLInput>
      </TravelContainer>
    )
  }
}

export default TravelUser;
const FMLBar = styled.input `
  width: 15%;
  display: flex;
  border-radius: 8px;
  background-color: #ECECEC;
  height: 30px;
  &:focus {
    outline: none;
  }
  border: 2px solid #cccc;
`
const FMLInput = styled.div `
  width: 100%;
  display: flex;
`
const LN = styled.div `
  font-size: 17px;
  left: 10%;
  position: relative;
  width: 100px;
`
const MN = styled.div `
  font-size: 17px;
  left: 10%;
  position: relative;
  width: 50%;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
`
const FN = styled.div `
  font-size: 17px;
  left: 10%;
  position: relative;
  width: 100px;
`
const FML = styled.div `
  width: 100%;
  display: flex;
  margin-top: 30px;
`

const WhosTraveling = styled.div `
  width: 80%;
  display: flex;
  font-size: 25px;
  margin-top: 30px;
  position: relative;
  left: 10%;
`
const TravelContainer = styled.div `
  display: flex;
  flex-direction: column;
  height: 55%;
  min-height: 55%;
  border-bottom: 1px solid black;
  width: 90%;
  position: relative;
  left: 5%;
  overflow-x: hidden;
  overflow-y: scroll;
  padding-bottom: 50px;
`

const NameInput = styled.div `
  display: flex;
  flex-direction: row;
`

const Title = styled.div `
  display: flex;
  flex-direction: row;
  margin-top: 40px;
`
const Logo = styled.div `
  width: 100%;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-size: 40px;
`
const CheckoutButton = styled.button `
  padding: 20px;
  background-color: #4ECDC4;
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
  position:relative;
  right: 10%;

`
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
  position:relative;
  left: 10%;
`