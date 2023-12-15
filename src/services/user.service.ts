import { User } from "../models/user.model";
import * as bcrypt from 'bcrypt'
import logger from "../utils/logger";
import db from "../db";
export class UserService {
    private userModel = User

    async generateUser() {

        try {
            await db.sync()
            const userExist = await this.userModel.findOne({ where: { email: process.env.ADM_MAIL } })
            if (userExist) {
                return { message: 'user exist' }
            }
            const password = bcrypt.hashSync(process.env.ADM_PASS || 'root', 10)
          
            await this.userModel.create({
                email: process.env.ADM_MAIL || 'adm@admin',
                name: process.env.NAME || 'adm',
                password,
                type: 'admin'
            })

            logger.info('user generate')
        } catch (err) {
            logger.error(err)
        }
    }
}