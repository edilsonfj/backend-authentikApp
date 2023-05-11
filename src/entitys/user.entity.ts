import { v4 as uuidv4 } from 'uuid';

export class User {
    id: string;
    name: string;
    phone: number;
    email: string;
    password: string;
    readonly createdAt: Date;
    updatedAt: Date | null;

    constructor(
        id: string = uuidv4(),
        name: string,
        phone: number,
        email: string,
        password: string,
        createdAt: Date = new Date(),
        updatedAt: Date | null = null
    ) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.password = password;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}
