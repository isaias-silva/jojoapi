import { Iuser } from "../interfaces/interface.user";
import userModel from "../models/user.model";

async function loginInSession(user: Iuser) {

    try {
        const userDb: any = await userModel.findOne({
            where: {
                mail: user.mail
            }
        })
    }
    catch {

    }

}