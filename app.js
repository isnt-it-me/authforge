const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const errorHandler =
require(
    "./middleware/error.middleware"
);

const swaggerUi =
require(
    "swagger-ui-express"
);

const swaggerSpec =
require(
    "./config/swagger"
);

const app = express();

app.use(express.json());

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

const userRoutes =
require("./routes/user.routes");

const authRoutes =
require("./routes/auth.routes");

const redisClient =
require("./config/redis");

app.use(
    "/api/auth",
    authRoutes
);
app.use(
    "/api/user",
    userRoutes
);
app.get("/health", (req, res) => {

    res.status(200).json({
        success: true,
        message: "Server running"
    });

});

app.use(
    errorHandler
);

app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(
        swaggerSpec
    )
);


module.exports = app;