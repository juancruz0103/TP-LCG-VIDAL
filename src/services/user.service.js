import prismaClient from '../provider/prisma.provider.js';

export const createUser = async (userData) => {
    const user = await prismaClient.user.create({
        data: userData,
    });
    return user;
};

export const findUserByEmail = async (email) => {
    const user = await prismaClient.user.findUnique({
        where: { email },
    });
    return user;
};

export const updateUser = async (userId, updateData) => {
    const updatedUser = await prismaClient.user.update({
        where: { id: userId },
        data: updateData,
    });
    return updatedUser;
};

export const deleteUser = async (userId) => {
    const deletedUser = await prismaClient.user.delete({
        where: { id: userId },
    });
    return deletedUser;
};