import { hash } from "bcrypt";

import { ICreateUserDTO } from "../dtos/CreateUserDTO";
import { User } from "../entities/User";

export class CreateUserService {
    async execute({ name, email, password }: ICreateUserDTO): Promise<User> {
        const userExists = await User.findOne({ email });

        if (userExists) throw new Error("User already exists.");
        if (!password) throw new Error("Password is required.");

        const passwordHashed = await hash(password as string, 8);

        const createUser = User.create({
            name,
            email,
            password: passwordHashed,
        });

        await User.save(createUser);

        return createUser;
    }
}
