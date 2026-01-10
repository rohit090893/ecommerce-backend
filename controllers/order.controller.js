const Order=require("../models/Order");
exports.createOrder=async (req,res)=>{
    try{
        const order= new Order({
            userId:req.user.id,
            products:req.body.products,
            totalAmount:req.body.totalAmount,
            paymentStatus:"PAID"
        })
        await order.save();
        res.json({message:"Order placed successfully"});

    }
    catch(error){
        res.status(500).json({message:"Order failed"});
    }
}

exports.getMyOrders=async (req,res)=>{
    const orders= await Order.find({userId: req.user.id});
    res.json(orders);

};

exports.getAllOrders=async (req,res)=>{
    const orders=await Order.find();
    res.json(orders);
}