import React from 'react';
import styled from 'styled-components';

class BillingInfo extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      years: [],
    }
    this.determineDates = this.determineDates.bind(this);
  }

  componentDidMount() {
    this.determineDates();
  }

  determineDates () {
    var currentYear = new Date().getFullYear();
    var years = ['Year'];
    var endYear = 2035;
      while ( currentYear <= endYear ) {
          years.push(currentYear);
          currentYear++;
      }


    this.setState({
      years: years,
    })
  }

  render() {
    const { years } = this.state;
    const months = ["Month","January","February","March","April","May","June","July", "August","September","October","November","December"];

    return (
      <>
        <Section>
          <SectionTitle>Payment Details</SectionTitle>
          <Form>
            <TextFields>
              <Label> Name on Card* </Label>
              <Input />
            </TextFields>
            <TextFields>
              <Label> Card Number* </Label>
              <Input />
            </TextFields>
            <Label>Expiration Date* </Label>
          <div style={{
            marginLeft: "30px",
            marginTop: "2px",
            marginBottom: "20px"}}>
            <DropDown name="Month">
              {months.map((month) => <option value={`${month}`}>{month}</option>
              )}
            </DropDown>
            <DropDown name="Year">
              {years.map((year) => <option value={`${year}`}>{year}</option>
              )}
            </DropDown>
          </div>
          <TextFields>
              <Label> CVV* </Label>
              <Input style={{width: "65px"}} />
            </TextFields>
          </Form>
        </Section>

      </>
    )
  }
}

export default BillingInfo;

const DropDown = styled.select`
  height: 30px;
  width: 100px;
  background: #E4E5DF;
  border: transparent;
  border-radius: 8px;
  margin-right: 8px;
`;

const SectionTitle = styled.div`
  margin-left: 15px;
  padding-top: 10px;
  font-size: 17px;
`;

const Section = styled.div`
  width: 95%;
  height: 330px;
  margin: 10px auto;
  background: white;
  border-radius: 8px;
`;

const Form = styled.form`
  margin: 5px;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
`;

const TextFields = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin: 3px 30px 20px;
  line-height: 30px;
  width: 230px;
  background: #E4E5DF;
  border: transparent;
  border-radius: 8px;
`;

const Label = styled.label`
  margin-left: 30px;
  font-size: 15px;
`;