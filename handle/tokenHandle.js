const jsonwebtoken = require("jsonwebtoken");
const { User } = require('../model/index');

const tokenDecode = (req) => {
    const bearerHeader = req.headers['authorization'];
    if (bearerHeader) {
        const bearer = bearerHeader.split(' ')[1];
        try {
            const tokenDecoded = jsonwebtoken.verify(
                bearer,
                process.env.TOKENSECRET
            );
            return tokenDecoded;
        } catch(err) {
            return false;
        }
    } else {
        return false;
    }
}

exports.verifyAdminToken = async (req, res, next) => {
    const tokenDecoded = tokenDecode(req);
    if (tokenDecoded) {
        const user = await User.findById(tokenDecoded.id);
        if (!user) return res.status(403).json('Not allowed!');
        if(user.role === 1){

            req.user = user;
            next();
        }else{
            res.status(401).json('Unauthorized');
        }

    } else {
        res.status(401).json('Unauthorized');
    }
}

exports.verifyToken = async (req, res, next) => {
    const tokenDecoded = tokenDecode(req);
    if (tokenDecoded) {
       
        const user = await User.findById(tokenDecoded.id);
        if (!user) return res.status(403).json('Not allowed!');
        
        req.user = user;
        next();
    } else {
        res.status(401).json('Unauthorized');
    }
}