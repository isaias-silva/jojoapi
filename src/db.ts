import { config } from "dotenv";
import { Sequelize } from "sequelize-typescript";
import { User } from "./models/user.model";
import { Stand } from "./models/stand.model";
config()

const db = new Sequelize('jojodb',
    'root',
    process.env.DB_PASSWORD,
    {
        dialect: 'mysql',
        host: `jojodata`
    })

db.addModels([User, Stand])

export default db