
import { 
  Model, Table, Column, DataType
} from "sequelize-typescript";

@Table({ tableName: "events" })
export class Event extends Model<Event> {
  @Column 
  date: Date

  @Column
  title: string

  @Column
  start_time: string

  @Column
  end_time: string

  @Column(DataType.TEXT)
  description: string 

  @Column(DataType.TEXT)
  link: string
}

