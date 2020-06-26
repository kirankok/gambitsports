import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap'

const HomeBanner = ({ banner }) => {

  return (
    <Carousel>
      {
        banner && banner.map(item => (
          <Carousel.Item>
            <Link to={item.redirect ? "/payments" : null}>
              <img
                className="d-block w-100"
                src={item.img_url}
                alt="First slide"
              />
            </Link>
          </Carousel.Item>
        ))
      }
    </Carousel>
  )
}

export default HomeBanner