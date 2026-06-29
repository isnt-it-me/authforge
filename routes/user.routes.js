const express =
require("express");



const authMiddleware =
require(
    "../middleware/auth.middleware"
);

const router =
express.Router();

const {
    getMe,
    updateMe
} = require(
    "../controllers/user.controller"
);

/**
 * @swagger
 * /api/user/me:
 *   get:
 *     summary: Get current user
 *     tags:
 *       - User
 *     responses:
 *       200:
 *         description: User fetched successfully
 */

router.get(
    "/me",
    authMiddleware,
    getMe
);

/**
 * @swagger
 * /api/user/me:
 *   put:
 *     summary: Update user profile
 *     tags:
 *       - User
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Profile updated
 */

router.put(
    "/me",
    authMiddleware,
    updateMe
);

module.exports =
router;