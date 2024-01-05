import db from "../db";
import { Iuser } from "../interfaces/interface.user";
import { User } from "../models/user.model";
import { HttpError } from "../utils/HttpError";
import * as bcrypt from 'bcrypt'
import logger from "../utils/logger";

export class AuthService {
    private userModel = User

    loginInSession = async (user: Iuser): Promise<{ name: string, email: string, type: 'user' | 'admin', id: string }> => {
        logger.info('login starting...')

        const { email, password } = user
    
        if (!email || !password) {
            throw new HttpError(400, `info ${!email ? 'EMAIL' : 'PASSWORD'} required`)
        }
        await db.sync()
        const userDb = await this.userModel.findOne({
            where: {
                email
            }
        })
        if (!userDb) {
            throw new HttpError(404, 'user not found')
        }
        const valid = await bcrypt.compare(password, userDb.password)
        if (!valid) {
            throw new HttpError(401, 'incorrect password')
        }

        const { name, type, id } = userDb

        return {
            name,
            email,
            type, id
        }
    }




}


