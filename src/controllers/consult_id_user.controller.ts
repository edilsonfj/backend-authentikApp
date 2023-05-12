import { Request, Response } from 'express';
import { UserRepository } from '../repositories/user.repository';
import { ConsultIdUserUseCase } from '../usecases/consult_id_user.usecase';

export class ConsultIdUserController {
    private readonly userRepository: UserRepository;
    private readonly consultIdUserUseCase: ConsultIdUserUseCase;

    constructor() {
        this.userRepository = new UserRepository();
        this.consultIdUserUseCase = new ConsultIdUserUseCase(this.userRepository);
    }

    async consultIdUser(req: Request, res: Response) {
        const { id } = req.params;

        try {
            const result = await this.consultIdUserUseCase.execute(id);
            if (result) {
                return res.status(200).json(result);
            } else {
                return res.status(404).json({ message: 'Usuário não encontrado.' });
            }
        } catch (error) {
            return res.status(500).json({ message: 'Erro inesperado.', error });
        }
    }
}
