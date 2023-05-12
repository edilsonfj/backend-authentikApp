import { User } from "../entities/user.entity";
import { UserRepository } from "../repositories/user.repository";

export class ConsultEmailUserUseCase {
    constructor(private readonly userRepository: UserRepository) { }

    async execute(id: string): Promise<User> {
        const user = await this.userRepository.findUserByEmail(id);

        if (!user) {
            throw new Error("Usuário não encontrado!");
        }

        return user;
    }
}
