import { Router } from "express";
import { CreateUserController } from "../controllers/create_user.controller";
import { CreateUserUseCase } from "../usecases/create_user.usecase";

const createUserUseCase = new CreateUserUseCase();
const createUserController = new CreateUserController(createUserUseCase);

const router = Router();

router.post("/create-user", createUserController.createUser.bind(createUserController));

export { router }