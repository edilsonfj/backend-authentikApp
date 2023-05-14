import { UserRepository } from "../repositories/user.repository";
import { User } from "../entities/user.entity";
import bcrypt from 'bcrypt'

export class CreateUserUseCase {
    constructor(private readonly userRepository: UserRepository) { }

    async execute(userData: User): Promise<User> {

        const userExists = await this.userRepository.findUserByEmail(userData.email)

        if (userExists) {
            throw new Error('Usuário já cadastrado!')
        }

        const hashedPassword = await bcrypt.hash(userData.password, 10)

        const user = await this.userRepository.createUser({ ...userData, password: hashedPassword });

        return user;
    }
}
