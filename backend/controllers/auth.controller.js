
import User from '../models/User.model.js';
import { getToken } from '../utils/token.js';
export const googleAuth = async (req,res)=> {
    try {
        const {name,email} = req.body;
        if(!name || !email){
            return res.status(400).json({message: "Name and email are required"});
        }
        let user = await User.findOne({email});
        if(!user){
            user = new User({name,email});
            await user.save();
        }
        const token = await getToken(user._id);
        res.cookie("token",token,{
            httpOnly: true,
            secure: false,
            sameSite: "strict",
            maxAge: 6 * 60 * 60 * 1000,
        });
        return res.status(200).json({token,user});

    } catch (error) {
        return res.status(500).json({message: "Google Sign-in Error"});
    }
}

export const Logout = async(req,res) => {
    try {
        await res.clearCookie("token");
        return res.status(200).json({message: "Log out successfull"});
    } catch (error) {
        return res.status(500).json({message: "Logout Error"});
    }
}