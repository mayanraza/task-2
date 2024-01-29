import React from 'react'
import "../styles/Cart.css"

import { Container, Row, Col } from 'reactstrap';
import { toast } from "react-toastify"


import CommonSection from '../components/ui/CommonSection'
import Helmet from "../components/helmet/Helmet"


import {useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../redux/slice/CartSlice';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


const Cart = () => {


  const cartItems = useSelector(state => state.cart.cartItems)




  const totalAmount = useSelector(state => state.cart.totalAmount)






  return (
    <Helmet title="Cart">
      <CommonSection title="Shopping Cart" />


      <section>
        <Container>
          <Row>



            <Col lg="9">

              {
                cartItems.length === 0 ? (<h2 className='fs-4 text-center'>No Item added inside Cart...!!</h2>)

                  : (
                    <table className="table bordered">

                      <thead>
                        <tr>
                          <th>Image</th>
                          <th>Title</th>
                          <th>Price</th>
                          <th>Qty</th>
                          <th>Delete</th>
                        </tr>
                      </thead>


                      <tbody>
                        {
                          cartItems.map((item, index) => (


                            <Tr item={item} key={index} />

                          ))

                        }
                      </tbody>

                    </table>
                  )
              }
            </Col>





            <Col lg="3">
              <div>
                <h6 className='d-flex align-items-center justify-content-between '>
                  SubTotal
                  <span className='fs-4 fw-bold'>${totalAmount}</span>
                </h6>
              </div>


              <p className='fs-6 mt-2'>taxes and shipping will calculate in checkout</p>
              <div>
                <button className="buy__btn w-100"><Link to="/checkout"> CheckOut</Link></button>
                <button className="buy__btn w-100"><Link to="/shop"> Continue Shopping</Link></button>

              </div>
            </Col>




          </Row>
        </Container>

      </section>










    </Helmet>
  )
}



const Tr = ({ item }) => {


  const dispatch = useDispatch()
  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.id))
  }


  return (


    <tr >
      <td><img src={item.imgUrl} alt="" /></td>
      <td>{item.productName}</td>
      <td>${item.price}</td>
      <td>{item.quantity}</td>
      <td><motion.i onClick={deleteProduct} whileTap={{ scale: 1.2 }} class="ri-delete-bin-line"></motion.i></td>
    </tr>

  )
}



export default Cart