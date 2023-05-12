import { Request, Response } from "express";
import { UserRepository } from "../repositories/user.repository";
import { CreateUserUseCase } from "../usecases/create_user.usecase";

export class CreateUserController {
    private readonly userRepository: UserRepository;
    private readonly createUserUseCase: CreateUserUseCase;

    constructor() {
        this.userRepository = new UserRepository();
        this.createUserUseCase = new CreateUserUseCase(this.userRepository);
    }

    async createUser(req: Request, res: Response) {

        const useCase = this.createUserUseCase;

        try {
            const result = await useCase.execute(req.body);
            return res.status(201).json(result);
        } catch (error) {
            return res.status(400).json({ 'Erro inesperado.': error });
        }
    }
}
