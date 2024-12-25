import { container } from "tsyringe";

import { IUserRepositoryDTO } from "@user/dtos";
import { UserRepository } from "@user/repositories/user-repository";

container.registerSingleton<IUserRepositoryDTO>("UserRepository", UserRepository);
