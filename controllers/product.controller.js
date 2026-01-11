const Product=require("../models/product");
const {getImageUrl}=require("../utils/imageUrl");
exports.addProduct= async (req,res)=>{
    try{
        const imageKey=req.file.filename;
        const product=new Product({
            productName:req.body.name,
            price:req.body.price,
            description:req.body.description,
            // image:req.file.filename
            imageKey:imageKey
        })
        await product.save();
        res.json({message:"Product added successfully"});
    }
    catch(error){
        res.status(500).json({message:"Product add failed"});
    }
};

// exports.getProducts=async (req,res)=>{
//     const products=await Product.find();
//     res.json(products);
// };
// exports.deleteProduct=async (req,res)={
//     await Product.findByIdAndDelete(req.params.id);
//     res.json({message:"Product Deleted"});
// };

exports.getProducts=async (req,res)=>{
    const products=await Product.find();
    const formatted=products.map(p=>({
        _id: p._id,
        productname: p.productName,
        price: p.price,
        description: p.description,
        imageUrl: getImageUrl(p.imageKey)
    }));

}


