import { Router } from "express";

import { CreateUserController } from "@user/use-cases/create-user/create-user-controller";
import { createUserValidation } from "@user/use-cases/create-user/create-user-validation";

const createUserController = new CreateUserController();

export const userRoutes = Router();

userRoutes.post("/create", createUserValidation, async (request, response) => {
  await createUserController.handle(request, response);
});
