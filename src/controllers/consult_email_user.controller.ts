import { Request, Response } from 'express';
import { UserRepository } from '../repositories/user.repository';
import { ConsultEmailUserUseCase } from '../usecases/consult_email_user.usecase';

export class ConsultEmailUserController {
    private readonly userRepository: UserRepository;
    private readonly consultEmailUserUseCase: ConsultEmailUserUseCase;

    constructor() {
        this.userRepository = new UserRepository();
        this.consultEmailUserUseCase = new ConsultEmailUserUseCase(this.userRepository);
    }

    async consultEmailUser(req: Request, res: Response) {
        const { email } = req.params;

        try {
            const result = await this.consultEmailUserUseCase.execute(email);
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