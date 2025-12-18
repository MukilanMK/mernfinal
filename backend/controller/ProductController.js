const productModel = require("../model/Product");
exports.getProduct = async(req, res) => {
    try {
        const product = await productModel.find();
        res.json(product);
    } catch (error) {
        console.error(error);        
        res.status(500).json({error: 'server error'});
    }
}

exports.postProduct = async(req, res) => {
    const {name, price, rating, image, description} = req.body;
    try {
        const newProduct = productModel({name, price, rating, image, description});
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        console.error(error);        
        res.status(500).json({error: 'server error'});
    }
}

exports.deleteProduct = async(req, res) => {
    const id = req.params.id;
    const deleted = await productModel.findByIdAndDelete(id);
    if(!deleted) {
        return res.status(201).json({message: "Product not found"});
    } 
    res.json({message: "Product deleted successfully"})
}

exports.updateProduct = async(req, res) => {
   try{
    const id=req.params.id;
    const {name, price, rating, image, description}=req.body;
    const updated = await productModel.findByIdAndUpdate(id,{name, price, rating, image, description},{new:true});
    if(!updated){
        return res.status(404).json({message: 'Product not found'});
    }
    res.json(updated);
   }
   catch(error){
    console.error(error);
    res.status(500).json({error: 'server error'});
   }
}