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
      // experiences: [],
      // experiences: ExperienceData,
      selectedExperiences: [],
      selectedExperienceIds: new Set(),
    }
    this.handleSelectedExperience = this.handleSelectedExperience.bind(this)
  }

  componentDidMount() {
    const experiences = JSON.parse(window.localStorage.getItem('experiences'));
    this.setState({selectedExperienceIds: new Set(experiences)})
  }

  handleSelectedExperience(id) {
    if (this.state.selectedExperienceIds.has(id)) {
      this.state.selectedExperienceIds.delete(id)
    } else {
        this.setState(currentState => {
          const setTest = new Set(currentState.selectedExperienceIds.add(id))

          return {selectedExperienceIds: setTest}
        }, () => {
          const selectedIds = Array.from(this.state.selectedExperienceIds)
          const filteredExperiences = this.props.experiences.filter(experience => {
            return this.state.selectedExperienceIds.has(experience.id)
          })
          if (filteredExperiences.length > 0) {
            this.setState({selectedExperiences: filteredExperiences})
            const setExperiences = window.localStorage.setItem('experiences', JSON.stringify(filteredExperiences))

            const experienceIds = JSON.stringify(Array.from(this.state.selectedExperienceIds))
            const setExperience = window.localStorage.setItem('experienceIds', experienceIds)
          }

        })
    }
  }

  render() {
    console.log('exp props?', this.props)
    return (
      <Container>
        <Header>
          <BackButton onClick={this.props.back}>Back</BackButton>
          <p>Select One or More Experiences</p>
          <BackButton onClick={this.props.next}>Next</BackButton>
        </Header>
        <ExperienceList
        experiences={this.props.experiences}
        handleSelectedExperience={this.handleSelectedExperience} selectedExperienceIds={this.state.selectedExperienceIds} />
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