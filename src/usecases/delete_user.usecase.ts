import { UserRepository } from "../repositories/user.repository";
import { User } from "../entities/user.entity";

export class DeleteUserUseCase {
    constructor(private readonly userRepository: UserRepository) { }

    async execute(id: string): Promise<User | null> {

        const userExists = await this.userRepository.findUserById(id)

        if (!userExists) {
            throw new Error('Usuário não cadastrado!')
        }

        const user = await this.userRepository.deleteUserById(id);

        return user;
    }
}