import { INTEGER, STRING, BLOB } from "sequelize";
import db from "../db";
import { Istand } from "../interfaces/interface.stand";
import { Column, Model, Table } from "sequelize-typescript";


@Table({
    tableName: 'stands',
})
export class Stand extends Model<Istand> {
    @Column({
        type: STRING,
        allowNull: false,
      })
    name!: string;
    @Column({
        type: STRING,
        allowNull: false,
      })
    user!: string;
    @Column({
        type: STRING,
        allowNull: false,
      })
      desc!: string;
      @Column({
        type: STRING,
        allowNull: false,
      })
      power!: string;
      @Column({
        type: STRING,
        allowNull: false,
      })
      speed!: string;
      @Column({
        type: STRING,
        allowNull: false,
      })
      range!: string;
      @Column({
        type: STRING,
        allowNull: false,
      })
      durability!: string;
      @Column({
        type: STRING,
        allowNull: false,
      })
      precision!: string;
      @Column({
        type: STRING,
        allowNull: false,
      })
      potential!: string;
      @Column({
        type: STRING,
        allowNull: false,
      })
      img!: string;
      @Column({
        type: STRING,
        allowNull: false,
      })
      color!: string
}
