import { Request, Response } from "express";
import { UserRepository } from "../repositories/user.repository";
import { DeleteUserUseCase } from "../usecases/delete_user.usecase";

export class DeleteUserController {
    private readonly userRepository: UserRepository;
    private readonly deleteUserUseCase: DeleteUserUseCase;

    constructor() {
        this.userRepository = new UserRepository();
        this.deleteUserUseCase = new DeleteUserUseCase(this.userRepository);
    }

    async deleteUser(req: Request, res: Response) {

        const useCase = this.deleteUserUseCase;

        try {
            const result = await useCase.execute(req.params.id);
            return res.status(200).json(result);
        } catch (error) {
            return res.status(400).json({ 'Erro inesperado.': error });
        }
    }
}