import { User } from "../entities/user.entity";
import { UserRepository } from "../repositories/user.repository";

export class ConsultIdUserUseCase {
    constructor(private readonly userRepository: UserRepository) { }

    async execute(id: string): Promise<User> {
        const user = await this.userRepository.findUserById(id);

        if (!user) {
            throw new Error("Usuário não encontrado!");
        }

        return user;
    }
}
