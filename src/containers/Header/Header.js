import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './Header.scss';
import { useHistory, Link } from "react-router-dom";

const Header = (props) => {
  let history = useHistory();
  return (
    <Container>
      <Row className="header-bar">
        <Col xs={1}>

          {props.location.pathname !== '/' ? <Image src={'/assets/back@3x-min.png'} onClick={() => history.goBack()} width="6px" height="12px"></Image> : null}
        </Col>
        <Col className="header-name">
          {props.location.pathname === '/' ? 'Home' : props.location.pathname}
        </Col>
      </Row>
    </Container>
  )
}

export default Header

