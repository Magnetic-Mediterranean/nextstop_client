import React from 'react';
import styled from 'styled-components';

class Images extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      arr: ['https://image.cnbcfm.com/api/v1/image/106246652-1573788271264gettyimages-1051651510.jpeg?v=1573788570', 'https://expertvagabond.com/wp-content/uploads/antarctica-ice-arch.jpg', 'https://www.telegraph.co.uk/content/dam/Travel/2018/September/El-Yunque-morning-mist-iStock-535499464.jpg', 'https://travel.mqcdn.com/mapquest/travel/wp-content/uploads/2020/10/Dettifoss-Iceland-791x480.jpg', 'https://cdn.mos.cms.futurecdn.net/deaceNXy23NF8VsCrwZPgn.jpg', 'https://www.aonl.org/sites/default/files/2018-11/hrsa-rural-grant.jpg']
    }
  }

  render() {
    return(
      <Container>
        <TripCheckout>
          <BoxRow>
            <Smallbox src={this.state.arr[0]}></Smallbox>
          </BoxRow>
          <LargeBox>
            <Text>Experience Info</Text>
            <Text style={{position: 'relative', left: '15%'}}>Price</Text>
          </LargeBox>
        </TripCheckout>
        <TripCheckout>
          <BoxRow>
            <Smallbox src={this.state.arr[1]}></Smallbox>
          </BoxRow>
          <LargeBox>
            <Text>Experience Info</Text>
            <Text style={{position: 'relative', left: '15%'}}>Price</Text>
          </LargeBox>
        </TripCheckout>
        <TripCheckout>
          <BoxRow>
            <Smallbox src={this.state.arr[2]}></Smallbox>
          </BoxRow>
          <LargeBox>
            <Text>Experience Info</Text>
            <Text style={{position: 'relative', left: '15%'}}>Price</Text>
          </LargeBox>
        </TripCheckout>
        <TripCheckout>
          <BoxRow>
            <Smallbox src={this.state.arr[3]}></Smallbox>
          </BoxRow>
          <LargeBox>
            <Text>Experience Info</Text>
            <Text style={{position: 'relative', left: '15%'}}>Price</Text>
          </LargeBox>
        </TripCheckout>
        <TripCheckout>
          <BoxRow>
            <Smallbox src={this.state.arr[4]}></Smallbox>
          </BoxRow>
          <LargeBox>
            <Text>Experience Info</Text>
            <Text style={{position: 'relative', left: '15%'}}>Price</Text>
          </LargeBox>
        </TripCheckout>
        <TripCheckout>
          <BoxRow>
            <Smallbox src={this.state.arr[5]}></Smallbox>
          </BoxRow>
          <LargeBox>
            <Text>Experience Info</Text>
            <Text style={{position: 'relative', left: '15%'}}>Price</Text>
          </LargeBox>
        </TripCheckout>


      </Container>
    )
  }
}

export default Images;
const Container = styled.div `
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow: scroll;
  overflow-behavior: smooth;
`
const TripCheckout = styled.div `
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  overflow-behavior: smooth;
`
const Smallbox = styled.img `
  width: 100%;
  height: 300px;
  border-radius: 8px;
  box-shadow: 0 10px 10px -5px #cccc;
  position: relative;
  object-fit: cover;
`

const BoxRow = styled.div `
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 20%;
  margin-top: 30px;
  position: relative;
  left: 10%;
  overflow-behavior: smooth;
`

const LargeBox = styled.div `
  display: flex;
  height: 260px;
  width: 50%;
  position: relative;
  margin-top: 30px;
  border-radius: 8px;
  left: 15%;
  background-color: #cccc;
  box-shadow: 0 10px 10px -5px #cccc;
  padding: 20px;
  overflow: scroll;
`
const Text = styled.div `
  width: 100%;
`