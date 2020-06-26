import React, { useState, useEffect } from 'react';
import { Card, Button, Container, Row, Col, Image } from 'react-bootstrap';



import './Tile.scss'

const Tile = ({ challenges }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(challenges.start_time) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });



  const timerComponents = [];

  Object.keys(timeLeft).forEach(interval => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <Card className="card-container">
      <Card.Title className="card-heading">Picks</Card.Title>
      <Row>
        <Col xs={2}>
          <Image src={challenges.match_parties[0].party_img_url} height="30px" width="30px" rounded /></Col>
        <Col xs={8}>
          <p className="challeneg-party-name">{`${challenges.match_parties[0].party_name} V ${challenges.match_parties[1].party_name}`}</p>
        </Col>
        <Col xs={2}>
          <Image src={challenges.match_parties[1].party_img_url} height="30px" width="30px" rounded />
        </Col>
      </Row>
      <Row>
        <Col><Image src='/assets/ruppe-min.png' height="14px" width="14px"></Image>{challenges.prize_money}</Col>
        <Col><Image src='/assets/timer-min.png' height="14px" width="14px"></Image> {timerComponents.length ? timerComponents : <span>Time's up!</span>}</Col>
      </Row>
    </Card>
  )
}

export default Tile;