import React from 'react'
import "./Footer.css"
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import logo from "../../assets/images/eco-logo.png"

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


const Footer = () => {

  const year = new Date().getFullYear



  return (
    <footer className="footer">
      <Container>
        <Row>

          <Col lg="4" className='mb-4' md="6">
            <div className="logo">
              <div>
                <h1 className='text-white'>BUCKET.COM </h1>
              </div>
            </div>
            <p className="footer__text mt-4">Explore our diverse selection, enjoy secure transactions, and experience exceptional customer service. Shop confidently for quality products at competitive prices.</p>
          </Col>


          <Col lg="3" md="3" className='mb-4' >
            <div className="footer__quick__links">
              <h4 className="quick__links__title">Top Categories</h4>
              <ListGroup className='mb-3'>
                <ListGroupItem className='ps-0 border-0'><Link to="#">Mobiles Phones</Link></ListGroupItem>
                <ListGroupItem className='ps-0 border-0'><Link to="#">Mobiles Phones</Link></ListGroupItem>
                <ListGroupItem className='ps-0 border-0'><Link to="#">Mobiles Phones</Link></ListGroupItem>
                <ListGroupItem className='ps-0 border-0'><Link to="#">Mobiles Phones</Link></ListGroupItem>
              </ListGroup>
            </div>
          </Col>


          <Col lg="2" md="3" className='mb-4' >
            <div className="footer__quick__links">
              <h4 className="quick__links__title">Useful Links</h4>
              <ListGroup className='mb-3'>
                <ListGroupItem className='ps-0 border-0'><Link to="/shop">Shop</Link></ListGroupItem>
                <ListGroupItem className='ps-0 border-0'><Link to="/cart">Cart</Link></ListGroupItem>
                <ListGroupItem className='ps-0 border-0'><Link to="/login">Login</Link></ListGroupItem>
                <ListGroupItem className='ps-0 border-0'><Link to="#">Privacy Policy</Link></ListGroupItem>
              </ListGroup>
            </div>
          </Col>


          <Col lg="3" md="4">
            <div className="footer__quick__links">
              <h4 className="quick__links__title">Contacts</h4>
              <ListGroup className='mb-3 footer__contact'>
                <ListGroupItem className='ps-0 border-0 d-dlex align-items-center gap-2'><span><i class="ri-map-pin-line"></i></span> <p> 123 Saddar Bazar ,Karachi, Pakistan</p></ListGroupItem>
                <ListGroupItem className='ps-0 border-0 d-dlex align-items-center gap-2'><span><i class="ri-phone-line"></i></span><p>+92 3020023213</p></ListGroupItem>
                <ListGroupItem className='ps-0 border-0 d-dlex align-items-center gap-2'><span><i class="ri-mail-line"></i></span><p>razaayan724@gmail.com</p></ListGroupItem>
                <ListGroupItem className='ps-0 border-0 d-dlex align-items-center gap-2'><span><i class="ri-phone-line"></i></span><p>+92 3020023213</p></ListGroupItem>
              </ListGroup>
            </div>
          </Col>



          <Col lg="12"  >
            <p className="footer__copyright">Copyright {year} developed by Muhammad Ayan Raza. All rights reserved.</p>
          </Col>



        </Row>
      </Container>
    </footer>
  )
}

export default Footer