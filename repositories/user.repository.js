const User = require("../models/User");

const createUser = async (userData) => {

    return await User.create(
        userData
    );
};

const findByUsername = async (
    username
) => {

    return await User.findOne({
        username
    });
};

const updateUserDescription =
async (userId, description) => {

    return await User.findByIdAndUpdate(
        userId,
        {
            description
        },
        {
            new: true
        }
    );

};

const findById = async (id) => {

    return await User.findById(
        id
    ).select("-password");
};

const updateDescription = async (
    id,
    description
) => {

    return await User.findByIdAndUpdate(
        id,
        {
            description
        },
        {
            new: true
        }
    );
};

module.exports = {
    createUser,
    findByUsername,
    findById,
    updateUserDescription
};