import jsonwebtoken from "jsonwebtoken";
import responseHandler from '../handlers/request.handler';
import userModel from '../models/user.models';

const tokenDecode = (req) => {
    try {
        const authHeader = req.headers['authorization'];
        if (authHeader) {
            const token = authHeader.split(" ")[1]
            return jsonwebtoken.verify(token,process.env.TOKEN_SECRET)
        }
        return false;
    }
    catch (err) {
        console.log(err);
    }
}
const auth = async (req, res, next) => {
    const tokenDecode = tokenDecode(req);
    if (!tokenDecode) {
        return responseHandler.unauthorize(res);
    }
    const user = await userModel.findById(tokenDecode.data);
    if (!user) {
        return responseHandler.unauthorize(res); 
    }
    req.user = user;
    next();
}

export default { auth, tokenDecode };