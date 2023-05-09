import { Request, Response } from "express";
import { CreateUserUseCase } from "../usecases/create_user.usecase";

export class CreateUserController {
    constructor(private readonly createUserUseCase: CreateUserUseCase) { }

    async createUser(request: Request, response: Response): Promise<Response> {
        const { name, phone, email, password } = request.body;

        try {
            const user = await this.createUserUseCase.createUser({ name, phone, email, password });
            return response.status(201).json(user);
        } catch (error) {
            return response.status(400).json({ 'Erro inesperado.': error })
        }
    }
}