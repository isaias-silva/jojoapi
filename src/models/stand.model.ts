import { INTEGER, STRING, BLOB } from "sequelize";
import db from "../db";


export default db.define('stand', {

    id: {
        type: INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: { type: STRING, allowNull: false },
    user: { type: STRING, allowNull: false },
    desc: { type: STRING, allowNull: false },
    power: { type: STRING, allowNull: false },
    speed: { type: STRING, allowNull: false },
    range: { type: STRING, allowNull: false },
    durability: { type: STRING, allowNull: false },
    precision: { type: STRING, allowNull: false },
    potential: { type: STRING, allowNull: false },
    img: { type: BLOB, allowNull: false },
    color: { type: STRING, allowNull: false }
})