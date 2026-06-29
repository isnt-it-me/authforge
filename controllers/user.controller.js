
const {
    findById,
    updateUserDescription
} = require(
    "../repositories/user.repository"
);

const updateMe =
async (req, res) => {

    try {

        const {
            description
        } = req.body;
        if (!description) {

    return res.status(400).json({
        success: false,
        message:
        "Description is required"
    });

}
        const updatedUser =
        await updateUserDescription(
            req.user.userId,
            description
        );

        return res.status(200).json({
            success: true,
            message:
            "Profile updated",
            user:
            updatedUser
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message:
            error.message
        });
    }
};

const getMe =
async (req, res) => {

    try {

        const user =
        await findById(
            req.user.userId
        );
        return res.status(200).json({
            success: true,
            user
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
    getMe,
    updateMe
};