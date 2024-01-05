import db from "../db";
import { Istand } from "../interfaces/interface.stand";
import standModel from "../models/stand.model";
import { HttpError } from "../utils/HttpError";
import logger from "../utils/logger";

export class StandService {
    private standModel = standModel

    async create(stand: Istand) {
        try {

            await db.sync();
            const exists = await this.standModel.findOne({ where: { name: stand.name } })

            if (exists) {
                throw new HttpError(400, 'stand exists!')

            }
            await this.standModel.create({...stand})
            return {
                message:`stand ${stand.name} created`
            }
        } catch (err: any) {

            throw new HttpError(err?.status || 500, err?.message || 'internal')
        }

    }
}