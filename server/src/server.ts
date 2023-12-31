import { config } from "dotenv"
import connect from "./database/connect"
import express from "express"
import GlassesRouter from "./controllers/GlassesController"

config()

const port: Number | any = process.env.PORT

const app = express()

app.use(express.json())
app.use(GlassesRouter)

connect()

app.listen(port, () => {
  console.log("Api rodadndo na porta: " + port)
})

export default app