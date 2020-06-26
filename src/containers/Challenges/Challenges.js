import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { fetchChallenges } from '../../redux/actions/challenges'
import Tile from '../../components/Tile/Tile'
import { Container } from 'react-bootstrap';

const Challenges = (props) => {

  useEffect(() => {
    props.fetchChallenges()
  }, []);

  return (
    <Container>
      {props.challenges && props.challenges.map(challenge => <Tile challenges={challenge} />)}
    </Container>
  )
}

const s2p = state => {
  return {
    challenges: state.challengesReducer.data.challenges
  }
}

export default connect(s2p, { fetchChallenges })(Challenges);