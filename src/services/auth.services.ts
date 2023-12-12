import db from "../db";
import { Iuser } from "../interfaces/interface.user";
import { User } from "../models/user.model";
import { HttpError } from "../utils/HttpError";
import * as bcrypt from 'bcrypt'
import logger from "../utils/logger";
async function loginInSession(user: Iuser): Promise<{ name: string, email: string } | undefined> {
    await db.sync()
    try {
        const { email, password } = user
        const userDb = await User.findOne({
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

        const { name } = userDb

        return {
            name,
            email
        }
    }
    catch (err: HttpError | unknown) {
        logger.error(err)

    }

}