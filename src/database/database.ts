
import {
  Company, Event
} from "./models"
import { Sequelize } from 'sequelize-typescript'


const database = new Sequelize({
  database: "ledc_api",
  dialect: "mysql",
  username: "root",
  password: "Disco111!",
  // modelPaths: [__dirname + "/models"]
})

database.addModels([
  Company, Event
])

export default database