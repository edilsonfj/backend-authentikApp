import { CreateUserDto } from "../dtos/create_user.dto";
import { User } from "../entitys/user.entity";

export class CreateUserUseCase {
    constructor() { }

    async createUser(createUserDto: CreateUserDto): Promise<User> {
        const user = new User();
        user.name = createUserDto.name;
        user.phone = createUserDto.phone;
        user.email = createUserDto.email;
        user.password = createUserDto.password;
        return user
    }

}