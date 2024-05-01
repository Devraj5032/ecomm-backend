import { User } from "../models/user.js";
import ErrorHandler from "../utils/utility-class.js";
export const newUser = async (req, res, next) => {
    try {
        return next(new ErrorHandler("Ye error hai", 400));
        const { name, email, photo, gender, _id, dob } = req.body;
        const user = await User.create({
            name,
            email,
            photo,
            gender,
            _id,
            dob: new Date(dob),
        });
        return res.status(201).json({
            success: true,
            message: `Welcome, ${user.name}`,
        });
    }
    catch (error) {
        return res.status(400).json({
            success: false,
            message: error,
        });
    }
};
