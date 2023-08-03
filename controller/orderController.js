const SSLCommerzPayment = require('sslcommerz-lts')
const { v4: uuidv4 } = require('uuid');
const Order = require('../models/orderModel');


// SSL Commerz Sandbox





exports.postOrder = async (req, res) =>{
    
    const store_id = await process.env.STORE_ID
    const store_passwd = await process.env.STORE_PASSWORD
    const is_live = false //true for live, false for sandbox
    
    try {
        const order = req.body;
        const trans_id = uuidv4()

        console.log(`This is uuid ${trans_id}`)

        const data = {
            total_amount: order.totalPrice,
            currency: 'BDT',
            tran_id: trans_id, // use unique tran_id for each api call
            success_url: `http://localhost:5000/orders/payment/success?transactionId=${trans_id}`,
            fail_url: 'http://localhost:3030/fail',
            cancel_url: 'http://localhost:3030/cancel',
            ipn_url: 'http://localhost:3030/ipn',
            shipping_method: 'Courier',
            product_name: 'Computer.',
            product_category: 'Electronic',
            product_profile: 'general',
            cus_name: order.name,
            cus_email: order.email,
            cus_add1: order.address,
            cus_add2: 'Dhaka',
            cus_city: order.city,
            cus_state: 'Dhaka',
            cus_postcode: order.zip,
            cus_country: order.country,
            cus_phone: order.mobile,
            cus_fax: '01711111111',
            ship_name: 'Customer Name',
            ship_add1: 'Dhaka',
            ship_add2: 'Dhaka',
            ship_city: 'Dhaka',
            ship_state: 'Dhaka',
            ship_postcode: 1000,
            ship_country: 'Bangladesh',
        };
         
        const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live)
        sslcz.init(data).then(async apiResponse => {
            // Redirect the user to payment gateway
            let GatewayPageURL = apiResponse.GatewayPageURL
            // console.log(` this is from sslcz ${GatewayPageURL}`)

            const order1 = await Order.create({
                // tran_id: trans_id,
                customer_name: order.name,
                customer_email: order.email,
                customer_address: order.address,
                customer_mobile: order.mobile,
                total_Price: order.totalPrice,
                paid: false,


            })                   
            console.log(`This is from ${order1}`)

            
           return res.send({url: GatewayPageURL})
            // console.log('Redirecting to: ', GatewayPageURL)
        });
        
    } catch (error) {
        return res.status(401).json({message: error.message})
    }
}

exports.updateOrder = async (req, res)=>{
    const transactionId = req.query;
    console.log(`This is from ${transactionId}`)
    
}