const {ItemOrder,Order} = require('../model/index');

const orderController ={
    add : async (req,res) =>{
        // console.log(req.user);
        const {totalPrice,name,sdt,tp,huyen,xa,ghichu,sonha,itemOrder} =req.body;
        try {
            console.log(req.body);
            const order = new Order({
                name : name,
                sdt : sdt,
                tp : tp,
                huyen : huyen,
                xa : xa,
                ghichu : ghichu,
                sonha : sonha,
                totalPrice :totalPrice,
                itemCart : itemOrder
            });
    Order.findByIdAndDelete()
           await order.save();

           res.status(200).json(product);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getId : async (req,res) =>{
        const {id} = req.params;
       
        const order = await Order.findById(id).populate(
        {
            path : 'itemCart',
            populate : {path : 'Product'}
        }
        );

        res.status(200).json(order);
    },
    getAll : async (req,res) =>{
        try {
            const order =await Order.find();
            res.status(200).json(order);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    Update : async (req,res) =>{
       
    },
    delete : async (req,res) =>{
        const orderId = req.params.id;

        Order.findByIdAndDelete(orderId, (err, data) => {
            if (err) {
                console.log(err);
                return res.status(500).send(err);
            }
    
            res.status(200).json(data);
        });
    },
    sreach : async (req,res) =>{},
}

module.exports = orderController;