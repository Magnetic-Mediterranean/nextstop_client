import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import styled from 'styled-components';
import axios from 'axios';


class SmallSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      SelectedFrom: '',
      SelectedTo: '',
      optionsFrom: [],
      optionsTo: [],
      from: '',
      to: '',
      date: '',
    }
    this.onChangeFrom = this.onChangeFrom.bind(this);
    this.onChangeTo = this.onChangeTo.bind(this);
    this.dateChange = this.dateChange.bind(this);
    this.onChangeInputFrom = this.onChangeInputFrom.bind(this);
    this.onChangeInputTo = this.onChangeInputTo.bind(this);
  }
  onChangeFrom(event, values, inputValue) {
    this.setState({SelectedFrom: values}, () => {
      this.props.setFrom(values);
    })
  }
  onChangeTo(event, values) {
    this.setState({SelectedTo: values}, () => {
      this.props.setTo(values);
    })
  }
  onChangeInputFrom(event, values) {
    this.setState({from: values}, () => {
      if(this.state.from !== '') {
        axios.get(`/search/${this.state.from}`)
          .then((result) => {
            this.setState({optionsFrom: result.data});
          })
          .catch((error) => {
            console.log(error);
          })
      }
    });
  }
  onChangeInputTo(event, values) {
    this.setState({to: values}, () => {
      if(this.state.to !== '') {
        axios.get(`/search/${this.state.to}`)
          .then((result) => {
            this.setState({optionsTo: result.data});
          })
          .catch((error) => {
            console.log(error);
          })
      }
    });
  }
  dateChange(event) {
    this.setState({date: event.target.value});
  }
  render() {
    return (
      <SmallPhotoContainer size={this.props.size ? this.props : undefined}>
        <SearchBar>
          <Autocomplete
          onInputChange={this.onChangeInputFrom}
          onChange={this.onChangeFrom}
          id="DestinationFrom"
          options={this.state.optionsFrom}
          getOptionLabel={(option) => `${option.city + ', ' + option.country}`}
          style={{
            backgroundColor: '#ececec',
            width: '20%',
            borderRadius: '5px',
            position: 'relative',
            left: '5%',
            color: 'black',

          }}
          renderInput={(params) => <TextField {...params} label="From" variant="outlined" />}
          />
           <Autocomplete
            name='to'
            onInputChange={this.onChangeInputTo}
            onChange={this.onChangeTo}
            id="DestinationTo"
            options={this.state.optionsTo}
            getOptionLabel={(option) => `${option.city + ', ' + option.country}`}

          style={{
            backgroundColor: '#ececec',
            width: '20%',
            borderRadius: '5px',
            position: 'relative',
            left: '7.5%',
            color: 'black',
          }}
          renderInput={(params) => <TextField {...params} label="To" variant="outlined" />}
          />
        <Calendar className='Cal' type='date' onChange={this.dateChange} style={
          {
            border: '1.5px solid #cccc',
            textAlign: 'center',
            position: 'relative',
            left: '10%',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            backgroundColor: '#ececec'
          }
          }/>
          <Calendar className='Cal' type='date' onChange={this.dateChange} style={
          {
            border: '1.5px solid #cccc',
            textAlign: 'center',
            position: 'relative',
            left: '12.5%',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            backgroundColor: '#ececec',
          }
          }/>
          <SubmitButton>Find</SubmitButton>
        </SearchBar>
      </SmallPhotoContainer>
    )
  }
}

export default SmallSearch;

const SmallPhotoContainer = styled.div `
  display: flex;
  flex-direction: row;
  width: 100%;
  height: ${props => (props.size ? '60vh' : '250px')};
  align-items: center;
  justify-content: center;
  background-image: url('https://www.jacadatravel.com/wp-content/uploads/fly-images/247256/costa-rica-cloud-forest-1-1600x700-cc.jpg');
  background-position: center;
  background-repeat: no-repeat;
  top: 100px;
  z-index: 2;
`;


const SearchBar = styled.div `
  display: flex;
  flex-direction: row;
  background-color: white;
  width: 60%;
  height: 100px;
  margin-left: -8px;
  box-shadow: 0 10px 10px -5px #cccc;
  align-items: center;
  border-radius: 8px;
  overflow: scroll;
`;

const Calendar = styled.input `
  display: flex;
  position: 'relative',
  left: '5%',
  width: 30%;
  height: 54px;
  border-radius: 5px;
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflow: 'scroll',
`;

const SubmitButton = styled.button `
  display: flex;
  position: relative;
  left: 15%;
  width: 12.5%;
  height: 54px;
  border-radius: 5px;
  overflow: 'scroll';
  justify-content: center;
  align-items: center;
  backgroundColor: #ececec;
  border: 1.5px solid #cccc;

  &:focus {
    outline: none;
  }
  &:hover {
    background-color: #FFE66D;
  }
  transition: 0.2s  ease-in;

`;