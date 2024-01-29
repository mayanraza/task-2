import React from 'react'

import { Container, Row, Col, FormGroup, Form } from 'reactstrap';
import { toast } from "react-toastify"

import "../styles/Checkout.css"

import CommonSection from '../components/ui/CommonSection'
import Helmet from "../components/helmet/Helmet"

import {  useSelector } from 'react-redux';

const CheckOut = () => {


  const totalQty = useSelector(state => state.cart.totalQuantity)
  const totalAmount = useSelector(state => state.cart.totalAmount)









  return (
    <Helmet title='CheckOut'>
      <CommonSection title="CheckOut" />


      <section>
        <Container>
          <Row>


            <Col lg="8" >
              <h6 className="fw-bold mb-4 ">Billing Information</h6>

              <Form>
                <FormGroup className='form__group'>
                  <input type="text" placeholder="Enter your namer..." />
                </FormGroup>

                <FormGroup className='form__group'>
                  <input type="email" placeholder="Enter your email..." />
                </FormGroup>

                <FormGroup className='form__group'>
                  <input type="number" placeholder="Enter your contact number..." />
                </FormGroup>

                <FormGroup className='form__group'>
                  <input type="text" placeholder="Street address..." />
                </FormGroup>

                <FormGroup className='form__group'>
                  <input type="text" placeholder="city..." />
                </FormGroup>

                <FormGroup className='form__group'>
                  <input type="text" placeholder="postal code..." />
                </FormGroup>

                <FormGroup className='form__group'>
                  <input type="text" placeholder="country..." />
                </FormGroup>

              </Form>
            </Col>








            <Col lg="4" >
              <div className="checkout__cart ">
                <h6>Total Qty: <span>{totalQty}</span></h6>
                <h6>Subtotal: <span>${totalAmount}</span></h6>
                <h6><span>Shipping: <br />free shipping</span><span>$0</span></h6>
                <h4>Total Cost: <span>${totalAmount}</span></h4>


                <button className="buy__btn  fs-5 w-100">Place an order</button>
              </div>

            </Col>


          </Row>
        </Container>
      </section>

    </Helmet>

  )
}

export default CheckOut