import { UserRepository } from "../repositories/user.repository";
import { User } from "../entities/user.entity";

export class CreateUserUseCase {
    constructor(private readonly userRepository: UserRepository) { }

    async execute(userData: User): Promise<User> {

        const userExists = await this.userRepository.findUserByEmail(userData.email)

        if (userExists) {
            throw new Error('Usuário já cadastrado!')
        }

        const user = await this.userRepository.createUser(userData);

        return user;
    }
}
