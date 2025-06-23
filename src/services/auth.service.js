// This file contains functions for handling authentication logic.

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { prisma } from '../provider/prisma.provider.js';

const saltRounds = 10;
const jwtSecret = process.env.JWT_SECRET || 'your_jwt_secret';

// Register a new user
export const registerUser = async (userData) => {
    const hashedPassword = await bcrypt.hash(userData.password, saltRounds);
    const user = await prisma.user.create({
        data: {
            username: userData.username,
            password: hashedPassword,
            role: userData.role || 'user', // Default role is 'user'
        },
    });
    return user;
};

// Login a user
export const loginUser = async (username, password) => {
    const user = await prisma.user.findUnique({
        where: { username },
    });

    if (!user) {
        throw new Error('User not found');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        throw new Error('Invalid password');
    }

    const token = jwt.sign({ id: user.id, role: user.role }, jwtSecret, {
        expiresIn: '1h',
    });

    return { token, user };
};

// Middleware to verify token
export const verifyToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) {
        return res.status(403).send('A token is required for authentication');
    }

    jwt.verify(token, jwtSecret, (err, decoded) => {
        if (err) {
            return res.status(401).send('Invalid Token');
        }
        req.user = decoded;
        next();
    });
};