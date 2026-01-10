const User=require('../models/user');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');

exports.register= async (req,res)=>{
    const hashed=await bcrypt.hash(req.body.password,10);
    const user= new User({
        name:req.body.name,
        email:req.body.email,
        password:hashed,
        isAdmin:req.body.isAdmin||false
    });
    await user.save();
    res.json({message:"User registered"});
}
exports.login = async(req,res)=>{
    const user= await User.findOne({email:req.body.email});
    if(!user) return res.status(401).json({message:"User not found"});
    const match=await bcrypt.compare(req.body.password,user.password);
    if(!match) return res.status(401).json({message:"Invalid password"});
    const token=jwt.sign(
        { id:user._id,isAdmin:user.isAdmin },
        process.env.JWT_SECRET,
        {expiresIn:"1d"}
        
    );
    res.json({token});
}