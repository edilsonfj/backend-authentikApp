import { Request, Response } from "express";
import { UserRepository } from "../repositories/user.repository";
import { UpdateUserUseCase } from "../usecases/update_user.usecase";

export class UpdateUserController {
    private readonly userRepository: UserRepository;
    private readonly updateUserUseCase: UpdateUserUseCase;

    constructor() {
        this.userRepository = new UserRepository();
        this.updateUserUseCase = new UpdateUserUseCase(this.userRepository);
    }

    async updateUser(req: Request, res: Response) {

        const useCase = this.updateUserUseCase;

        try {
            const result = await useCase.execute(req.body);
            return res.status(200).json(result);
        } catch (error) {
            return res.status(400).json({ 'Erro inesperado.': error });
        }
    }
}