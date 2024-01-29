import React from 'react'
import "./Header.css"

import { Container, Row, Col } from 'reactstrap';
import { Link, NavLink, useNavigate } from 'react-router-dom';

import logo from "../../assets/images/eco-logo.png"
import userIcon from "../../assets/images/user-icon.png"

import { useRef, useEffect } from 'react';


import { motion } from "framer-motion";

import { useSelector } from 'react-redux';

import useAuth from '../../customs-hooks/useAuth';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase.config';
import { toast } from 'react-toastify';


const nav__link = [

  {
    path: "home",
    display: "Home"
  },

  {
    path: "shop",
    display: "Shop"
  },

  {
    path: "cart",
    display: "Cart"
  },




]




const Header = () => {

  const headerRef = useRef(null)
  const totalQuantity = useSelector(state => state.cart.totalQuantity)
  const profileActionRef = useRef(null)



  const { currentUser } = useAuth()










  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add("stick__header")
      }
      else {
        headerRef.current.classList.remove("stick__header")

      }
    })
  }

  const menuRef = useRef(null)

  useEffect(() => {
    stickyHeaderFunc()

    return () => window.removeEventListener("scroll", stickyHeaderFunc)
  })


  const menuToggle = () => menuRef.current.classList.toggle("active__menu")








  const navigate = useNavigate()

  const navigateToCart = () => {

    navigate("/cart")


  }












  const toggleProileActions = () => profileActionRef.current.classList.toggle("show__profileActions")


  const logout = () => {

    signOut(auth).then(() => {

      toast.success("Logged out..!!")
      navigate("/home")


    }).catch(err => {
      toast.error(err.message)
    })

  }



  return (
    <header className='header' ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper">

            <div className="logo">
              <span className='cart'><i class="ri-shopping-cart-line"></i></span>
              {/* <img src={logo} alt="logo" /> */}
              <div>
                <h1>BUCKET.COM </h1>
              </div>
            </div>




            <div className="navigation" ref={menuRef} onClick={menuToggle}>
              <ul className="menu">

                {nav__link.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink to={item.path} className={(navClass) => navClass.isActive ? "nav__active" : ""}>
                      {item.display}
                    </NavLink>
                  </li>
                ))}

              </ul>
            </div>





            <div className="nav__icons">

              <span className='fav__icon'>
                <i class="ri-heart-line  hicon" >
                  <span className="badge">1</span>
                </i>
              </span>

              <span className='cart__icon' onClick={navigateToCart}>
                <i class="ri-shopping-bag-line hicon" >
                  <span className="badge">{totalQuantity}
                  </span>
                </i>
              </span>


              <div className='profile'>
                <motion.img
                  whileTap={{ scale: 1.2 }}
                  onClick={toggleProileActions}
                  src={currentUser ? currentUser.photoURL : userIcon}
                  alt="" />

                <div className="profile__actions "
                  ref={profileActionRef}
                  onClick={toggleProileActions}>
                  {currentUser ? (<span onClick={logout}>Logout</span>) : (<div className='d-flex align-items-center justify-content-center flex-column'><Link to="/signup">Signup</Link><Link to="/login">Login</Link><Link to="/dashboard">Dashboard</Link></div>)}
                </div>

              </div>


              <div className="mobile__menu">
                <span onClick={menuToggle}><i class="ri-menu-line"></i></span>

              </div>

            </div>




















          </div>
        </Row>
      </Container>


    </header>

  )
}

export default Header
