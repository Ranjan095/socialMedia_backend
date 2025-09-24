import express from 'express';
import userRoutes from '../controllers/users/userRoutes.js';
import errorHandler from '../middlewares/errorHandler.js';

const allRoutes = express.Router();

allRoutes.get('/health', async (req, res) => {
    try {
        return res.status(200).json({
            success: true,
            message: 'API is healthy',
        });
    } catch (error) {
        errorHandler(error, req, res);
    }
});

allRoutes.use('/user', userRoutes);

export default allRoutes;
