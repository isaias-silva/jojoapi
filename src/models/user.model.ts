import { INTEGER, STRING } from "sequelize";

import { Iuser } from "../interfaces/interface.user";
import { Column, Model, Table } from "sequelize-typescript";
import db from "../db";

@Table({
  tableName: 'users',
})
export class User extends Model<Iuser> {
  @Column({
    type: STRING,
    allowNull: false,
  })
  name!: string;

  @Column({
    type: STRING,
    allowNull: false,
  })
  email!: string;

  @Column({
    type: STRING,
    allowNull: false,
  })
  password!: string;
}

