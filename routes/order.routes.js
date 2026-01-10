const router= require("express").Router();
const auth = require("../middleware/auth.middleware");
const admin=require("../middleware/admin.middleware");
const orderCtrl=require("../controllers/order.controller");

router.post('/',auth,orderCtrl.createOrder);
router.get('/my',auth,orderCtrl.getMyOrders);
router.get('/',auth,admin,orderCtrl.getAllOrders);

module.exports=router;