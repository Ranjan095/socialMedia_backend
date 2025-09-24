import prisma from '../../db/prisma.js';
import errorHandler from '../../middlewares/errorHandler.js';

export const createUser = async (req, res) => {
    try {
        const {
            firstName,
            lastName, // optional
            mobile,
            email,
            dob,
            password,
            country,
            state,
            city,
        } = req.body;

        // Basic validation
        if (!firstName || !mobile || !email || !dob || !password || !country || !state || !city) {
            return res.status(400).json({
                success: false,
                message: 'Missing required fields',
            });
        }

        // Create user
        const user = await prisma.user.create({
            data: {
                firstName,
                lastName: lastName || null, // allow null if not provided
                mobile,
                email,
                dob: new Date(dob),
                password, // ⚠️ hash this in real apps!
                country,
                state,
                city,
            },
        });

        return res.status(201).json({
            success: true,
            message: 'User created successfully',
            data: user,
        });
    } catch (error) {
        errorHandler(error, req, res);
    }
};
