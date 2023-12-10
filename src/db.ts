import { config } from "dotenv";
import { Sequelize } from "sequelize";
config()

export default new Sequelize('jojodb',
'root',
    process.env.DB_PASSWORD,
    {
        dialect: 'mysql',
        host: `mysql://root:${process.env.DB_PASSWORD}@jojodata:3306/jojodb`
    })