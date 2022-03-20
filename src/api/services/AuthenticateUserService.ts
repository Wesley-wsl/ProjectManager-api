import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

import { IAuthenticateUserDto } from "../dtos/AuthenticateUserDto";
import { User } from "../entities/User";

export class AuthenticateUserService {
    async execute({ email, password }: IAuthenticateUserDto): Promise<{
        token: string;
        user: User;
    }> {
        const user = await User.findOne({ email });

        if (!user) throw new Error("Email/Password incorrect.");
        if (!password) throw new Error("Password is required.");

        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) throw new Error("Email/Password incorrect.");
        if (!user.active) throw new Error("User inactive.");

        const token = sign(
            {
                id: user.id,
            },
            `${process.env.JWT_SECRET}`,
            {
                subject: `${user.id}`,
                expiresIn: "1h",
            },
        );

        return {
            token,
            user,
        };
    }
}
