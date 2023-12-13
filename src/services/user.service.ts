import { User } from "../models/user.model";

export class UserService {
    private userModel = User

    async generateUser() {

        const userExist = await this.userModel.findOne({ where: { email: process.env.ADM_MAIL } })
        if (userExist) {
            return { message: 'user exist' }
        }
    }
}