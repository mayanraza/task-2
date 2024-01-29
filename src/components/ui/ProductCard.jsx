import React from 'react'
// import productImg from "../../assets/images/arm-chair-01.jpg"
import "../../styles/Product-Card.css"
import { Col } from 'reactstrap';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { cartActions } from "../../redux/slice/CartSlice"


import { toast } from 'react-toastify';

const ProductCard = ({ item }) => {


    const dispatch = useDispatch()

    const addToCart = () => {
        dispatch(cartActions.addItem({
            id: item.id,
            productName: item.productName,
            price: item.price,
            imgUrl: item.imgUrl
        }))


        toast.success("product added to cart")


    }













    return (
        <Col lg="3" md="4" className='mb-2'>
            <div className="product__item">
                <div className="product__img">
                    <motion.img whileHover={{ scale: 0.9 }} src={item.imgUrl} alt="" />
                </div>

                <div className="p-2 product__info">
                    <h3 className="product__name"><Link to={`/shop/${item.id}`}>{item.productName}</Link></h3>
                    <span className=" d-block">{item.category}</span>
                </div>

                <div className="product__card-bottom d-flex align-items-center justify-content-between p-2">
                    <span className='price'>${item.price}</span>
                    <motion.span whileTap={{ scale: 1.2 }} onClick={addToCart}><i class="ri-add-line"></i></motion.span>
                </div>
            </div>
        </Col>
    )
}

export default ProductCard