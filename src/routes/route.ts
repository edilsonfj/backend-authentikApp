import { Router } from "express";
import { CreateUserController } from "../controllers/create_user.controller";

const router = Router();

router.post('/create-user', (req, res) => {
    new CreateUserController().createUser(req, res)
})

export { router }
