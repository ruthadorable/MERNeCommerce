var express =require ('express')
var asyncHandler =require ('express-async-handler')
const router =express.Router()
var Product=require('../models/productModel.js')
//@desc Fetch all products from mongoDB
//@route GET /api/products
//@access Public
router.get('/',asyncHandler(async(req,res)=>{
    const products= await Product.find({})
    res.json(products)
}))
//@desc Fetch 1 product from mongoDB
//@route GET /api/products/:id
//@access Public
router.get('/:id',asyncHandler(async(req,res)=>{
    const product=await Product.findById(req.params.id)
    if(product){
        res.json(product);
    }else{
        res.status(404)
        throw new Error('Product not found')
    }
    
}))



module.exports=router