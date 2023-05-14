import { UserRepository } from "../repositories/user.repository";
import { User } from "../entities/user.entity";
import bcrypt from 'bcrypt'

export class UpdateUserUseCase {
    constructor(private readonly userRepository: UserRepository) { }

    async execute(userData: User): Promise<string | null> {

        const userExists = await this.userRepository.findUserById(userData.id)

        if (!userExists) {
            throw new Error('Usuário não cadastrado!')
        }

        if (userData.password) {
            const hashedPassword = await bcrypt.hash(userData.password, 10)
            userData.password = hashedPassword
        }

        const user = await this.userRepository.updateUserById(userData.id, userData);

        return 'Usuário atualizado com sucesso!';
    }
}