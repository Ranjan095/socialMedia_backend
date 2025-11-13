import bcrypt from 'bcrypt';
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

    // Hash password
    const saltRounds = process.env.SALT_ROUNDS ? parseInt(process.env.SALT_ROUNDS) : 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    if (!hashedPassword) {
      return res.status(500).json({
        success: false,
        message: 'Error hashing password',
      });
    }

    // Create user
    const user = await prisma.user.create({
      data: {
        firstName,
        lastName: lastName || null,
        mobile,
        email,
        dob: new Date(dob),
        password: hashedPassword,
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
