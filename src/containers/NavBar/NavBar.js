import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Carousel, Nav, Row, Col } from 'react-bootstrap';
import './NavBar.scss';

const TabBar = ({ sports }) => {

  return (
    <Row className="nav-bar">
      {sports && sports.map(nav => {
        return (
          <NavLink className="nav-item" to="/" >
            <img src={nav.sports_img_url} height="20px" width="20px" />
            <p className="tab-name">{nav.sports_name}</p>
          </NavLink>
        )
      })}
    </Row>
  )
}

export default TabBar