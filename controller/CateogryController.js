const {Category} = require('../model/index');

const CategoryController ={
    add : async (req,res) =>{
        const {name,img} =req.body;
        try {
           
            const category = new Category({
                name : name,
                image : img,
            });
    
           await category.save();
           res.status(200).json(category);
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
    Update : async (req,res) =>{
        const categoryId = req.params.id;
        try {
            await Category.findByIdAndUpdate(categoryId, req.body)
            res.status(200).json({success : 'update success'})
        } catch (error) {
            res.status(500).json(error)
        }
    },
    delete : async (req,res) =>{
        const categoryId = req.params.id;


        try {
            const remove =  await Category.findByIdAndDelete(categoryId);
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

module.exports = CategoryController;