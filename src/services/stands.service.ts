import db from "../db";
import { Istand } from "../interfaces/interface.stand";
import {Stand} from "../models/stand.model";
import { HttpError } from "../utils/HttpError";
import * as fs from 'fs'
import * as path from 'path'
export class StandService {
    private standModel = Stand

    async create(stand: Istand) {
        try {

            await db.sync();

            const exists = await this.standModel.findOne({ where: { name: stand.name } })

            const formatStand = { ...stand }
            if (exists) {
                throw new HttpError(400, 'stand exists!')

            }

            const file = fs.readFileSync(path.resolve('uploads', stand.name))

            const img = path.resolve('public', 'assets', `${stand.name}.png`)

            fs.writeFileSync(img, file)

            formatStand.img = `/assets/${stand.name}.png`

            await this.standModel.create({ ...formatStand })

            fs.unlinkSync(path.resolve('uploads', stand.name))

            return {
                message: `stand ${stand.name} created`
            }
        } catch (err: any) {

            throw new HttpError(err?.status || 500, err?.message || 'internal')
        }


    }
    async get(id?: string) {
        try {
            await db.sync()
            if (id) {
                const stand = await this.standModel.findOne({ where: { id } })

                return stand
            } else {
                return await this.standModel.findAll();
            }
        }
        catch (err: any) {

            throw new HttpError(err?.status || 500, err?.message || 'internal')
        }
    }
}