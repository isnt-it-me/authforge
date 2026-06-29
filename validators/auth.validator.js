const validateSignup = (
    username,
    password
) => {

    if (!username || !password) {

        return {
            valid: false,
            message:
            "Username and password are required"
        };
    }

    return {
        valid: true
    };
};

module.exports = {
    validateSignup
};