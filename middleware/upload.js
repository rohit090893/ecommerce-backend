const multer=require("multer");
const {storage}=require("../utils/storage");
module.exports=multer({storage});