import { CreateUserDto } from "../dtos/create_user.dto";
import { User } from "../entitys/user.entity";
import { v4 as uuidv4 } from 'uuid';

export class CreateUserUseCase {
    constructor() { }

    async createUser(createUserDto: CreateUserDto): Promise<User> {
        const user = new User(
            uuidv4(),
            createUserDto.name,
            createUserDto.phone,
            createUserDto.email,
            createUserDto.password
        );
        return user;
    }
}
