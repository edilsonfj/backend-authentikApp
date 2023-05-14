import { Router } from "express";
import { CreateUserController } from "../controllers/create_user.controller";
import { ConsultIdUserController } from "../controllers/consult_id_user.controller";
import { ConsultEmailUserController } from "../controllers/consult_email_user.controller";
import { UpdateUserController } from "../controllers/update_user.controller";
import { DeleteUserController } from "../controllers/delete_user.controller";

const router = Router();

router.post('/create-user', (req, res) => {
    new CreateUserController().createUser(req, res)
})

router.get('/consult-id-user/:id', (req, res) => {
    new ConsultIdUserController().consultIdUser(req, res)
})

router.get('/consult-email-user/:email', (req, res) => {
    new ConsultEmailUserController().consultEmailUser(req, res)
})

router.put('/update-user', (req, res) => {
    new UpdateUserController().updateUser(req, res)
})

router.delete('/delete-user/:id', (req, res) => {
    new DeleteUserController().deleteUser(req, res)
})

router.all('*', (req, res) => {
    res.status(404).send('404 Page Not Found');
})

export { router }
