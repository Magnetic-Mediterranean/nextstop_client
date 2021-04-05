import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import styled from 'styled-components';



class SmallSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [{state: 'CA'}, {state: 'NV'}],
      from: '',
      to: '',
      date: '',
    }
    this.onChangeFrom = this.onChangeFrom.bind(this);
    this.onChangeTo = this.onChangeTo.bind(this);
    this.dateChange = this.dateChange.bind(this);
  }
  onChangeFrom(event, values) {
    this.setState({from: values})
  }
  onChangeTo(event, values) {
    this.setState({to: values})
  }
  dateChange(event) {
    this.setState({date: event.target.value});
  }
  render() {
    return (
      <SmallPhotoContainer>
        <SearchBar>
          <Autocomplete
          onChange={this.onChangeFrom}
          id="DestinationFrom"
          options={this.state.options}
          getOptionLabel={(option) => option.state}
          style={{
            backgroundColor: 'white',
            width: 300,
            marginLeft: '90px',
            borderRadius: '8px',
          }}
          renderInput={(params) => <TextField {...params} label="Destination From" variant="outlined" />}
          />
           <Autocomplete
           name='to'
          onChange={this.onChangeTo}
          id="DestinationTo"
          options={this.state.options}
          getOptionLabel={(option) => option.state}

          style={{
            backgroundColor: 'white',
            width: 300,
            marginLeft: '30px',
            borderRadius: '8px',
          }}
          renderInput={(params) => <TextField {...params} label="Destination To" variant="outlined" />}
          />
        <Calendar type='date' onChange={this.dateChange} style={
          {
            border: '1.5px solid #cccc',
            textAlign: 'center',
          }
          }/>
        </SearchBar>
      </SmallPhotoContainer>
    )
  }
}

export default SmallSearch;

const SmallPhotoContainer = styled.div `
  display: flex;
  flex-direction: row;
  width: 102%;
  height: 450px;
  margin-left: -8px;
  align-items: center;
  justify-content: center;
  background-image: url('https://www.jacadatravel.com/wp-content/uploads/fly-images/247256/costa-rica-cloud-forest-1-1600x700-cc.jpg');
  background-position: center;
  background-repeat: no-repeat;
`;

const SearchBar = styled.div `
  display: flex;
  flex-direction: row;
  background-color: white;
  width: 60%;
  height: 80px;
  margin-left: -8px;
  box-shadow: 0 10px 10px -5px #cccc;
  align-items: center;
  border-radius: 8px;
`;

const Calendar = styled.input `
  display: flex;
  margin-left: 40px;
  width: 300px;
  height: 54px;
  border-radius: 5px;
`;