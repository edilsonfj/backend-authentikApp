import { UserRepository } from "../repositories/user.repository";
import { User } from "../entities/user.entity";

export class UpdateUserUseCase {
    constructor(private readonly userRepository: UserRepository) { }

    async execute(userData: User): Promise<string | null> {

        const userExists = await this.userRepository.findUserById(userData.id)

        if (!userExists) {
            throw new Error('Usuário não cadastrado!')
        }

        const user = await this.userRepository.updateUserById(userData.id, userData);

        return 'Usuário atualizado com sucesso!';
    }
}