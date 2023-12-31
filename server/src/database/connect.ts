import { config } from "dotenv"
import mongoose from "mongoose"

config()

const database: string | any = process.env.DATABASE_URL

async function connect() {  
  await mongoose.connect(database)
  .then(() => console.log("Conectado com banco de dados"))
  .catch(() => console.log("Erro ao conectado com o banco de dados"))
}

export default connect 