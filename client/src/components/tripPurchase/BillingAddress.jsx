import React from 'react';
import styled from 'styled-components';

class BillingAddress extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (event) {
    this.setState({[event.target.name]: event.target.value}, () => {this.props.compileTravelData(`billingAddress`, this.state);
    });
  }

  render () {
        var country_list = ["Select", "United States of America", "Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
        let states = [ "Select", "AK - Alaska",
        "AL - Alabama",
        "AR - Arkansas",
        "AS - American Samoa",
        "AZ - Arizona",
        "CA - California",
        "CO - Colorado",
        "CT - Connecticut",
        "DC - District of Columbia",
        "DE - Delaware",
        "FL - Florida",
        "GA - Georgia",
        "GU - Guam",
        "HI - Hawaii",
        "IA - Iowa",
        "ID - Idaho",
        "IL - Illinois",
        "IN - Indiana",
        "KS - Kansas",
        "KY - Kentucky",
        "LA - Louisiana",
        "MA - Massachusetts",
        "MD - Maryland",
        "ME - Maine",
        "MI - Michigan",
        "MN - Minnesota",
        "MO - Missouri",
        "MS - Mississippi",
        "MT - Montana",
        "NC - North Carolina",
        "ND - North Dakota",
        "NE - Nebraska",
        "NH - New Hampshire",
        "NJ - New Jersey",
        "NM - New Mexico",
        "NV - Nevada",
        "NY - New York",
        "OH - Ohio",
        "OK - Oklahoma",
        "OR - Oregon",
        "PA - Pennsylvania",
        "PR - Puerto Rico",
        "RI - Rhode Island",
        "SC - South Carolina",
        "SD - South Dakota",
        "TN - Tennessee",
        "TX - Texas",
        "UT - Utah",
        "VA - Virginia",
        "VI - Virgin Islands",
        "VT - Vermont",
        "WA - Washington",
        "WI - Wisconsin",
        "WV - West Virginia",
        "WY - Wyoming"]
    return (
      <Section style={{
        height: "500px"
      }}>
        <SectionTitle>Billing Address</SectionTitle>
        <Form onChange={this.handleChange}>
        <Label>Country/Territory* </Label>
        <div style={{
          marginLeft: "30px",
          marginTop: "2px",
          marginBottom: "20px"}}>
          <DropDown
              name="country"
              style={{ width: "230px" }}>
              {country_list.map((country, i) => <option value={`${country}`} key={i}>{country}</option>
              )}
          </DropDown>
        </div>
        <TextFields>
            <Label> Billing Address 1* </Label>
            <Input
              name="billingAddress1" />
          </TextFields>
          <TextFields>
            <Label> Billing Address 2 </Label>
            <Input
              name="billingAddress2"
            />
          </TextFields>
          <TextFields>
            <Label> City* </Label>
            <Input
              name="city"
            />
          </TextFields>
          <Label>State* </Label>
        <div style={{
          marginLeft: "30px",
          marginTop: "2px",
          marginBottom: "20px"}}>
          <DropDown name="state"
          style={{width: "230px"}}>
            {states.map((state, i) => <option value={`${state}`} key={i}>{state}</option>
            )}
          </DropDown>
        </div>
        <TextFields>
            <Label> Zip Code* </Label>
            <Input
              name="zipcode"
            />
          </TextFields>
        </Form>
      </Section>
    )
  }
}

export default BillingAddress;


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
  min-height: 330px;
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