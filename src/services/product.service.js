// This file contains functions for product-related business logic, such as managing product stock.

import prisma from '../provider/prisma.provider.js';

// Function to get all products
export const getAllProducts = async () => {
    return await prisma.product.findMany();
};

// Function to get a product by ID
export const getProductById = async (id) => {
    return await prisma.product.findUnique({
        where: { id: id },
    });
};

// Function to create a new product
export const createProduct = async (data) => {
    return await prisma.product.create({
        data: data,
    });
};

// Function to update a product
export const updateProduct = async (id, data) => {
    return await prisma.product.update({
        where: { id: id },
        data: data,
    });
};

// Function to delete a product
export const deleteProduct = async (id) => {
    return await prisma.product.delete({
        where: { id: id },
    });
};

// Function to update product stock
export const updateProductStock = async (id, stock) => {
    return await prisma.product.update({
        where: { id: id },
        data: { stock: stock },
    });
};