import { INTEGER, STRING } from "sequelize";
import db from "../db";

export default db.define('user', {
    id: {
        type: INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false

    },
    name: {
        type: STRING,
        allowNull: false
    },
    email:{
        type:STRING,
        allowNull: false
    },
    password:{
        type:STRING,
        allowNull: false
    }
})