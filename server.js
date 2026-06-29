require("dotenv").config();

const app = require("./app");

const connectDB =
require("./config/db");

const redisClient =
require("./config/redis");

const PORT =
process.env.PORT || 5000;

const startServer =
async () => {

    try {

        await connectDB();

        await redisClient.connect();

        console.log(
            "Redis Connected"
        );

        app.listen(
            PORT,
            () => {

                console.log(
                    `Server running on port ${PORT}`
                );

            }
        );

    } catch (error) {

        console.log(error);

    }

};

startServer();