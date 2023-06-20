const express = require('express');
const router = express.Router();
const productCtrl = require("../controllers/products")


router.post('/',productCtrl.createProduct)
router.put('/:id',productCtrl.updateProduct)
router.delete('/:id',productCtrl.deleteProduct)
router.get('/:id',productCtrl.readOneProduct)
router.get('/',productCtrl.readAllProduct)


module.exports = router;