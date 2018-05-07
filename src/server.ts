import "reflect-metadata"; // this shim is required
import {Application, Request, Response} from "express"
import { DemoController } from './controllers/DemoController';
import { createExpressServer } from "routing-controllers"
import database from "./database/database"

const PORT = process.env.PORT || 3000
const app = createExpressServer({
  controllers:[DemoController]
})

app.listen(PORT, async (err: Error) => {
  if (err) console.error(err.stack)
  await database.sync()
  console.log(`Listening on port ${PORT}`)
})

