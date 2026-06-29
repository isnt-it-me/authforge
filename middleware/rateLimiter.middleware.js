const redisClient =
require("../config/redis");

const rateLimiter =
async (
    req,
    res,
    next
) => {

    const ip =
    req.ip;

    const key =
    `rate:${ip}`;

    const count =
    await redisClient.get(
        key
    );

    if (!count) {

        await redisClient.set(
            key,
            1,
            {
                EX: 60
            }
        );

        return next();

    }

    if (
        Number(count) >= 5
    ) {

        return res.status(
            429
        ).json({
            success: false,
            message:
            "Too many requests"
        });

    }

    await redisClient.incr(
        key
    );

    next();

};

module.exports =
rateLimiter;