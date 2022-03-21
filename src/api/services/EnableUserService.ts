import { User } from "../entities/User";

export class EnableUserService {
    async execute(id: string): Promise<User> {
        const user = await User.findOne({ id });

        if (!user) throw new Error("User don't exists.");

        user.active = !user.active;
        await User.save(user);

        return user;
    }
}
