import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';


import Home from '../pages/Home'
import Shop from '../pages/Shop'
import Cart from '../pages/Cart'
import ProductDetails from '../pages/ProductDetails';
import CheckOut from '../pages/CheckOut'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import AllProducts from '../admin/AllProducts';
import AddProducts from '../admin/AddProducts';
import User from '../admin/User';



import ProtectedRoutes from './ProtectedRoutes';
import Dashboard from '../admin/Dashboard';

const Routers = () => {
    return (
        <Routes>
            <Route path="/" exact element={<Navigate to={"home"} />} />

            <Route path="home" exact element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="cart" element={<Cart />} />
            <Route path="shop/:id" element={<ProductDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />

            <Route path='/*' element={<ProtectedRoutes />}>

                <Route path="checkout" element={<CheckOut />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="dashboard/all-products" element={<AllProducts />} />
                <Route path="dashboard/add-products" element={<AddProducts />} />
                <Route path="dashboard/users" element={<User />} />

            </Route>



        </Routes>
    )
}

export default Routers