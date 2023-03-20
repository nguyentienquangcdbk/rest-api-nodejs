const {Product,Spect} = require('../model/index');

const productController ={
    add : async (req,res) =>{
        // console.log(req.user);
        const {name,description,img,color,category,size,price} =req.body;
        try {
            console.log(req.body);
            const product = new Product({
                name : name,
                description: description,
                img : img,
                color : color,
                category : category,
                size : size,
                price : price
            });
    
           await product.save();
           res.status(200).json(product);
        } catch (error) {
            res.status(500).json(error);
        }
       

    },
    getId : async (req,res) =>{
        const {id} = req.params;
       
        const product = await Product.findById(id);

        res.status(200).json(product);
    },
    getAll : async (req,res) =>{
        try {
            const product =await Product.find();
            res.status(200).json(product);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    Update : async (req,res) =>{
        const productId = req.params.id;
        try {
            await Product.findByIdAndUpdate(productId, req.body)
            res.status(200).json({success : 'update success'})
        } catch (error) {
            res.status(500).json(error)
        }
  
       
    },
    delete : async (req,res) =>{
        const productId = req.params.id;
        try {
            const remove =  await Product.findByIdAndDelete(productId);
            if(remove){

                res.status(200).json(remove);
            }else{
                res.status(200).json({message : "not not product"})
            }

        } catch (error) {
            res.status(500).json(error)
        }
    
            //     console.log(err);
            //     return res.status(500).send(err);
            // }
    
            
    
    },
    sreach : async (req,res) =>{},
}

module.exports = productController;