import { USER_REPOSITORY } from "src/config/services";
import { User } from "../entities/user.entity";

export const userProviders = [
    {
      provide: USER_REPOSITORY,
      useValue: User,
    },
  ];
  