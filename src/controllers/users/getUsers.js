import pool from '../../db/dbConfig.js';
import prisma from '../../db/prisma.js';
import errorHandler from '../../middlewares/errorHandler.js';

export const getUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany({});

    // const result = await pool.query(
    //   `SELECT * FROM "User" WHERE "firstName" = 'Ranjan'`
    // );

    return res.status(201).json({
      success: true,
      message: 'User fetched successfully',
      data: users,
    });
  } catch (error) {
    errorHandler(error, req, res);
  }
};
