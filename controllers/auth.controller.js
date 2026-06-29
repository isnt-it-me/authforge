const bcrypt = require("bcryptjs");

const {
    createUser,
    findByUsername
} = require("../repositories/user.repository");

const {
    validateSignup
} = require("../validators/auth.validator");
const jwt = require("jsonwebtoken");
const signup = async (req, res) => {

    try {

        const {
            username,
            password
        } = req.body;

        const validation =
            validateSignup(
                username,
                password
            );

        if (!validation.valid) {

            return res.status(400).json({
                success: false,
                message:
                validation.message
            });
        }

        const existingUser =
            await findByUsername(
                username
            );

        if (existingUser) {

            return res.status(400).json({
                success: false,
                message:
                "Username already exists"
            });
        }

        const hashedPassword =
            await bcrypt.hash(
                password,
                10
            );

        await createUser({
            username,
            password:
            hashedPassword
        });

        return res.status(201).json({
            success: true,
            message:
            "User created successfully"
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message:
            error.message
        });
    }
};

const signin = async (req, res) => {

    try {

        const {
            username,
            password
        } = req.body;

        const user =
        await findByUsername(
            username
        );

        if (!user) {

            return res.status(401).json({
                success: false,
                message:
                "Invalid credentials"
            });
        }
        console.log("========== LOGIN DEBUG ==========");
console.log("Username:", username);
console.log("User Found:", user);

        const isMatch =
        await bcrypt.compare(
            password,
            user.password
        );
        console.log("Entered Password:", password);
console.log("Password Match:", isMatch);

        if (!isMatch) {

            return res.status(401).json({
                success: false,
                message:
                "Invalid credentials"
            });
        }

        const token =
        jwt.sign(
            {
                userId: user._id,
                username:
                user.username
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1h"
            }
        );

        return res.status(200).json({
            success: true,
            token
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message:
            error.message
        });
    }
};

module.exports = {
    signup,
    signin
};