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
      departure: '',
    }
    this.onChangeFrom = this.onChangeFrom.bind(this);
    this.onChangeTo = this.onChangeTo.bind(this);
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
  componentDidMount() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
      if(dd < 10){
        dd='0'+dd
      }
      if(mm<10){
        mm='0'+mm
      }

    today = yyyy+'-'+mm+'-'+dd;
    this.setState({date: today});
  }
  componentDidUpdate(prevProp) {
    if (prevProp.dateFrom !== this.props.dateFrom) {
      var newDate = new Date(this.props.dateFrom);
      var dd = newDate.getDate() + 2;
      var mm = newDate.getMonth()+1; //January is 0!
      var yyyy = newDate.getFullYear();
      if(dd < 10){
        dd='0'+dd
      }
      if(mm<10){
        mm='0'+mm
      }
      var today = yyyy+'-'+mm+'-'+(dd);
      this.setState({departure: today});
    }
  }

  render() {
    return (
      <SmallPhotoContainer size={this.props.size ? this.props : undefined} id='Search'>
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
            left: '3.5%',
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
            left: '5%',
            color: 'black',
          }}
          renderInput={(params) => <TextField {...params} label="To" variant="outlined" />}
          />
        <Calendar className='Cal' type='date' onChange={this.props.setDateFrom} style={
          {
            border: '1.5px solid #cccc',
            textAlign: 'center',
            position: 'relative',
            left: '7.5%',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            backgroundColor: '#ececec'
          }
          } min={this.state.date} required/>
          { this.props.dateFrom ? <Calendar className='Cal' type='date' onChange={this.props.setDateTo} style={
            {
              border: '1.5px solid #cccc',
              textAlign: 'center',
              position: 'relative',
              left: '10%',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              backgroundColor: '#ececec',
            }
          } min={this.state.departure} required/> : <Calendar className='Cal' type='date' onChange={this.props.setDateTo} style={
            {
              border: '1.5px solid #cccc',
              textAlign: 'center',
              position: 'relative',
              left: '10%',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              backgroundColor: '#ececec',
            }
          } disabled/>
        }
          <SelectButton onChange={this.props.setTraveler} required>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>11</option>
          </SelectButton>
          <SubmitButton onClick={() => {
            this.state.selectedFrom !== '' && this.state.selectedTo !== '' && this.props.dateFrom !== '' && this.props.dateTo !== '' ? this.props.incrementDisplayPage() : alert('Need to choose dates and location');
          }}>Find</SubmitButton>
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
  background-image: url('https://www.jacadatravel.com/wp-content/uploads/fly-images/23481/iStock_000038894412_Large3-1600x700-cc.jpg');
  background-position: center;
  background-repeat: no-repeat;
  top: 100px;
  z-index: 2;
`;


const SearchBar = styled.div `
  display: flex;
  flex-direction: row;
  background-color: white;
  width: 70%;
  height: 125px;
  margin-left: -8px;
  box-shadow: 0 10px 10px -5px #cccc;
  align-items: center;
  border-radius: 8px;
  overflow: hidden;
`;

const Calendar = styled.input `
  display: flex;
  position: 'relative',
  left: '5%',
  width: auto;
  max-width: 30%;
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

const SelectButton = styled.select `
  display: flex;
  position: relative;
  left: 12.5%;
  width: 4%;
  height: 54px;
  border-radius: 5px;
  overflow: 'scroll';
  justify-content: center;
  align-items: center;
  background-color: rgb(236, 236, 236);
  border: 1.5px solid #cccc;
  text-align-last:center;
  &:focus {
    outline: none;
  }
  transition: 0.2s  ease-in;

`;