import React from 'react';
import styled from 'styled-components';
import SubContainer from '../sharedStyles/subContainer'

class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

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
            src={this.props.experience.picture}
          />
    </ImageContainer>
    <DetailsContainer>
      <p style={{
        fontSize: "17px",
        fontWeight: "500"
      }}>{this.props.experience.name}</p>
      <p>{this.props.experience.shortDescription}</p>
      <p>{`$${Number(this.props.experience.price.amount).toFixed(0)}`}</p>
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
