import express from 'express';

import {updateStatus,userOrders,allOrders,placeOrderRazorpay,placeOrderStripe,placeOrder} from '../controllers/orderController.js'
import adminAuth from '../middlewear/adminAuth.js'
import authUser from '../middlewear/auth.js'
const orderRouter = express.Router()

// Admin Features
orderRouter.post('/list',adminAuth,allOrders)
orderRouter.post('/status',adminAuth,updateStatus)

// Payment Features
orderRouter.post('/place',authUser,placeOrder)
orderRouter.post('/razorpay',authUser,placeOrderRazorpay)
orderRouter.post('/stripe',authUser,placeOrderStripe)

// User Feature 
orderRouter.post('/userorders',authUser,userOrders)

export default orderRouter