const router = require("express").Router();
const razorpay = require("../utils/razorpay");
const paymentCtrl=require("../controllers/payment.controller");
const auth=require('../middleware/auth.middleware');

router.post('/create-order',auth,paymentCtrl.createPaymentOrder);
//Already in payment controller
// router.post("/create-order", async (req, res) => {
//   try{
//     const order = await razorpay.orders.create({
//     amount: req.body.amount * 100,
//     currency: "INR"
//   });
//   res.json(order);
//     }
//     catch(error){
//         res.status(500).json({message:"Ordeer creation failed"});
//     }
// });

module.exports = router;
