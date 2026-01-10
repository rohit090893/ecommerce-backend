const express = require('express');
const multer=require('multer');
const Product = require('../models/product');
const auth=require("../middleware/auth.middleware");
const admin=require("../middleware/admin.middleware");
const productCtrl=require("../controllers/product.controller");
const router=express.Router();
const storage= multer.diskStorage({
    destination:"uploads/",
    filename:(req,file,cb)=>{
        cb(null,Date.now()+file.originalname);
    }
});
const upload=multer({storage});
//The logic added in product controller

// router.post('/add',upload.single("image"),async(req,res)=>{
//     const product=new Product({
//         name:req.body.name,
//         price:req.body.price,
//         description:req.body.description,
//         image:req.file.filename
//     });
//     await product.save();
//     res.json({message:"Product Added"});
// })

router.post('/add',auth,admin,upload.single("image"),productCtrl.addProduct);
//Logiv added in product controller

// router.get('/',async(req,res)=>{
//     res.json(await Product.find());
// })
router.get('/',productCtrl.getProducts);

//router.delete('/:id',auth,admin,productCtrl.deleteProduct);

module.exports=router;
