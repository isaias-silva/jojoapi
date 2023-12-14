import { config } from "dotenv";
import { Sequelize } from "sequelize-typescript";
import { User } from "./models/user.model";
config()

const db = new Sequelize('jojodb',
    'root',
    process.env.DB_PASSWORD,
    {
        dialect: 'mysql',
        host: `jojodata`
    })

    db.addModels([User])
    db.sync()
export default db