import { useState, useEffect } from 'react';
import React from 'react'
import Helmet from '../components/helmet/Helmet'
import "../styles/Home.css"
import Services from '../services/Services';
import ProductList from '../components/ui/ProductList';
import { Container, Row, Col } from 'reactstrap';
import heroImg from "../assets/images/hero-img.png"
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
// import products from '../assets/data/products';
import counterImg from "../../src/assets/images/counter-timer-img.png"
import Clock from '../components/ui/Clock';

import useGetData from '../customs-hooks/useGetData';

const Home = () => {

  const year = new Date().getFullYear()


  const { data: products, loading } = useGetData("products")







  const [trendingProducts, setTrendingProducts] = useState([])
  const [bestSalesProducts, setBestSalesProducts] = useState([])
  const [mobileProducts, setMobileProducts] = useState([])
  const [wirelessProducts, setWirelessProducts] = useState([])
  const [popularProducts, setPopularProducts] = useState([])





  useEffect(() => {

    const filteredTrendingProducts = products.filter(item => item.category === "perfume")
    const filteredBestSalesProducts = products.filter(item => item.category === "watch")
    const filteredMobilesProducts = products.filter(item => item.category === "mobile")
    const filteredWirelesssProducts = products.filter(item => item.category === "wireless")
    const filteredPopularProducts = products.filter(item => item.category === "shoes")

    setTrendingProducts(filteredTrendingProducts)
    setBestSalesProducts(filteredBestSalesProducts)
    setMobileProducts(filteredMobilesProducts)
    setWirelessProducts(filteredWirelesssProducts)
    setPopularProducts(filteredPopularProducts)


  }, [products])
















  return (
    <Helmet title={"Home"}>




      <section className="hero__section">
        <div className="hero__background"></div>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <p className="hero__subtitle">Trending product in {year} </p>
                <h2>Explore Trends, Shop Securely, Fashion Your Lifestyle Online.</h2>
                <p>
                  In the vast realm of online shopping, our e-commerce platform offers a diverse array of products, from
                  fashion to electronics. Experience seamless browsing, secure transactions, and prompt delivery, ensuring a
                  convenient and delightful shopping journey.
                </p>

                <motion.button whileTap={{ scale: 1.2 }} className="buy__btn">
                  <Link to="shop">SHOP NOW</Link>
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
















      <section className="trending__products">

        <Container>
          <Row>

            <Col lg="12" className='text-center' >
              <h2 className="section__title mb-5">Trending Products</h2>
            </Col>

            {
              loading ? <h4 className="fw-bold">Loading...!!!</h4>
                :
                <ProductList data={trendingProducts} />
            }


          </Row>
        </Container>

      </section>













      <section className="best__sales">

        <Container>
          <Row>

            <Col lg="12" className='text-center' >
              <h2 className="section__title  mb-5">Best Sales</h2>
            </Col>

            {
              loading ? <h4 className="fw-bold">Loading...!!!</h4>
                :
                <ProductList data={bestSalesProducts} />
            }

          </Row>
        </Container>

      </section>
















      <section className="timer__count">

        <Container>
          <Row>

            <Col lg="6" md="12" className='count__down-col' >
              <div className="clock__top-content">
                <h4 className='text-white fs-6  mb-2'>Limited Offers</h4>
                <h3 className='text-white fs-5  mb-5'>Quality Products Sales Starts..!!</h3>
              </div>

              <Clock />

              <motion.button whileTap={{ scale: 1.2 }} className="buy__btn store__btn mb-6"><Link to="/shop">Visit Store</Link></motion.button>
            </Col>

            <Col lg="6" md="12" className='text-end counter__img' >
              <img src={counterImg} alt="" />
            </Col>

          </Row>
        </Container>

      </section>















      <section className="new__arrivals">

        <Container>
          <Row>

            <Col lg="12" className='text-center'  >
              <h2 className="section__title  mb-5">New Arrivals</h2>
            </Col>

            {
              loading ? <h4 className="fw-bold">Loading...!!!</h4>
                :
                <ProductList data={mobileProducts} />
            }

            {
              loading ? <h4 className="fw-bold">Loading...!!!</h4>
                :
                <ProductList data={wirelessProducts} />
            }





          </Row>
        </Container>

      </section>
















      <section className="popular__Category">

        <Container>
          <Row>

            <Col lg="12" className='text-center '  >
              <h2 className="section__title  mb-5">Popular in Category</h2>
            </Col>

            {
              loading ? <h4 className="fw-bold">Loading...!!!</h4>
                :
                <ProductList data={popularProducts} />
            }




          </Row>
        </Container>

      </section>








    </Helmet>
  )
}

export default Home