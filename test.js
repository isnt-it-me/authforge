require("dotenv").config();

const connectDB =
require("./config/db");

const User =
require("./models/User");

const run = async () => {

    await connectDB();

    const user =
    await User.create({
        username: "ashu",
        password: "123456"
    });

    console.log(user);

    process.exit();
};

run();