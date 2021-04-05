import React from 'react';
import styled from 'styled-components';

class TravelerInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      middleName: '',
      lastName: '',
      phoneNumber: '',
      gender: '',
      dateOfBirth: '',
      days: [],
      years: [],
    }
    this.determineDates = this.determineDates.bind(this);
  }

  componentDidMount () {
    this.determineDates();
  }

  determineDates () {
    var currentYear = new Date().getFullYear();
    var years = ['Year'];
    var startYear = 1940;
      while ( startYear <= currentYear ) {
          years.push(startYear);
          startYear++;
      }

      var dayList = ['Day'];
      var start = 1;
      while (start <= 31) {
        dayList.push(start);
        start++
      }

    this.setState({
      days: dayList,
      years: years,
    })
  }

  render () {
    const months = ["Month","January","February","March","April","May","June","July", "August","September","October","November","December"];
    const {days, years} = this.state;

    return (
      <TravelerDetails>
        <Form style={{marginTop: "25px"}}>
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
          margin: "3px 10px 20px",
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
        <Form style={{
          flexDirection: "column",
          margin: "3px 10px 20px",
          marginBottom: "15px"}}>
          <Label>Date of Birth* </Label>
          <div style={{
            marginLeft: "40px",
            marginTop: "2px"}}>
            <DropDown name="Month">
              {months.map((month) => <option value={`${month}`}>{month}</option>
              )}
            </DropDown>
            <DropDown name="Day">
              {days.map((day) => <option value={`${day}`}>{day}</option>
              )}
            </DropDown>
            <DropDown name="Year">
              {years.map((year) => <option value={`${year}`}>{year}</option>
              )}
            </DropDown>
          </div>
        </Form>
      </TravelerDetails>

    )
  }
}

export default TravelerInfo;


const TravelerDetails = styled.div`
  width: 95%;
  height: 310px;
  margin: 10px auto;
  background: white;
  border-radius: 3px;
`;

const GenderOptions = styled.span`
  margin: 5px;
`;

const DropDown = styled.select`
  height: 30px;
  width: 100px;
  background: #E4E5DF;
  border: transparent;
  border-radius: 8px;
  margin-right: 8px;
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