import React from 'react';
import styled from 'styled-components';

class Payment extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
    this.NameOnChange = this.NameOnChange.bind(this);
  }
  NameOnChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }
  render() {
    return(
      <PaymentContainer>
        <WhosPaying>How would you like to pay?</WhosPaying>
        <FML>
          <FN>Name on Card*</FN>
        </FML>
        <FMLInput>
          <FMLBar style={
            {
              position: 'relative',
              left: '10%',
            }
          }></FMLBar>
        </FMLInput>
        <FML>
          <FN>Debit/Credit card number*</FN>
        </FML>
        <FMLInput>
          <FMLBar style={
            {
              position: 'relative',
              left: '10%',
            }
          }></FMLBar>
        </FMLInput>
        <FML>
          <FN>Expiration date*</FN>
        </FML>
        <FMLInput id='Expire'>
          <FMLBar placeholder='Month' style={
              {
                position: 'relative',
                left: '10%',
              }
            } name='Month' value={this.state.Month} onChange={this.NameOnChange}required></FMLBar>
          <FMLBar placeholder='Year' style={
            {
              position: 'relative',
              left: '11%',
            }
          } name='Year' value={this.state.Year} onChange={this.NameOnChange}required></FMLBar>
        </FMLInput>
        <FML>
          <FN>Security Code*</FN>
        </FML>
        <FMLInput>
          <FMLBar style={
            {
              position: 'relative',
              left: '10%',
              width: '5%'
            }
          }></FMLBar>
        </FMLInput>
      </PaymentContainer>
    )
  }
}
export default Payment;

const PaymentContainer = styled.div `
  display: flex;
  flex-direction: column;
  min-height: 45%;
  border-bottom: 1px solid black;
  width: 90%;
  position: relative;
  left: 5%;
  overflow-x: hidden;
  overflow-y: scroll;
  padding-bottom: 50px;

`
const WhosPaying = styled.div `
  width: 80%;
  display: flex;
  font-size: 25px;
  margin-top: 30px;
  position: relative;
  left: 10%;
`
const FML = styled.div `
  width: 100%;
  display: flex;
  margin-top: 30px;
`
const FN = styled.div `
  font-size: 17px;
  left: 10%;
  position: relative;
  width: 100%;
`

const FMLInput = styled.div `
  width: 100%;
  display: flex;
`

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