const Products = require("../models/product");

exports.createProduct = (req,res)=>{
    delete req.body._id;
    const product = new Products({...req.body})
    product.save()
    .then(()=>res.status(201).json({product}))
    .catch(error=>res.status(400).json({error}));
}

exports.updateProduct = (req,res)=>{
    Products.updateOne({_id : req.params.id},{...req.body, _id: req.params.id})
    .then(()=>res.status(200).json({ message: 'Modified!' }))
    .catch(error=>res.status(400).json({error}));
}

exports.deleteProduct = (req,res)=>{
    Products.deleteOne({_id : req.params.id})
    .then(()=>res.status(200).json({ message: 'Deleted!' }))
    .catch(error=>res.status(400).json({error}));
}

exports.readOneProduct = (req,res)=>{
    Products.findOne({_id : req.params.id})
    .then(product => res.status(200).json({product}))
    .catch(error=> res.status(400).json({error}))
}

exports.readAllProduct = (req,res)=>{
    Products.find()
    .then((products)=>res.status(200).json({products}))
    .catch(error=>res.status(400).json({error}))
}