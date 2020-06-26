import './App.css';
import Challenges from './containers/Challenges/Challenges';
import HomeBanner from './components/HomeBanner/HomeBanner';
import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { fetchChallenges } from './redux/actions/challenges'
import { Container } from 'react-bootstrap';
import Tile from './components/Tile/Tile';
import TabBar from './containers/NavBar/NavBar';

function App(props) {

  useEffect(() => {
    props.fetchChallenges()
  }, []);

  return (
    <>
      <HomeBanner banner={props.banners} />
      <TabBar sports={props.sports}></TabBar>
      <Container>
        {props.challenges && props.challenges.map(challenge => <Tile challenges={challenge} />)}
      </Container>
    </>
  );
}


const s2p = state => {
  return {
    challenges: state.challengesReducer.data.challenges,
    banners: state.challengesReducer.data.banners,
    sports: state.challengesReducer.data.sports
  }
}

export default connect(s2p, { fetchChallenges })(App);
