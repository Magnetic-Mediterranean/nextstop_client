import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ExperienceData from './components/experienceData.js'
import ExperienceList from './components/ExperienceList.jsx'
import BackButton from '../../components/sharedStyles/backButton.js'
import Container from '../sharedStyles/container'
import Header from '../sharedStyles/header'
import PageTitle from '../sharedStyles/pageTitle'


class Experiences extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      infoLoaded: false,
      selectedExperiences: [],
      selectedExperienceIds: new Set(),
    }
    this.handleSelectedExperience = this.handleSelectedExperience.bind(this)
  }

  componentDidMount() {
    const experiences = JSON.parse(window.localStorage.getItem('experiences'));
    this.setState({selectedExperienceIds: new Set(experiences)})

    setTimeout(() => {
      this.setState({
        infoLoaded: true,
      })
    }, 1000)
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
    return (
      <>
        {!this.state.infoLoaded &&
          (
            <Container>
            <div >
              <img style={{ width: "100%"}}
              src="https://i.pinimg.com/originals/65/ba/48/65ba488626025cff82f091336fbf94bb.gif"/>
            </div>
          </Container>
          )
        }
        {this.state.infoLoaded &&
          (<Container>
            <Header>
              <BackButton onClick={this.props.back}>Back</BackButton>
              <PageTitle>Select One or More Experiences</PageTitle>
              <BackButton onClick={this.props.next}>Next</BackButton>
            </Header>
            {this.props.experiences.length > 0 ? <ExperienceList
            experiences={this.props.experiences}
            handleSelectedExperience={this.handleSelectedExperience} selectedExperienceIds={this.state.selectedExperienceIds} /> : <p style={{textAlign: "center", paddingTop: "100px"}} >There are currently no experiences for the dates/destination you've selected at this time</p>}
          </Container>)
        }
      </>
    )
  }

}

export default Experiences;

// const Container = styled.div`
//  width: 90%;
//  min-width: 500px;
//  max-width: 1000px;
//  min-height: 500px;
//  margin: auto;
//  background: #ececec;
// `;

// const Header = styled.div`
//  display: flex;
//  justify-content: space-between;
//  margin-top: 20px;
//  padding: 15px;
// `;