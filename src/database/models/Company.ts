import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({ tableName: "companies" })
export class Company extends Model<Company> {
  @Column
  name: string
  
  @Column
  logo: string

  @Column(DataType.TEXT)
  hiring_link: string
}
