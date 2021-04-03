import React from 'react';
import styled from 'styled-components';

class TravelerInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render () {
    return (
      <TravelerDetails>
        <Form>
          <TextFields>
            <Label>First Name*</Label>
            <Input
              type="text"
            />
          </TextFields>

          <TextFields>
            <Label>Middle Name*</Label>
            <Input
              type="text"
            />
          </TextFields>
          <TextFields>
            <Label>Last Name*</Label>
            <Input
              type="text"
            />
          </TextFields>
        </Form>
        <Form>

          <TextFields>
            <Label>Phone Number*</Label>
            <Input
              type="text"
            />
          </TextFields>
        </Form>
        <Form style={{
          margin: "10px",
          flexDirection: "column",
        }}>
          <Label>Gender* </Label>
          <div style={{ marginLeft: "30px" }}>
            <GenderOptions>
              <input
                type="radio"
                value="Female"
                name="gender"
              />
              <label for="Female">Female</label>
            </GenderOptions>
            <GenderOptions>
              <input
                type="radio"
                value="Male"
                name="gender"
              />
              <label for="Male">Male</label>
            </GenderOptions>
            <GenderOptions>
              <input
                type="radio"
                value="Non-Binary"
                name="gender"
              />
              <label for="Non-Binary">Non-Binary</label>
            </GenderOptions>
          </div>
        </Form>
        <Form>

        </Form>
      </TravelerDetails>

    )
  }
}

export default TravelerInfo;


const TravelerDetails = styled.div`
  width: 95%;
  height: 400px;
  margin: 10px auto;
  background: white;
  border-radius: 3px;
`;

const GenderOptions = styled.span`
  margin: 5px;
`;

const Form = styled.form`
  margin: 5px;
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  margin: 3px 30px 20px;
  line-height: 30px;
  width: 200px;
  background: #E4E5DF;
  border: transparent;
  border-radius: 8px;
`;

const Label = styled.label`
  margin-left: 30px;
  font-size: 15px;
`;

const TextFields = styled.div`
  display: flex;
  flex-direction: column;
`;