const {Slider} = require('../model/index');

const SliderCategory ={
    add : async (req,res) =>{
        const {name,img} =req.body;
        try {
            console.log(req.body);
            const slider = new Slider({
                name : name,
                img : img,
            });
    
           await slider.save();
           res.status(200).json(slider);
        } catch (error) {
            res.status(500).json(error);
        }
       
    },
    getId : async (req,res) =>{
        const {id} = req.params;
       
        const slider = await Slider.findById(id);

        res.status(200).json(slider);
    },
    getAll : async (req,res) =>{
        try {
            const slider = await Slider.find();
            res.status(200).json(slider)
        } catch (error) {
            res.status(500).json(error)
        }
       
    },
    Update : async (req,res) =>{
        const sliderId = req.params.id;
        try {
            await Slider.findByIdAndUpdate(sliderId, req.body)
            res.status(200).json({success : 'update success'})
        } catch (error) {
            res.status(500).json(error)
        }
    },
    delete : async (req,res) =>{
        const sliderId = req.params.id;

        Slider.findByIdAndDelete(sliderId, (err, data) => {
            if (err) {
                console.log(err);
                return res.status(500).send(err);
            }
    
            res.status(200).json(data);
        });
    },
    sreach : async (req,res) =>{},
}

module.exports = SliderCategory;