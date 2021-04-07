import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ExperienceData from './components/experienceData.js'
import ExperienceList from './components/ExperienceList.jsx'
import BackButton from '../../components/sharedStyles/backButton.js'

class Experiences extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // hotels: []
      experiences: ExperienceData,
      selectedExperienceId: null,
    }
    this.getExperiences = this.getExperiences.bind(this)
    this.handleSelectedExperience = this.handleSelectedExperience.bind(this)
  }

  componentDidMount() {
    this.getExperiences()
    const experience = JSON.parse(window.localStorage.getItem('experience'));
    const experienceId = JSON.parse(window.localStorage.getItem('id'))
    this.setState({selectedExperienceId: experienceId})
  }

  getExperiences() {
    axios.get('experiences', {
      parmas: {
       cityCode: 'PAR',
       latitude: '48.8566° N',
       longitude: '2.3522° E'
      }
    })
    .then((res) => {
      this.setState({experiences: res.data})
    })
    .catch((err) => {
      console.log({err: err})
    })
  }

  handleSelectedExperience(id) {
    const filtered = this.state.experiences.filter(experience => {
      return experience.id === id})
    if (filtered.length > 0) {
      const setExperience = window.localStorage.setItem('experience', JSON.stringify(filtered[0]))
      this.setState({experience: setExperience})
      const setId = window.localStorage.setItem('id', id)
      this.setState({selectedExperienceId: id})
    }
  }

  render() {
    return (
      <Container>
      <Header>
        <BackButton onClick={this.props.back}>Back</BackButton>
        <p>Select One or More Experiences</p>
        <BackButton onClick={this.props.next}>Next</BackButton>
      </Header>
      <ExperienceList experiences={this.state.experiences} handleSelectedExperience={this.handleSelectedExperience} selectedExperienceId={this.state.selectedExperienceId} />
      </Container>
    )
  }

}

export default Experiences;

const Container = styled.div`
 width: 90%;
 min-width: 500px;
 max-width: 1000px;
 min-height: 500px;
 margin: auto;
 background: #ececec;
`;

const Header = styled.div`
 display: flex;
 justify-content: space-between;
 margin-top: 20px;
 padding: 15px;
`;