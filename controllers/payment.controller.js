const razorpay=require("../utils/razorpay");

exports.createPaymentOrder= async (req,res)=>{
    try{
        const order= await razorpay.orders.create({
            amount:req.body.amount * 100,
            currency:"INR",
            receipt:"order_rcptid_" + Date.now()
        });
        res.json(order);
    }
    catch(error){
        console.log("Razor pay full error", error);
        res.status(500).json({message:"Payment Order Failed"});
    }
};
