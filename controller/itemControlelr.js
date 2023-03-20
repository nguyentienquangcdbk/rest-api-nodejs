const {ItemOrder,User} = require('../model/index');

const itemController ={
    add : async (req,res) =>{
        const {nameProduct,img,size,color,price,quantity} =req.body;
        const user = req.user;
        // console.log(req.user);
        try {
            if(!user){
                res.status(401).json({ message : 'Unauthorized'})
            }else{
                const item = await ItemOrder.find({user : user.id,color : color,size : size});
                if(item.length === 0){
                   console.log(user.id);
                const ItemCart = new ItemOrder({
                    nameProduct : nameProduct,
                    img : img,
                    size : size,
                    color : color,
                    price : price,
                    quantity: quantity,
                    user : user.id
                });
                await ItemCart.save();
                res.status(200).json({message : 'succer', item : ItemCart})
               }else{
                const update ={
                    quantity : Number(quantity) + Number(item[0].quantity)
                } 

                await ItemOrder.findOneAndUpdate({user : user.id,color : req.body.color,size : req.body.size},update);
                res.status(200).json({message : 'succer'})
               }
                
            }
        } catch (error) {
            res.status(500).json(error);
        }
       
    },
    getId : async (req,res) =>{
        const {id} = req.params;
       
        const category = await Category.findById(id);

        res.status(200).json(category);
    },
    getAll : async (req,res) =>{
        try {
            const categoryList = await Category.find();
            res.status(200).json(categoryList)
        } catch (error) {
            res.status(500).json({su})
        }
       
    },
    increment : async (req,res) =>{
        const {id} = req.params;
        try {
           const item = await ItemOrder.findById(id);
           await ItemOrder.updateOne({ _id : item.id},{ $inc : { quantity : 1}})
            res.status(200).json({success : 'update success'})
        } catch (error) {
            res.status(500).json(error)
        }
    },
    decrement : async (req,res) =>{
        const {id} = req.params;
        try {
           const item = await ItemOrder.findById(id);
           await ItemOrder.updateOne({ _id : item.id},{ $inc : { quantity : -1}})
            res.status(200).json({success : 'update success'})
        } catch (error) {
            res.status(500).json(error)
        }
    },
    delete : async (req,res) =>{
        const id = req.params.id;
        try {
            const remove =  await ItemOrder.findByIdAndRemove(id)
            if(remove){
                res.status(200).json(remove);
            }else{
                res.status(200).json({message : "not not category"})
            }
        } catch (error) {
            res.status(500).json(error)
        }
    },
    sreach : async (req,res) =>{},
}

module.exports = itemController;