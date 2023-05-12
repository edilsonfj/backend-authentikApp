import { prisma } from "../database/prisma";
import { User } from "../entitys/user.entity";
import { v4 as uuidv4 } from 'uuid';

export class UserRepository {

    async createUser(userData: User): Promise<User> {
        const user = await prisma.user.create({
            data: {
                id: uuidv4(),
                name: userData.name,
                phone: userData.phone,
                email: userData.email,
                password: userData.password,
                createdAt: new Date(),
                updatedAt: null,
            },
        });
        return user;
    }

    async findUserById(id: string): Promise<User | null> {
        const user = await prisma.user.findUnique({
            where: {
                id: id,
            },
        });
        return user;
    }

    async findUserByEmail(email: string): Promise<User | null> {
        const user = await prisma.user.findUnique({
            where: {
                email: email,
            },
        });
        return user;
    }

    async updateUserById(id: string, userData: User): Promise<User | null> {
        const user = await prisma.user.update({
            where: {
                id: id,
            },
            data: {
                name: userData.name,
                phone: userData.phone,
                email: userData.email,
                password: userData.password,
                updatedAt: new Date(),
            },
        });
        return user;
    }

    async deleteUserById(id: string): Promise<User | null> {
        const user = await prisma.user.delete({
            where: {
                id: id,
            },
        });
        return user;
    }

}