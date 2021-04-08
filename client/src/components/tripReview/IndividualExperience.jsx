import React from 'react';
import styled from 'styled-components';
import SubContainer from '../sharedStyles/subContainer'

class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: ['https://image.cnbcfm.com/api/v1/image/106246652-1573788271264gettyimages-1051651510.jpeg?v=1573788570', 'https://expertvagabond.com/wp-content/uploads/antarctica-ice-arch.jpg', 'https://www.telegraph.co.uk/content/dam/Travel/2018/September/El-Yunque-morning-mist-iStock-535499464.jpg', 'https://travel.mqcdn.com/mapquest/travel/wp-content/uploads/2020/10/Dettifoss-Iceland-791x480.jpg', 'https://cdn.mos.cms.futurecdn.net/deaceNXy23NF8VsCrwZPgn.jpg', 'https://www.aonl.org/sites/default/files/2018-11/hrsa-rural-grant.jpg']
    }
  }

  render () {
    return (

      <SubContainer
        className="card"
        style={{
          height: "300px",
          boxShadow: "none",
        }}>
      <ImageContainer>
      <img
            className="default-image"
            src={this.state.arr[0]}
          />
    </ImageContainer>
    <DetailsContainer>
      <p>{this.props.experience.name}</p>
      <p>{`$${this.props.experience.price} / night`}</p>
    </DetailsContainer>
    </SubContainer>

  )
  }

}

export default Experience;


const SectionTitle = styled.div`
  margin-left: 23.828px;
`;

const ImageContainer = styled.div`
  .default-image{
    align-items: center;
    object-fit: cover;
    border-radius: 8px;
    // border: 2px solid black;
    width: 360px;
    height: 300px;
    box-shadow: 0 10px 10px -5px #cccc;
    margin-right: 40px;
  }
`;

const DetailsContainer = styled.div`
 display: flex;
 width: 70%;
 height: 300px;
 background: white;
 border-radius: 8px;
 flex-direction: column;
 padding-left: 15px;
 box-shadow: 0 10px 10px -5px #cccc;
 align-items: center;
 justify-content: center;
`;
