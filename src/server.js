const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');
const userRoutes = require('./routes/user.routes');
const productRoutes = require('./routes/product.routes');
const authRoutes = require('./routes/auth.routes');

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
    try {
        await prisma.$connect();
        console.log('Connected to the database');
    } catch (error) {
        console.error('Database connection error:', error);
    }
});